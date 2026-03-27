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

    // --- ADMIN CRUD METHODS ---

    public PersonalInfo updatePersonalInfo(PersonalInfo info) {
        return personalInfoRepository.save(info);
    }

    public Skill saveSkill(Skill skill) {
        return skillRepository.save(skill);
    }

    public void deleteSkill(Long id) {
        skillRepository.deleteById(id);
    }

    public Experience saveExperience(Experience experience) {
        return experienceRepository.save(experience);
    }

    public void deleteExperience(Long id) {
        experienceRepository.deleteById(id);
    }

    public Education saveEducation(Education education) {
        return educationRepository.save(education);
    }

    public void deleteEducation(Long id) {
        educationRepository.deleteById(id);
    }

    public Project saveProject(Project project) {
        return projectRepository.save(project);
    }

    public void deleteProject(Long id) {
        projectRepository.deleteById(id);
    }
}
