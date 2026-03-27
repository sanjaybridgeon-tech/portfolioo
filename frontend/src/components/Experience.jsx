export default function Experience({ experience }) {
    if (!experience || experience.length === 0) return null;

    return (
        <section id="experience" className="container">
            <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
                <h2 className="gradient-text" style={{ fontSize: '3rem', marginBottom: '1rem' }}>Professional Journey</h2>
            </div>
            
            <div style={{ position: 'relative', maxWidth: '800px', margin: '0 auto' }}>
                {/* Timeline Line */}
                <div style={{ 
                    position: 'absolute', 
                    left: '20px', 
                    top: 0, 
                    bottom: 0, 
                    width: '2px', 
                    background: 'linear-gradient(to bottom, var(--primary-color), transparent)',
                    opacity: 0.3
                }} />

                <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
                    {experience.map(exp => (
                        <div key={exp.id} style={{ position: 'relative', paddingLeft: '4rem' }}>
                            {/* Dot */}
                            <div style={{ 
                                position: 'absolute', 
                                left: '13px', 
                                top: '8px', 
                                width: '16px', 
                                height: '16px', 
                                borderRadius: '50%', 
                                background: 'var(--primary-color)',
                                border: '4px solid var(--bg-color)',
                                zIndex: 2,
                                boxShadow: '0 0 15px var(--primary-color)'
                            }} />
                            
                            <div className="glass" style={{ padding: '2.5rem' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '1rem' }}>
                                    <div>
                                        <h3 style={{ fontSize: '1.4rem', fontWeight: 700, margin: 0 }}>{exp.role}</h3>
                                        <p style={{ color: 'var(--primary-color)', fontWeight: 600, fontSize: '1rem', marginTop: '0.2rem' }}>{exp.company}</p>
                                    </div>
                                    <span className="badge badge-demo" style={{ fontSize: '0.8rem' }}>{exp.duration || exp.period}</span>
                                </div>
                                <p style={{ color: 'var(--text-muted)', lineHeight: '1.8' }}>{exp.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
