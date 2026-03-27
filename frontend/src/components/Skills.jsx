export default function Skills({ skills }) {
    if (!skills || skills.length === 0) return null;
    const categories = [...new Set(skills.map(s => s.category))]

    return (
        <section id="skills" className="container">
            <div style={{ marginBottom: '4.5rem' }}>
                <h2 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1rem' }}>Technical Stack</h2>
                <div style={{ width: '40px', height: '3px', background: 'var(--primary-color)', marginBottom: '1.5rem' }} />
                <p style={{ color: 'var(--text-muted)', maxWidth: '600px', fontSize: '1.1rem' }}>
                    A detailed focus on core technologies, development tools, and architectural frameworks.
                </p>
            </div>
            
            <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
                gap: '1.5rem' 
            }}>
                {categories.map((cat) => (
                    <div key={cat} className="card" style={{ padding: '2.5rem' }}>
                        <h3 style={{ 
                            marginBottom: '1.5rem', 
                            fontSize: '1rem',
                            fontWeight: 700,
                            color: 'var(--text-main)',
                            textTransform: 'uppercase',
                            letterSpacing: '0.15em',
                            fontFamily: 'var(--font-mono)'
                        }}>
                            {cat}
                        </h3>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                            {skills.filter(s => s.category === cat).map(skill => (
                                <span 
                                    key={skill.id} 
                                    style={{ 
                                        padding: '0.4rem 0.8rem', 
                                        fontSize: '0.85rem', 
                                        fontWeight: 500,
                                        fontFamily: 'var(--font-mono)',
                                        color: 'var(--text-muted)',
                                        background: 'rgba(255,255,255,0.03)',
                                        border: '1px solid var(--surface-border)',
                                        borderRadius: '4px'
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
