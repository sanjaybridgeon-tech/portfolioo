export default function Projects({ projects }) {
    return (
        <section id="projects" className="container">
            <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
                <h2 className="gradient-text" style={{ fontSize: '3rem', marginBottom: '1rem' }}>Selected Works</h2>
                <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto' }}>
                    A collection of high-impact applications focusing on performance, scalability, and user experience.
                </p>
            </div>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2.5rem' }}>
                {projects.map(project => (
                    <div 
                        key={project.id} 
                        className="glass gradient-border" 
                        style={{ 
                            padding: '2.5rem', 
                            display: 'flex', 
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            height: '100%'
                        }}
                    >
                        <div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
                                <h3 style={{ fontSize: '1.5rem', fontWeight: 700 }}>{project.title}</h3>
                                <div style={{ width: '12px', height: '12px', background: 'var(--primary-color)', borderRadius: '50%', boxShadow: '0 0 15px var(--primary-color)' }}></div>
                            </div>
                            
                            <p style={{ 
                                color: 'var(--text-muted)', 
                                marginBottom: '2rem', 
                                fontSize: '1.05rem',
                                lineHeight: '1.7',
                                minHeight: '100px' 
                            }}>
                                {project.description}
                            </p>
                        </div>

                        <div>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem', marginBottom: '2rem' }}>
                                {project.technologies.split(',').map(tech => (
                                    <span 
                                        key={tech} 
                                        style={{ 
                                            fontSize: '0.75rem', 
                                            color: 'white', 
                                            background: 'rgba(255,255,255,0.05)',
                                            padding: '0.3rem 0.8rem',
                                            borderRadius: '20px',
                                            border: '1px solid var(--glass-border)'
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
                                    className="gradient-text"
                                    style={{ fontWeight: 700, fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}
                                >
                                    View Live Project <span>→</span>
                                </a>
                            ) : (
                                <span style={{ color: 'var(--text-muted)', fontSize: '0.8rem', fontStyle: 'italic' }}>Private Repository</span>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
