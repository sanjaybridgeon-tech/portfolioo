export default function About({ info }) {
    if (!info) return null;

    return (
        <section id="about" className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'start' }}>
            <div>
                <span className="section-num">02 / TECHNICAL_INTRODUCTION</span>
                <h2 style={{ fontSize: '1.5rem', marginBottom: '2rem' }}>Core Value Architecture</h2>
                <p style={{ maxWidth: '600px', lineHeight: '2', fontSize: '1rem', color: 'var(--text-muted)' }}>
                    {info.summary}
                </p>
            </div>
            
            <div style={{ display: 'grid', gap: '2rem' }}>
                {[
                    { label: 'BASE_STX', value: info.title },
                    { label: 'LOC_COORD', value: info.location },
                    { label: 'ENG_STATUS', value: 'ACTIVE_FOR_OPS' }
                ].map(item => (
                    <div key={item.label} style={{ borderBottom: '1px solid var(--surface-border)', paddingBottom: '1rem' }}>
                        <p className="text-xs" style={{ color: 'var(--accent-brown)', marginBottom: '0.5rem' }}>{item.label}</p>
                        <p style={{ fontSize: '1.1rem', color: 'var(--text-main)', fontFamily: 'var(--font-secondary)' }}>{item.value}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}
