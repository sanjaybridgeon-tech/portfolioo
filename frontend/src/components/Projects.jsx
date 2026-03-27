export default function Projects({ projects }) {
    if (!projects || projects.length === 0) return null;

    return (
        <section id="projects" className="container">
            <h2>Project Architecture / Codebases</h2>
            <div style={{ display: 'grid', gap: '2rem' }}>
                {projects.map(project => (
                    <div 
                        key={project.id} 
                        className="card" 
                        style={{ 
                            padding: '2.5rem', 
                            display: 'flex', 
                            flexDirection: 'column',
                            gap: '2rem'
                        }}
                    >
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem' }}>
                            <div>
                                <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '0.5rem' }}>{project.title}</h3>
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                                    {project.technologies.split(',').map(tech => (
                                        <span 
                                            key={tech} 
                                            style={{ 
                                                fontSize: '0.7rem', 
                                                fontFamily: 'var(--font-mono)',
                                                color: 'var(--primary-color)',
                                                padding: '0.1rem 0.4rem',
                                                border: '1px solid var(--surface-border)',
                                                borderRadius: '2px'
                                            }}
                                        >
                                            {tech.trim()}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            
                            {project.link && (
                                <a 
                                    href={project.link} 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="btn"
                                    style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)' }}
                                >
                                    [VIEW_SOURCE_CODE]
                                </a>
                            )}
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2.5rem' }}>
                            <div>
                                <h4 className="text-xs" style={{ color: 'var(--primary-color)', marginBottom: '1rem', textTransform: 'uppercase' }}>Scope / Problem Statement</h4>
                                <p style={{ fontSize: '0.9rem', lineHeight: '1.6' }}>{project.description}</p>
                            </div>
                            
                            <div>
                                <h4 className="text-xs" style={{ color: 'var(--primary-color)', marginBottom: '1rem', textTransform: 'uppercase' }}>Engineering Decisions</h4>
                                <ul style={{ listStyle: 'none', fontSize: '0.85rem', color: 'var(--text-muted)', display: 'grid', gap: '0.8rem' }}>
                                    <li style={{ display: 'flex', gap: '0.5rem' }}>
                                        <span style={{ color: 'var(--accent-color)' }}>▹</span> 
                                        Optimized persistence layer for high-throughput write operations.
                                    </li>
                                    <li style={{ display: 'flex', gap: '0.5rem' }}>
                                        <span style={{ color: 'var(--accent-color)' }}>▹</span> 
                                        Implemented circuit breaker patterns for downstream service resiliency.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
