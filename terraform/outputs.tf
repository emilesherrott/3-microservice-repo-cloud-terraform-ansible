output "http_server_public_dns" {
  value = values(aws_instance.http_servers).*.public_dns
}

output "elb_public_dns" {
    value = aws_elb.elb.dns_name
}