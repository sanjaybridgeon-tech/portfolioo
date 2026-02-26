package com.sanjay.portfolio.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Column;

@Entity
public class Experience {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String company;
    private String role;
    private String period;
    @Column(length = 2000)
    private String description;

    public Experience() {}
    public Experience(Long id, String company, String role, String period, String description) {
        this.id = id;
        this.company = company;
        this.role = role;
        this.period = period;
        this.description = description;
    }

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    public String getCompany() { return company; }
    public void setCompany(String company) { this.company = company; }
    public String getRole() { return role; }
    public void setRole(String role) { this.role = role; }
    public String getPeriod() { return period; }
    public void setPeriod(String period) { this.period = period; }
    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }
}
