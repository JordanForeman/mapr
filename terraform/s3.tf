resource "aws_s3_bucket" "deployment_bucket" {
    bucket = "${var.app_name}.${var.root_domain}"
    acl = "public-read"

    website {
        index_document = "${var.root_object}"
    }

    tags = {
        Name = "${var.app_name}"
    }
}
