export default function Skills({ skills }) {
    const categories = [...new Set(skills.map(s => s.category))]

    return (
        <section id="skills" className="container">
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                <h2 className="gradient-text" style={{ fontSize: '3rem', marginBottom: '1rem' }}>Technical Mastery</h2>
                <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto' }}>
                    A comprehensive overview of my specialized stack and professional soft skills.
                </p>
            </div>
            
            <div className="bento-grid">
                {categories.map((cat, idx) => (
                    <div 
                        key={cat} 
                        className="glass gradient-border" 
                        style={{ 
                            padding: '2.5rem',
                            gridColumn: idx === 0 ? 'span 7' : 'span 5',
                            minHeight: '300px'
                        }}
                    >
                        <h3 style={{ 
                            marginBottom: '1.5rem', 
                            fontSize: '1.5rem',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.8rem'
                        }}>
                            <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--primary-color)' }} />
                            {cat} Pillar
                        </h3>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                            {skills.filter(s => s.category === cat).map(skill => (
                                <span 
                                    key={skill.id} 
                                    className="glass" 
                                    style={{ 
                                        padding: '0.6rem 1.2rem', 
                                        fontSize: '0.9rem', 
                                        fontWeight: 500,
                                        letterSpacing: '0.02em',
                                        transition: 'var(--transition)'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.target.style.background = 'rgba(124, 58, 237, 0.1)';
                                        e.target.style.borderColor = 'var(--primary-color)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.target.style.background = 'var(--card-bg)';
                                        e.target.style.borderColor = 'var(--glass-border)';
                                    }}
                                >
                                    {skill.name}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
