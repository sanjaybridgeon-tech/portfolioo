export default function Contact({ info, onEmailClick }) {
    return (
        <section id="contact" className="container">
            <div className="glass" style={{ padding: '4rem', textAlign: 'center' }}>
                <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Get In Touch</h2>
                <p style={{ color: 'var(--text-muted)', marginBottom: '3rem', fontSize: '1.1rem' }}>
                    Feel free to reach out for collaborations or just a friendly hello!
                </p>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
                    <button onClick={onEmailClick} className="glass" style={{ padding: '1rem 2rem', borderColor: 'var(--primary-color)', cursor: 'pointer', background: 'none', color: 'inherit' }}>
                        Gmail
                    </button>
                    <a href={info.linkedin} target="_blank" rel="noopener noreferrer" className="glass" style={{ padding: '1rem 2rem' }}>
                        LinkedIn
                    </a>
                    <a href={info.github} target="_blank" rel="noopener noreferrer" className="glass" style={{ padding: '1rem 2rem' }}>
                        GitHub
                    </a>
                </div>
                <div style={{ marginTop: '3rem', color: 'var(--text-muted)' }}>
                    <p>{info.phone}</p>
                    <p>{info.location}</p>
                </div>
            </div>
        </section>
    )
}
