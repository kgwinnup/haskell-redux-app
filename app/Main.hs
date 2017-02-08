{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE TemplateHaskell #-}
{-# LANGUAGE DeriveGeneric #-}
module Main where

import Web.Scotty
import Web.Scotty.Internal.Types (ActionError(Next), ActionT)
import qualified Data.Text.Lazy as L
import Network.Wai.Middleware.Static
import Network.Wai.Middleware.RequestLogger
import Control.Monad.IO.Class
import Web.Scotty.SignedCookies
import Web.Cookie
import Data.Text
import Data.Aeson (toJSON, fromJSON)
import Data.Aeson.TH
import GHC.Generics
import qualified Data.Text.Encoding as E


data User = User { userId :: Integer
                 , fullName :: Text } deriving (Show)
$(deriveJSON defaultOptions ''User)

data Login = Login { loginUserName :: Text 
                   , loginPassword :: Text 
                   , loginRemember :: Bool } deriving (Show)
$(deriveJSON defaultOptions ''Login)

data Error = Error { errorMessage :: Text 
                   , errorType :: Text } deriving (Show)
$(deriveJSON defaultOptions ''Error)



--
-- These next two functions will need to be replaced with database calls
-- they are stubbed out here as a template
--
loginUser :: Login -> Maybe User
loginUser login = 
  if (loginUserName login) == "kyle"
  then Just $ User { userId = 1, fullName = "Kyle" }
  else Nothing

login = do
  creds <- jsonData :: ActionM Login
  case loginUser creds of
    Just user -> do 
      let cookie = def { setCookieName = E.encodeUtf8 "userId", 
                         setCookieValue = E.encodeUtf8 ((pack . show) (userId user)) }
      setSignedCookie "secret" cookie
      json user
    Nothing -> json $ Error { errorType = "0", errorMessage = "yep" }

--
-- end stubbed out functions
--


-- | delete userId cookie to log user out
logout = do
  deleteCookie "userId"
  redirect "/"

-- ! check if cookies are set before proceding to URI function and pass user data
beLoggedIn :: (User -> ActionM ()) -> ActionM ()
beLoggedIn response = do
  user <- jsonData :: ActionM User
  response $ User { userId = 0, fullName = "kyle" }

main :: IO ()
main = scotty 3000 $ do
  middleware logStdoutDev
  middleware $ staticPolicy (noDots >-> addBase "static")
  get "/" $ file "static/index.html"
  post "/login" login
  get "/logout" logout


