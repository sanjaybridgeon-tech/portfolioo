export default function EngineeringFocus() {
    const focusAreas = [
        {
            title: "Backend Architecture",
            description: "Designing distributed systems using microservices and event-driven patterns. Ensuring high availability and architectural decoupling."
        },
        {
            title: "REST API Design",
            description: "Building industry-standard APIs with strong contract enforcement, versioning, and high-performance throughput."
        },
        {
            title: "Database Modeling",
            description: "Implementing optimized relational schemas and NoSQL persistence layers with a focus on data integrity and query performance."
        }
    ];

    return (
        <section id="focus" className="container">
            <h2>Engineering Focus</h2>
            <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
                gap: '2rem' 
            }}>
                {focusAreas.map((area, idx) => (
                    <div key={idx} className="card">
                        <h4 style={{ marginBottom: '1rem', color: 'var(--text-main)', fontSize: '1rem' }}>{area.title}</h4>
                        <p style={{ lineHeight: '1.6', fontSize: '0.875rem' }}>{area.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
