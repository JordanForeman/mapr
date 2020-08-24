terraform {
  backend "s3" {
    bucket = "jf-terraform-state"
    key    = "mapr/mapr.tfstate"
    region = "us-east-1"
  }
}

provider "aws" {
    version = "~> 3.0"
    region = "us-east-1"
}
