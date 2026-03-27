export default function Experience({ experience }) {
    if (!experience || experience.length === 0) return null;

    return (
        <section id="experience" className="container">
            <span className="section-num">05 / TECHNICAL_TIMELINE</span>
            <div style={{ marginTop: '4rem', display: 'grid', gap: '4rem' }}>
                {experience.map((exp, idx) => (
                    <div key={exp.id} style={{ 
                        display: 'grid', 
                        gridTemplateColumns: window.innerWidth <= 768 ? '1fr' : '0.2fr 1.5fr 1fr',
                        gap: '2rem',
                        alignItems: 'baseline',
                        borderBottom: '1px solid var(--surface-border)',
                        paddingBottom: '3rem'
                    }}>
                        <div style={{ fontSize: '3rem', fontFamily: 'var(--font-heading)', color: 'var(--accent-brown)' }}>
                            0{idx + 1}
                        </div>
                        
                        <div>
                            <h3 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{exp.role}</h3>
                            <p style={{ color: 'var(--accent-brown)', fontFamily: 'var(--font-secondary)', textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.9rem' }}>
                                @ {exp.company}
                            </p>
                        </div>

                        <div>
                            <p className="text-xs" style={{ marginBottom: '1rem', color: 'var(--text-main)', opacity: 0.6 }}>// {exp.duration.toUpperCase()}</p>
                            <p style={{ fontSize: '0.9rem', lineHeight: '1.7', color: 'var(--text-muted)' }}>
                                {exp.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
