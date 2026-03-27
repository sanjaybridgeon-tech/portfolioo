export default function Contact({ info }) {
    if (!info) return null;

    const contactChannels = [
        { label: 'E_MAIL_ADDRESS', value: info.email, href: `mailto:${info.email}` },
        { label: 'LINKEDIN_PROFESSIONAL', value: 'sanjay-a-professional', href: info.linkedin },
        { label: 'GITHUB_BASE', value: 'sanjaydev-sys', href: info.github }
    ];

    return (
        <section id="contact" className="container" style={{ borderBottom: 'none', paddingBottom: '15rem' }}>
            <span className="section-num">06 / CONNECTION_PROTOCOLS</span>
            <h2 style={{ fontSize: '3rem', marginBottom: '3rem' }}>Establish Connection</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                {contactChannels.map((channel, idx) => (
                    <a 
                        key={channel.label}
                        href={channel.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="card"
                        style={{ display: 'flex', flexDirection: 'column', gap: '1rem', border: '1px solid var(--surface-border)' }}
                    >
                        <span style={{ fontSize: '0.8rem', color: 'var(--accent-brown)', fontFamily: 'var(--font-secondary)' }}>0{idx + 1} // {channel.label}</span>
                        <span style={{ fontWeight: 600, fontSize: '1.2rem', color: 'var(--text-main)', fontFamily: 'var(--font-heading)' }}>{channel.value}</span>
                        <span style={{ fontSize: '0.7rem', opacity: 0.5, letterSpacing: '0.2em' }}>→ REDIRECT_TO_SOURCE</span>
                    </a>
                ))}
            </div>
        </section>
    )
}
