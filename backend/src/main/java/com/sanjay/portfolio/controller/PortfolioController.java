package com.sanjay.portfolio.controller;

import com.sanjay.portfolio.model.*;
import com.sanjay.portfolio.repository.*;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = {"http://localhost:5173", "https://*.onrender.com"}) // Allow Vite frontend and Render deployments
public class PortfolioController {

    private final PersonalInfoRepository personalInfoRepository;
    private final SkillRepository skillRepository;
    private final ExperienceRepository experienceRepository;
    private final EducationRepository educationRepository;
    private final ProjectRepository projectRepository;

    public PortfolioController(
            PersonalInfoRepository personalInfoRepository,
            SkillRepository skillRepository,
            ExperienceRepository experienceRepository,
            EducationRepository educationRepository,
            ProjectRepository projectRepository) {
        this.personalInfoRepository = personalInfoRepository;
        this.skillRepository = skillRepository;
        this.experienceRepository = experienceRepository;
        this.educationRepository = educationRepository;
        this.projectRepository = projectRepository;
    }

    @GetMapping("/health")
    public String healthCheck() {
        return "Backend is running";
    }

    @GetMapping("/personal-info")
    public List<PersonalInfo> getPersonalInfo() {
        return personalInfoRepository.findAll();
    }

    @GetMapping("/skills")
    public List<Skill> getSkills() {
        return skillRepository.findAll();
    }

    @GetMapping("/experience")
    public List<Experience> getExperience() {
        return experienceRepository.findAll();
    }

    @GetMapping("/education")
    public List<Education> getEducation() {
        return educationRepository.findAll();
    }

    @GetMapping("/projects")
    public List<Project> getProjects() {
        return projectRepository.findAll();
    }
}
