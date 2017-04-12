{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE TemplateHaskell #-}
{-# LANGUAGE DeriveGeneric #-}

module GeneralTypes where

import Data.Aeson (toJSON, fromJSON)
import Data.Aeson.TH
import GHC.Generics
import Data.Text (Text)


data Error = Error { errorMessage :: Text 
                   , errorType :: Text } deriving (Show)
$(deriveJSON defaultOptions ''Error)

data Success = Success { successMessage :: Text } deriving (Show)
$(deriveJSON defaultOptions ''Success)
