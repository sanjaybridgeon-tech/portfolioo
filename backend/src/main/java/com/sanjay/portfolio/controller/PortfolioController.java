package com.sanjay.portfolio.controller;

import com.sanjay.portfolio.model.*;
import com.sanjay.portfolio.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:5173") // Allow Vite frontend
public class PortfolioController {

    @Autowired private PersonalInfoRepository personalInfoRepository;
    @Autowired private SkillRepository skillRepository;
    @Autowired private ExperienceRepository experienceRepository;
    @Autowired private EducationRepository educationRepository;
    @Autowired private ProjectRepository projectRepository;

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
