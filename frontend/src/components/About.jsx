export default function About({ info }) {
    if (!info) return null;

    return (
        <section id="about" className="container">
            <h2>Technical Identification</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
                <div className="card">
                    <p className="text-xs" style={{ marginBottom: '0.5rem' }}>BASE_ROLE</p>
                    <p style={{ fontWeight: 600, color: 'var(--text-main)' }}>{info.title}</p>
                </div>
                <div className="card">
                    <p className="text-xs" style={{ marginBottom: '0.5rem' }}>GEO_LOCATION</p>
                    <p style={{ fontWeight: 600, color: 'var(--text-main)' }}>{info.location}</p>
                </div>
                <div className="card">
                    <p className="text-xs" style={{ marginBottom: '0.5rem' }}>AVAILABILITY</p>
                    <p style={{ fontWeight: 600, color: 'var(--text-main)' }}>ACTIVE_HIRE_POOL</p>
                </div>
                <div className="card">
                    <p className="text-xs" style={{ marginBottom: '0.5rem' }}>CORE_FOCUS</p>
                    <p style={{ fontWeight: 600, color: 'var(--text-main)' }}>SYSTEM_ARCHITECTURE</p>
                </div>
            </div>
            <div className="divider" />
            <p style={{ maxWidth: '800px', lineHeight: '1.7', fontSize: '1rem' }}>
                {info.summary}
            </p>
        </section>
    )
}
