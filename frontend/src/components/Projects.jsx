export default function Projects({ projects }) {
    if (!projects || projects.length === 0) return null;

    return (
        <section id="projects" className="container">
            <div style={{ marginBottom: '4.5rem' }}>
                <h2 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1rem' }}>Software Projects</h2>
                <div style={{ width: '40px', height: '3px', background: 'var(--primary-color)', marginBottom: '1.5rem' }} />
                <p style={{ color: 'var(--text-muted)', maxWidth: '600px', fontSize: '1.1rem' }}>
                    Engineered solutions focusing on system reliability, performance optimization, and architectural integrity.
                </p>
            </div>
            
            <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
                {projects.map(project => (
                    <div 
                        key={project.id} 
                        className="card" 
                        style={{ 
                            padding: '2rem', 
                            display: 'flex', 
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            height: '100%'
                        }}
                    >
                        <div>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '1rem', color: 'var(--text-main)' }}>{project.title}</h3>
                            
                            <p style={{ 
                                color: 'var(--text-muted)', 
                                marginBottom: '2rem', 
                                fontSize: '0.95rem',
                                lineHeight: '1.6',
                                minHeight: '80px' 
                            }}>
                                {project.description}
                            </p>
                        </div>

                        <div>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2rem' }}>
                                {project.technologies.split(',').map(tech => (
                                    <span 
                                        key={tech} 
                                        style={{ 
                                            fontSize: '0.7rem', 
                                            fontFamily: 'var(--font-mono)',
                                            color: 'var(--text-main)', 
                                            background: 'rgba(255,255,255,0.03)',
                                            padding: '0.2rem 0.6rem',
                                            borderRadius: '2px',
                                            border: '1px solid var(--surface-border)'
                                        }}
                                    >
                                        {tech.trim()}
                                    </span>
                                ))}
                            </div>
                            
                            {project.link ? (
                                <a 
                                    href={project.link} 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    style={{ 
                                        fontWeight: 600, 
                                        fontSize: '0.85rem', 
                                        display: 'flex', 
                                        alignItems: 'center', 
                                        gap: '0.5rem',
                                        color: 'var(--primary-color)'
                                    }}
                                >
                                    Documentation / Live ↗
                                </a>
                            ) : (
                                <div style={{ 
                                    fontSize: '0.8rem', 
                                    fontFamily: 'var(--font-mono)',
                                    color: 'var(--text-muted)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.5rem'
                                }}>
                                    <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#ef4444' }} />
                                    PRIVATE_CODEBASE
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
