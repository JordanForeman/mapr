resource "aws_cloudfront_origin_access_identity" "origin_access_identity" {
    comment = "${var.app_name}-cloudfront-origin-access-identity"
}

resource "aws_cloudfront_distribution" "cloudfront_distribution" {
    origin {
        domain_name = "${aws_s3_bucket.deployment_bucket.bucket_regional_domain_name}"
        origin_id = "${aws_s3_bucket.deployment_bucket.bucket_regional_domain_name}"

        s3_origin_config {
            origin_access_identity = "${aws_cloudfront_origin_access_identity.origin_access_identity.cloudfront_access_identity_path}"
        }
    }

    enabled = true
    is_ipv6_enabled = true
    default_root_object = "${var.root_object}"

    aliases = ["${var.app_name}.${var.root_domain}"]

    default_cache_behavior {
        allowed_methods = ["HEAD", "GET"]
        cached_methods = ["HEAD", "GET"]
        target_origin_id = "${aws_s3_bucket.deployment_bucket.bucket_regional_domain_name}"
        viewer_protocol_policy = "redirect-to-https"

        forwarded_values {
            query_string = false

            cookies {
                forward = "none"
            }
        }
    }

    viewer_certificate {
        acm_certificate_arn = "${data.aws_acm_certificate.ssl_cert.arn}"
        ssl_support_method = "sni-only"
    }

    restrictions {
        geo_restriction {
            restriction_type = "none"
        }
    }

    tags = {
        Name = "${var.app_name}"
    }
}