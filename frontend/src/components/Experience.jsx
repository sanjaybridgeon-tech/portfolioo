export default function Experience({ experience }) {
    if (!experience || experience.length === 0) return null;

    return (
        <section id="experience" className="container">
            <div style={{ marginBottom: '4rem' }}>
                <h2 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1rem' }}>Professional Experience</h2>
                <div style={{ width: '40px', height: '3px', background: 'var(--primary-color)', marginBottom: '1.5rem' }} />
            </div>
            
            <div style={{ position: 'relative', maxWidth: '900px' }}>
                {/* Slim Linear Timeline */}
                <div style={{ 
                    position: 'absolute', 
                    left: '0.5rem', 
                    top: 0, 
                    bottom: 0, 
                    width: '1px', 
                    background: 'var(--surface-border)'
                }} />

                <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
                    {experience.map(exp => (
                        <div key={exp.id} style={{ position: 'relative', paddingLeft: '3rem' }}>
                            {/* Simple Status Dot */}
                            <div style={{ 
                                position: 'absolute', 
                                left: 'calc(0.5rem - 4px)', 
                                top: '0.6rem', 
                                width: '9px', 
                                height: '9px', 
                                borderRadius: '50%', 
                                background: 'var(--bg-color)',
                                border: '2px solid var(--primary-color)',
                                zIndex: 2
                            }} />
                            
                            <div className="card" style={{ padding: '2rem' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '1rem' }}>
                                    <div>
                                        <h3 style={{ fontSize: '1.25rem', fontWeight: 600 }}>{exp.role}</h3>
                                        <p style={{ color: 'var(--primary-color)', fontWeight: 500, fontSize: '0.95rem', marginTop: '0.2rem' }}>{exp.company}</p>
                                    </div>
                                    <span style={{ fontSize: '0.8rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>
                                        [{exp.duration || exp.period}]
                                    </span>
                                </div>
                                <p style={{ color: 'var(--text-muted)', lineHeight: '1.6', fontSize: '0.95rem' }}>{exp.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
