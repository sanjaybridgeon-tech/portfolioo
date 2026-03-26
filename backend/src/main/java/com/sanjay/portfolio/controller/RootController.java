package com.sanjay.portfolio.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
public class RootController {

    @GetMapping("/")
    public String home() {
        return "Backend is running 🚀";
    }

    @GetMapping("/api/health")
    public Map<String, String> healthCheck() {
        return Map.of("status", "UP");
    }
}
