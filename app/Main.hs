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
import Data.Text.Lazy (fromStrict)
import Data.Monoid ((<>))
import qualified Data.Text.Encoding as E
import Network.HTTP.Types
import Data.Aeson (toJSON, fromJSON)
import Data.Aeson.TH
import GHC.Generics
import qualified UserTypes as U
import qualified GeneralTypes as G

secret = "secret"

--
-- These next two functions will need to be replaced with database calls
-- they are stubbed out here as a template
--
loginUser :: U.Login -> Maybe U.User
loginUser login =
  if U.loginUserName login == "kyle"
  then Just U.User { U.userId = 1, U.fullName = "Kyle" }
  else Nothing

login = do
  p <- jsonData :: ActionM U.Login
  case loginUser p of
    Just user -> do
      let cookie = def { setCookieName = E.encodeUtf8 "userId",
                         setCookieValue = E.encodeUtf8 ((pack . show) (U.userId user)) }
      setSignedCookie secret cookie
      json user
    Nothing -> json G.Error { G.errorType = "0", G.errorMessage = "yep" }

--
-- end stubbed out functions
--

unauthorizedUser = do
  status status501
  text "Unauthorized User"

-- | delete userId cookie to log user out
logout = do
  deleteCookie "userId"
  redirect "/"

-- | check if cookies are set before proceding to URI function and pass user data
beLoggedIn :: (U.User -> ActionM ()) -> ActionM ()
beLoggedIn response = do
  userId <- getSignedCookie secret "userId"
  case userId of
    Just u -> response U.User { U.userId = (read . show) u, U.fullName = "" }
    Nothing -> deleteCookie "userId" >> unauthorizedUser

memberPage :: U.User -> ActionM ()
memberPage user = text $ "welcome " <> fromStrict (U.fullName user)

main :: IO ()
main = scotty 3000 $ do
  middleware logStdoutDev
  middleware $ staticPolicy (noDots >-> addBase "static")
  get "/" $ file "static/index.html"
  get "/login" $ file "static/index.html"
  post "/login" login
  get "/logout" logout
  get "/secure" $ beLoggedIn memberPage
