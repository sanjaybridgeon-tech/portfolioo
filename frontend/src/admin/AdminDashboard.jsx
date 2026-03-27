import { useState, useEffect } from 'react';

export default function AdminDashboard({ onLogout }) {
    const [activeTab, setActiveTab] = useState('info');
    const [data, setData] = useState({
        personalInfo: [],
        skills: [],
        experience: [],
        education: [],
        projects: []
    });
    const [loading, setLoading] = useState(true);
    const [message, setMessage] = useState({ text: '', type: '' });

    const apiBaseUrl = import.meta.env.VITE_API_URL || 'http://localhost:8080';
    const token = localStorage.getItem('token');

    useEffect(() => {
        fetchInitialData();
    }, []);

    const fetchInitialData = async () => {
        try {
            const endpoints = ['personal-info', 'skills', 'experience', 'education', 'projects'];
            const results = await Promise.all(
                endpoints.map(ep => fetch(`${apiBaseUrl}/api/${ep}`).then(res => res.json()))
            );
            setData({
                personalInfo: results[0],
                skills: results[1],
                experience: results[2],
                education: results[3],
                projects: results[4]
            });
        } catch (error) {
            setMessage({ text: 'Error fetching data', type: 'error' });
        } finally {
            setLoading(false);
        }
    };

    const handleUpdate = async (endpoint, method, body, id = null) => {
        try {
            const url = id ? `${apiBaseUrl}/api/${endpoint}/${id}` : `${apiBaseUrl}/api/${endpoint}`;
            const response = await fetch(url, {
                method: method,
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: body ? JSON.stringify(body) : null
            });

            if (response.ok) {
                setMessage({ text: 'Changes saved successfully!', type: 'success' });
                fetchInitialData();
            } else {
                setMessage({ text: 'Failed to save changes. Session might have expired.', type: 'error' });
            }
        } catch (error) {
            setMessage({ text: 'Network error occurred.', type: 'error' });
        }
    };

    if (loading) return <div className="container" style={{ textAlign: 'center', marginTop: '10rem' }}>Loading Admin Panel...</div>;

    return (
        <div className="container" style={{ padding: '2rem 0', minHeight: '100vh' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3rem' }}>
                <h1 className="gradient-text" style={{ fontSize: '2.5rem' }}>Admin Dashboard</h1>
                <button onClick={onLogout} className="glass" style={{ padding: '0.5rem 1.5rem', cursor: 'pointer' }}>Logout</button>
            </div>

            {message.text && (
                <div className="glass" style={{
                    padding: '1rem',
                    marginBottom: '2rem',
                    textAlign: 'center',
                    background: message.type === 'success' ? 'rgba(34, 197, 94, 0.1)' : 'rgba(239, 68, 68, 0.1)',
                    borderColor: message.type === 'success' ? '#22c55e' : '#ef4444'
                }}>
                    {message.text}
                </div>
            )}

            <div style={{ display: 'grid', gridTemplateColumns: '250px 1fr', gap: '2rem' }}>
                <aside style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {['info', 'skills', 'experience', 'projects', 'education'].map(tab => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className="glass"
                            style={{
                                padding: '1rem',
                                textAlign: 'left',
                                cursor: 'pointer',
                                background: activeTab === tab ? 'var(--primary-color)' : 'rgba(255,255,255,0.05)',
                                color: activeTab === tab ? 'white' : 'inherit',
                                border: 'none'
                            }}
                        >
                            {tab.charAt(0).toUpperCase() + tab.slice(1)} Management
                        </button>
                    ))}
                </aside>

                <main className="glass" style={{ padding: '2rem' }}>
                    {activeTab === 'info' && <PersonalInfoManager data={data.personalInfo[0]} onSave={(updated) => handleUpdate('personal-info', 'PUT', updated)} />}
                    {activeTab === 'skills' && <SkillManager skills={data.skills} onAdd={(skill) => handleUpdate('skills', 'POST', skill)} onDelete={(id) => handleUpdate('skills', 'DELETE', null, id)} />}
                    {activeTab === 'projects' && <ProjectManager projects={data.projects} onAdd={(project) => handleUpdate('projects', 'POST', project)} onDelete={(id) => handleUpdate('projects', 'DELETE', null, id)} />}
                    {/* Simplified for other sections... */}
                    {(activeTab === 'experience' || activeTab === 'education') && <p style={{ color: 'var(--text-muted)' }}>Similar forms are implemented here for {activeTab}...</p>}
                </main>
            </div>
        </div>
    );
}

// Sub-components for better organization
function PersonalInfoManager({ data, onSave }) {
    const [info, setInfo] = useState(data || {});
    return (
        <form onSubmit={(e) => { e.preventDefault(); onSave(info); }}>
            <h3 style={{ marginBottom: '1.5rem' }}>Personal Information</h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.5rem' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <label style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Name</label>
                    <input className="glass" style={{ padding: '0.8rem', color: 'white' }} value={info.name || ''} onChange={(e) => setInfo({ ...info, name: e.target.value })} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <label style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Title</label>
                    <input className="glass" style={{ padding: '0.8rem', color: 'white' }} value={info.title || ''} onChange={(e) => setInfo({ ...info, title: e.target.value })} />
                </div>
            </div>
            <button type="submit" className="glass" style={{ padding: '0.8rem 2rem', background: 'var(--primary-color)', color: 'white', border: 'none', cursor: 'pointer' }}>Update Base Info</button>
        </form>
    );
}

function SkillManager({ skills, onAdd, onDelete }) {
    const [newSkill, setNewSkill] = useState({ name: '', category: 'Frontend' });
    return (
        <div>
            <h3 style={{ marginBottom: '1.5rem' }}>Skills Management</h3>
            <form onSubmit={(e) => { e.preventDefault(); onAdd(newSkill); setNewSkill({ ...newSkill, name: '' }); }} style={{ display: 'flex', gap: '1rem', marginBottom: '2rem' }}>
                <input className="glass" placeholder="Skill Name" style={{ padding: '0.8rem', color: 'white', flex: 1 }} value={newSkill.name} onChange={(e) => setNewSkill({ ...newSkill, name: e.target.value })} required />
                <select className="glass" style={{ padding: '0.8rem', color: 'white' }} value={newSkill.category} onChange={(e) => setNewSkill({ ...newSkill, category: e.target.value })}>
                    <option value="Frontend">Frontend</option>
                    <option value="Backend">Backend</option>
                    <option value="Tools">Tools</option>
                </select>
                <button type="submit" className="glass" style={{ padding: '0.8rem 2rem', background: 'var(--primary-color)', border: 'none', cursor: 'pointer' }}>Add Skill</button>
            </form>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                {skills.map(skill => (
                    <div key={skill.id} className="glass" style={{ padding: '0.5rem 1rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                        <span>{skill.name}</span>
                        <button onClick={() => onDelete(skill.id)} style={{ background: 'none', border: 'none', color: '#ef4444', cursor: 'pointer', fontWeight: 'bold' }}>×</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

function ProjectManager({ projects, onAdd, onDelete }) {
    const [newProj, setNewProj] = useState({ title: '', description: '', link: '', category: '' });
    return (
        <div>
            <h3 style={{ marginBottom: '1.5rem' }}>Projects Management</h3>
            {/* Form for new project... Simplified for demo */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
                {projects.map(p => (
                    <div key={p.id} className="glass" style={{ padding: '1.5rem' }}>
                        <h4 style={{ marginBottom: '0.5rem' }}>{p.title}</h4>
                        <button onClick={() => onDelete(p.id)} style={{ color: '#ef4444', border: 'none', background: 'none', padding: 0, cursor: 'pointer', fontSize: '0.8rem' }}>Remove Project</button>
                    </div>
                ))}
            </div>
        </div>
    );
}
