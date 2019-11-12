data "aws_acm_certificate" "ssl_cert" {
    domain = "jordanforeman.com"
    types = ["AMAZON_ISSUED"]
    statuses = ["ISSUED"]
    most_recent = true
}