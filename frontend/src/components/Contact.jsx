export default function Contact({ info }) {
    if (!info) return null;

    const contactChannels = [
        { label: 'E_MAIL_ADDRESS', value: info.email, href: `mailto:${info.email}` },
        { label: 'LINKEDIN_PROFESSIONAL', value: 'sanjay-a-professional', href: info.linkedin },
        { label: 'GITHUB_BASE', value: 'sanjaydev-sys', href: info.github }
    ];

    return (
        <section id="contact" className="container" style={{ borderBottom: 'none', paddingBottom: '12rem' }}>
            <h2>Establish Connection / Protocols</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
                {contactChannels.map(channel => (
                    <a 
                        key={channel.label}
                        href={channel.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="card"
                        style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}
                    >
                        <span className="text-xs" style={{ color: 'var(--accent-color)' }}>{channel.label}</span>
                        <span style={{ fontWeight: 600, fontSize: '0.9rem', color: 'var(--text-main)' }}>{channel.value}</span>
                        <span className="text-xs" style={{ marginTop: '0.5rem', opacity: 0.5 }}>→ OPEN_EXTERNAL_CHANNEL</span>
                    </a>
                ))}
            </div>
        </section>
    )
}
