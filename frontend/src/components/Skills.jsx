export default function Skills({ skills }) {
    if (!skills || skills.length === 0) return null;
    const categories = [...new Set(skills.map(s => s.category))]

    return (
        <section id="skills" className="container">
            <span className="section-num">03 / SYSTEMS_STACK</span>
            <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
                gap: '4rem',
                marginTop: '3rem'
            }}>
                {categories.map((cat, idx) => (
                    <div key={cat}>
                        <h4 style={{ 
                            fontSize: '1.5rem', 
                            color: 'var(--text-main)',
                            fontFamily: 'var(--font-heading)',
                            marginBottom: '2rem',
                            display: 'flex',
                            alignItems: 'baseline',
                            gap: '1rem',
                            borderBottom: '1px solid var(--accent-brown)',
                            paddingBottom: '0.5rem'
                        }}>
                            <span style={{ fontSize: '0.8rem', color: 'var(--accent-brown)', fontFamily: 'var(--font-secondary)' }}>0{idx + 1}</span>
                            {cat}
                        </h4>
                        <div style={{ display: 'grid', gap: '1rem' }}>
                            {skills.filter(s => s.category === cat).map(skill => (
                                <div key={skill.id} style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '0.25rem' }}>
                                    <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)', fontFamily: 'var(--font-secondary)', letterSpacing: '0.1em' }}>{skill.name}</span>
                                    <span style={{ width: '4px', height: '4px', background: 'var(--accent-brown)', borderRadius: '50%', alignSelf: 'center' }} />
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
