export default function About({ info }) {
    return (
        <section id="about" className="container">
            <div className="glass" style={{ padding: '3rem 1.5rem', textAlign: 'center' }}>
                <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>About Me</h2>
                <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', maxWidth: '800px', margin: '0 auto', lineHeight: '1.7', padding: '0 1rem' }}>
                    {info.summary}
                </p>
                <div style={{
                    marginTop: '3rem',
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
                    gap: '1.5rem',
                    padding: '0 1rem'
                }}>
                    <div style={{ padding: '1rem' }}>
                        <h4 style={{ color: 'var(--primary-color)' }}>Location</h4>
                        <p>{info.location}</p>
                    </div>
                    <div>
                        <h4 style={{ color: 'var(--primary-color)' }}>Education</h4>
                        <p>B.Tech in ECE</p>
                    </div>
                    <div>
                        <h4 style={{ color: 'var(--primary-color)' }}>Availability</h4>
                        <p>Open for opportunities</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
