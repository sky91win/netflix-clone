output "cluster_name" {
  value = module.eks.cluster_name
}

output "ecr_url" {
  value = aws_ecr_repository.netflix.repository_url
}
