export default function Projects({ projects }) {
    return (
        <section id="projects" className="container">
            <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem', textAlign: 'center' }}>Featured Projects</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
                {projects.map(project => (
                    <div key={project.id} className="glass" style={{ padding: '2rem', transition: 'var(--transition)', cursor: 'default' }}>
                        <h3 style={{ marginBottom: '1rem', color: 'var(--primary-color)' }}>{project.title}</h3>
                        <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', minHeight: '80px' }}>{project.description}</p>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
                            {project.technologies.split(',').map(tech => (
                                <span key={tech} style={{ fontSize: '0.8rem', color: 'var(--accent-color)' }}>#{tech.trim()}</span>
                            ))}
                        </div>
                        {project.link && (
                            <a href={project.link} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary-color)', fontWeight: '600' }}>
                                View Project →
                            </a>
                        )}
                    </div>
                ))}
            </div>
        </section>
    )
}
