data "aws_iam_policy_document" "deployment_bucket_policy" {
    statement {
        sid = "CloudFrontCanGetObject"
        actions = ["s3:GetObject"]
        effect = "Allow"
        resources = ["arn:aws:s3:::${var.app_name}.${var.root_domain}/*"]
        principals {
            type = "AWS"
            identifiers = ["${aws_cloudfront_origin_access_identity.origin_access_identity.iam_arn}"]
        }
    }

    statement {
        sid = "DenyifHeadersNotPresent"
        actions = [
            "s3:PutObjectAcl",
            "s3:PutObjectVersionAcl"
        ]
        effect = "Deny"
        resources = ["arn:aws:s3:::${var.app_name}.${var.root_domain}/*"]
        principals {
            type = "*"
            identifiers = ["*"]
        }
        condition {
            test = "Null"
            variable = "s3:x-amz-acl"
            values = ["true"]
        }
        condition {
            test = "Null"
            variable = "s3:x-amz-grant-full-control"
            values = ["true"]
        }
        condition {
            test = "Null"
            variable = "s3:x-amz-grant-read"
            values = ["true"]
        }
        condition {
            test = "Null"
            variable = "s3:x-amz-grant-read-acp"
            values = ["true"]
        }
        condition {
            test = "Null"
            variable = "s3:x-amz-grant-write"
            values = ["true"]
        }
        condition {
            test = "Null"
            variable = "s3:x-amz-grant-write-acp"
            values = ["true"]
        }
    }
}
