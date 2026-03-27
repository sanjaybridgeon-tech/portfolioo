export default function About({ info }) {
    if (!info) return null;

    return (
        <section id="about" className="container">
            <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', alignItems: 'start', gap: '4rem' }}>
                <div>
                    <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '1.5rem' }}>Core Technical Profile</h2>
                    <div style={{ width: '40px', height: '3px', background: 'var(--primary-color)', marginBottom: '2rem' }} />
                    <p style={{ color: 'var(--text-main)', fontSize: '1.1rem', lineHeight: '1.7', opacity: 0.9 }}>
                        {info.summary}
                    </p>
                </div>
                
                <div className="card" style={{ padding: '2.5rem' }}>
                    <h3 style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '2rem', fontFamily: 'var(--font-mono)' }}>System Identification</h3>
                    <div style={{ display: 'grid', gap: '1.5rem' }}>
                        {[
                            { label: 'Primary Function', value: info.title },
                            { label: 'Geographic Location', value: info.location },
                            { label: 'Communication Channel', value: info.email },
                            { label: 'Status', value: 'API_STABLE / OPEN_FOR_OPS' }
                        ].map(item => (
                            <div key={item.label}>
                                <p style={{ color: 'var(--text-muted)', fontSize: '0.75rem', fontWeight: 500, marginBottom: '0.3rem' }}>{item.label}</p>
                                <p style={{ fontWeight: 600, fontSize: '1rem', color: 'var(--text-main)' }}>{item.value}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
