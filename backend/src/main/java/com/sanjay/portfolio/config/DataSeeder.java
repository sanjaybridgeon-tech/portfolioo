package com.sanjay.portfolio.config;

import com.sanjay.portfolio.model.*;
import com.sanjay.portfolio.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.util.Arrays;

@Component
public class DataSeeder implements CommandLineRunner {

    @Autowired private PersonalInfoRepository personalInfoRepository;
    @Autowired private SkillRepository skillRepository;
    @Autowired private ExperienceRepository experienceRepository;
    @Autowired private EducationRepository educationRepository;
    @Autowired private ProjectRepository projectRepository;

    @Override
    public void run(String... args) throws Exception {
        if (personalInfoRepository.count() == 0) {
            // Personal Info
            PersonalInfo info = new PersonalInfo();
            info.setName("SANJAY A");
            info.setTitle("FULL STACK DEVELOPER");
            info.setLocation("Malappuram, Kerala, India (676305)");
            info.setPhone("+91 7510782632");
            info.setEmail("sanjaysr2902@gmail.com");
            info.setLinkedin("https://www.linkedin.com/in/sanjaysr2902/");
            info.setGithub("https://github.com/sanjaybridgeon-tech");
            info.setLeetcode("https://leetcode.com/u/kFV17A9muN/");
            info.setSummary("Enthusiastic B.Tech graduate in Electronics and Communication Engineering with hands-on experience in front-end and full-stack development using HTML, CSS, JavaScript, React, and Java. Passionate about building responsive web applications and has demonstrated leadership roles in college committees.");
            personalInfoRepository.save(info);

            // Skills
            skillRepository.saveAll(Arrays.asList(
                new Skill(null, "Java", "Technical"),
                new Skill(null, "React", "Technical"),
                new Skill(null, "Redux", "Technical"),
                new Skill(null, "Spring Boot", "Technical"),
                new Skill(null, "SQL", "Technical"),
                new Skill(null, "REST APIs", "Technical"),
                new Skill(null, "HTML", "Technical"),
                new Skill(null, "CSS", "Technical"),
                new Skill(null, "Git", "Technical"),
                new Skill(null, "JavaScript", "Technical"),
                new Skill(null, "C Programming", "Technical"),
                new Skill(null, "Communication", "Soft"),
                new Skill(null, "Decision Making", "Soft"),
                new Skill(null, "Leadership", "Soft"),
                new Skill(null, "Teamwork", "Soft")
            ));

            // Experience
            experienceRepository.save(new Experience(null, "Bridgeon, Kakkancheri", "Full Stack Developer Intern", "05/2025 – 02/2026", 
                "Hands-on training in frontend and backend technologies. Developed RESTful APIs using Java. Built frontend components using React and JavaScript. Utilized Git for version control."));

            // Education
            educationRepository.save(new Education(null, "MES College of Engineering, Kuttippuram", "Bachelor of Technology (B.Tech) in Electronics and Communication Engineering", "2020 – 2024"));

            // Projects
            projectRepository.save(new Project(null, "One Accessories Web Application", 
                "Developed a full-stack application with a React frontend and Spring Boot backend. Implemented RESTful APIs for product management and search functionality.", 
                "React, Java, Spring Boot, SQL", ""));
        }
    }
}
