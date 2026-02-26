package com.sanjay.portfolio.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Column;

@Entity
public class Education {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String institution;
    private String degree;
    private String period;

    public Education() {}
    public Education(Long id, String institution, String degree, String period) {
        this.id = id;
        this.institution = institution;
        this.degree = degree;
        this.period = period;
    }

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    public String getInstitution() { return institution; }
    public void setInstitution(String institution) { this.institution = institution; }
    public String getDegree() { return degree; }
    public void setDegree(String degree) { this.degree = degree; }
    public String getPeriod() { return period; }
    public void setPeriod(String period) { this.period = period; }
}
