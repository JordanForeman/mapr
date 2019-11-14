data "aws_route53_zone" "hosted_zone" {
    name = "${var.root_domain}"
    private_zone = false
}

resource "aws_route53_record" "dns_record" {
    zone_id = "${data.aws_route53_zone.hosted_zone.zone_id}"
    name = "${var.app_name}.${var.root_domain}"
    type = "A"

    alias {
        name = "${aws_cloudfront_distribution.cloudfront_distribution.domain_name}"
        zone_id = "${aws_cloudfront_distribution.cloudfront_distribution.hosted_zone_id}"
        evaluate_target_health = false
    }
}