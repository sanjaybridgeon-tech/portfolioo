export default function Experience({ experience }) {
    return (
        <section id="experience" className="container">
            <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem', textAlign: 'center' }}>Experience</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                {experience.map(exp => (
                    <div key={exp.id} className="glass" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap' }}>
                            <h3 style={{ color: 'var(--primary-color)' }}>{exp.role}</h3>
                            <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>{exp.period}</span>
                        </div>
                        <h4 style={{ fontWeight: '500' }}>{exp.company}</h4>
                        <p style={{ color: 'var(--text-muted)', marginTop: '0.5rem' }}>{exp.description}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}
