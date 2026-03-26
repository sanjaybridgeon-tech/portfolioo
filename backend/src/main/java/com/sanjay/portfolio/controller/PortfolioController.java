package com.sanjay.portfolio.controller;

import com.sanjay.portfolio.model.*;
import com.sanjay.portfolio.service.PortfolioService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class PortfolioController {

    private final PortfolioService portfolioService;

    public PortfolioController(PortfolioService portfolioService) {
        this.portfolioService = portfolioService;
    }

    @GetMapping("/personal-info")
    public List<PersonalInfo> getPersonalInfo() {
        return portfolioService.getPersonalInfo();
    }

    @GetMapping("/skills")
    public List<Skill> getSkills() {
        return portfolioService.getSkills();
    }

    @GetMapping("/experience")
    public List<Experience> getExperience() {
        return portfolioService.getExperience();
    }

    @GetMapping("/education")
    public List<Education> getEducation() {
        return portfolioService.getEducation();
    }

    @GetMapping("/projects")
    public List<Project> getProjects() {
        return portfolioService.getProjects();
    }
}
