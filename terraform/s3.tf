resource "aws_s3_bucket" "deployment_bucket" {
    bucket = "${var.app_name}.${var.root_domain}"
    policy = "${data.aws_iam_policy_document.deployment_bucket_policy.json}"

    website {
        index_document = "${var.root_object}"
    }

    tags = {
        Name = "${var.app_name}"
    }
}
