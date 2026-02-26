export default function Skills({ skills }) {
    const categories = [...new Set(skills.map(s => s.category))]

    return (
        <section id="skills" className="container">
            <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem', textAlign: 'center' }}>My Skills</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                {categories.map(cat => (
                    <div key={cat} className="glass" style={{ padding: '2rem' }}>
                        <h3 style={{ marginBottom: '1.5rem', color: 'var(--primary-color)' }}>{cat} Skills</h3>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem' }}>
                            {skills.filter(s => s.category === cat).map(skill => (
                                <span key={skill.id} className="glass" style={{ padding: '0.4rem 1rem', fontSize: '0.9rem', background: 'rgba(255,255,255,0.1)' }}>
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
