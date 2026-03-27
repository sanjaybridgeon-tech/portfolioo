package com.sanjay.portfolio.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class SpaController {

    @GetMapping(value = {
        "/admin/**",
        "/projects/**",
        "/experience/**",
        "/skills/**",
        "/about/**",
        "/contact/**"
    })
    public String forward() {
        // Forward all non-API routes to index (for SPA routing)
        return "forward:/";
    }
}
