package com.sanjay.portfolio.service;

import com.sanjay.portfolio.model.*;
import com.sanjay.portfolio.repository.*;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PortfolioService {

    private final PersonalInfoRepository personalInfoRepository;
    private final SkillRepository skillRepository;
    private final ExperienceRepository experienceRepository;
    private final EducationRepository educationRepository;
    private final ProjectRepository projectRepository;

    public PortfolioService(
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

    public List<PersonalInfo> getPersonalInfo() {
        return personalInfoRepository.findAll();
    }

    public List<Skill> getSkills() {
        return skillRepository.findAll();
    }

    public List<Experience> getExperience() {
        return experienceRepository.findAll();
    }

    public List<Education> getEducation() {
        return educationRepository.findAll();
    }

    public List<Project> getProjects() {
        return projectRepository.findAll();
    }
}
