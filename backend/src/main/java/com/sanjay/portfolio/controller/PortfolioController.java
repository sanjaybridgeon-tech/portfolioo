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

    // --- ADMIN ENDPOINTS (Protected) ---

    @PutMapping("/personal-info")
    public PersonalInfo updatePersonalInfo(@RequestBody PersonalInfo info) {
        return portfolioService.updatePersonalInfo(info);
    }

    @PostMapping("/skills")
    public Skill saveSkill(@RequestBody Skill skill) {
        return portfolioService.saveSkill(skill);
    }

    @DeleteMapping("/skills/{id}")
    public void deleteSkill(@PathVariable Long id) {
        portfolioService.deleteSkill(id);
    }

    @PostMapping("/experience")
    public Experience saveExperience(@RequestBody Experience experience) {
        return portfolioService.saveExperience(experience);
    }

    @DeleteMapping("/experience/{id}")
    public void deleteExperience(@PathVariable Long id) {
        portfolioService.deleteExperience(id);
    }

    @PostMapping("/education")
    public Education saveEducation(@RequestBody Education education) {
        return portfolioService.saveEducation(education);
    }

    @DeleteMapping("/education/{id}")
    public void deleteEducation(@PathVariable Long id) {
        portfolioService.deleteEducation(id);
    }

    @PostMapping("/projects")
    public Project saveProject(@RequestBody Project project) {
        return portfolioService.saveProject(project);
    }

    @DeleteMapping("/projects/{id}")
    public void deleteProject(@PathVariable Long id) {
        portfolioService.deleteProject(id);
    }
}
