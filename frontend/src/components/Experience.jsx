export default function Experience({ experience }) {
    if (!experience || experience.length === 0) return null;

    return (
        <section id="experience" className="container">
            <h2>Professional Log / Experience</h2>
            <div style={{ display: 'grid', gap: '3rem' }}>
                {experience.map((exp, index) => (
                    <div key={exp.id} style={{ 
                        display: 'grid', 
                        gridTemplateColumns: 'minmax(120px, 150px) 1fr',
                        gap: '2.5rem',
                        position: 'relative'
                    }}>
                        <div style={{ textAlign: 'right', paddingTop: '0.25rem' }}>
                            <p className="text-xs" style={{ 
                                color: 'var(--text-main)', 
                                fontWeight: 700,
                                letterSpacing: '0.05em'
                            }}>
                                {exp.duration.toUpperCase()}
                            </p>
                        </div>
                        
                        <div style={{ borderLeft: '1px solid var(--surface-border)', paddingLeft: '2.5rem', paddingBottom: '1rem' }}>
                            <h3 style={{ fontSize: '1.125rem', fontWeight: 600, marginBottom: '0.4rem' }}>{exp.role}</h3>
                            <p style={{ color: 'var(--primary-color)', fontSize: '0.875rem', fontWeight: 600, marginBottom: '1rem', fontFamily: 'var(--font-mono)' }}>
                                @ {exp.company.toUpperCase()}
                            </p>
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
