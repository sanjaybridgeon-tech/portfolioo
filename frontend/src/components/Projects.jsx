export default function Projects({ projects }) {
    if (!projects || projects.length === 0) return null;

    return (
        <section id="projects" className="container">
            <span className="section-num">04 / ARCHITECTURAL_NODES</span>
            <div style={{ display: 'grid', gap: '6rem', marginTop: '4rem' }}>
                {projects.map((project, idx) => (
                    <div 
                        key={project.id} 
                        style={{ 
                            display: 'grid', 
                            gridTemplateColumns: window.innerWidth <= 768 ? '1fr' : '0.5fr 1fr 1fr',
                            gap: '3rem',
                            alignItems: 'start'
                        }}
                    >
                        <div style={{ fontSize: '4rem', fontFamily: 'var(--font-heading)', color: 'var(--accent-brown)', lineHeight: 0.8 }}>
                            0{idx + 1}
                        </div>
                        
                        <div>
                            <h3 style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>{project.title}</h3>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginBottom: '2rem' }}>
                                {project.technologies.split(',').map(tech => (
                                    <span 
                                        key={tech} 
                                        style={{ 
                                            fontSize: '0.75rem', 
                                            fontFamily: 'var(--font-secondary)',
                                            color: 'var(--text-muted)',
                                            letterSpacing: '0.1em'
                                        }}
                                    >
                                        // {tech.trim()}
                                    </span>
                                ))}
                            </div>
                            <p style={{ fontSize: '1rem', lineHeight: '1.8', color: 'var(--text-muted)' }}>
                                {project.description}
                            </p>
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                            <div style={{ 
                                background: 'var(--surface)', 
                                aspectRatio: '16/9', 
                                border: '1px solid var(--surface-border)',
                                position: 'relative'
                            }}>
                                <div style={{ position: 'absolute', inset: 0, background: 'rgba(93, 64, 55, 0.1)' }} />
                            </div>
                            {project.link && (
                                <a 
                                    href={project.link} 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="btn"
                                    style={{ textAlign: 'center' }}
                                >
                                    ACCESS_CODEBASE
                                </a>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
