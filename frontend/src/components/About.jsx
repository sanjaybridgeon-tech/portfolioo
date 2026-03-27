export default function About({ info }) {
    if (!info) return null;

    return (
        <section id="about" className="container">
            <div className="bento-grid" style={{ alignItems: 'center' }}>
                <div className="glass gradient-border" style={{ gridColumn: 'span 5', padding: '3rem', position: 'relative', overflow: 'hidden' }}>
                    <div style={{ position: 'absolute', top: 0, left: 0, width: '4px', height: '100%', background: 'var(--primary-color)' }} />
                    <h2 className="gradient-text" style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>About Me</h2>
                    <p style={{ color: 'var(--text-main)', fontSize: '1.1rem', lineHeight: '1.8' }}>
                        {info.summary}
                    </p>
                </div>
                
                <div style={{ gridColumn: 'span 7' }}>
                    <div className="bento-grid" style={{ gap: '1.5rem' }}>
                        {[
                            { label: 'Role', value: info.title },
                            { label: 'Location', value: info.location },
                            { label: 'Email', value: info.email },
                            { label: 'Phone', value: info.phone }
                        ].map(item => (
                            <div key={item.label} className="glass" style={{ padding: '1.5rem', gridColumn: 'span 6' }}>
                                <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>{item.label}</p>
                                <p style={{ fontWeight: 600, fontSize: '1.1rem' }}>{item.value}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
