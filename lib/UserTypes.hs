{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE TemplateHaskell #-}
{-# LANGUAGE DeriveGeneric #-}

module UserTypes where

import Data.Aeson (toJSON, fromJSON)
import Data.Aeson.TH
import GHC.Generics
import Data.Text (Text)

data User = User { userId :: Integer
                 , fullName :: Text } deriving (Show)
$(deriveJSON defaultOptions ''User)

data Login = Login { loginUserName :: Text 
                   , loginPassword :: Text 
                   , loginRemember :: Bool } deriving (Show)
$(deriveJSON defaultOptions ''Login)



