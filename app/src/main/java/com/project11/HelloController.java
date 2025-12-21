package com.project11;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController {

    @GetMapping("/")
    public String home() {
        return "Project 11 running via GitHub Actions + ArgoCD!";
    }

    @GetMapping("/health")
    public String health() {
        return "OK";
    }
}
