export default function Contact({ info, onEmailClick }) {
    if (!info) return null;

    return (
        <section id="contact" className="container">
            <div className="card" style={{ padding: '5rem 3rem', textAlign: 'left', position: 'relative', overflow: 'hidden', background: 'linear-gradient(135deg, var(--surface) 0%, #0c0c0e 100%)' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
                    <div>
                        <h2 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1.5rem' }}>Start a Technical Conversation</h2>
                        <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', maxWidth: '500px', lineHeight: '1.6', marginBottom: '2rem' }}>
                            Currently evaluating new opportunities for software engineer roles. My inbox is open for technical inquiries and collaborations.
                        </p>
                        <button 
                            onClick={onEmailClick} 
                            className="btn btn-primary"
                            style={{ padding: '1rem 2.5rem', fontSize: '1rem' }}
                        >
                            Execute Contact Sequence
                        </button>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                        <a href={info.linkedin} target="_blank" rel="noopener noreferrer" className="card" style={{ padding: '2rem', textAlign: 'center' }}>
                            <p style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)', marginBottom: '0.5rem', fontFamily: 'var(--font-mono)' }}>LINKEDIN</p>
                            <span style={{ fontWeight: 600 }}>Sanjay A. ↗</span>
                        </a>
                        <a href={info.github} target="_blank" rel="noopener noreferrer" className="card" style={{ padding: '2rem', textAlign: 'center' }}>
                            <p style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)', marginBottom: '0.5rem', fontFamily: 'var(--font-mono)' }}>GITHUB</p>
                            <span style={{ fontWeight: 600 }}>Code Repos ↗</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}
