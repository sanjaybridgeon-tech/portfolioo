export default function Skills({ skills }) {
    if (!skills || skills.length === 0) return null;
    const categories = [...new Set(skills.map(s => s.category))]

    return (
        <section id="skills" className="container">
            <h2>Technical Stack</h2>
            <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
                gap: '1px',
                background: 'var(--surface-border)',
                border: '1px solid var(--surface-border)'
            }}>
                {categories.map((cat) => (
                    <div key={cat} style={{ padding: '2rem', background: 'var(--bg-color)' }}>
                        <h4 style={{ 
                            fontSize: '0.7rem', 
                            fontWeight: 700, 
                            color: 'var(--primary-color)',
                            textTransform: 'uppercase',
                            letterSpacing: '0.15em',
                            fontFamily: 'var(--font-mono)',
                            marginBottom: '1.5rem'
                        }}>
                            {cat}
                        </h4>
                        <div style={{ display: 'grid', gap: '0.8rem' }}>
                            {skills.filter(s => s.category === cat).map(skill => (
                                <div key={skill.id} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                    <div style={{ width: '4px', height: '1px', background: 'var(--primary-color)' }} />
                                    <span style={{ fontSize: '0.875rem', color: 'var(--text-main)', fontFamily: 'var(--font-family)' }}>{skill.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
