import { useState, useEffect } from 'react'
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom'
import './index.css'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Navbar from './components/Navbar'
import EmailModal from './components/EmailModal'
import LoginPage from './admin/LoginPage'
import AdminDashboard from './admin/AdminDashboard'

import { mockData } from './data/mockData'

function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  
  useEffect(() => {
    const toggleVisible = () => setVisible(window.pageYOffset > 500);
    window.addEventListener('scroll', toggleVisible);
    return () => window.removeEventListener('scroll', toggleVisible);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  if (!visible) return null;

  return (
    <button 
      onClick={scrollToTop}
      className="glass"
      style={{
        position: 'fixed',
        bottom: '2rem',
        right: '2rem',
        width: '50px',
        height: '50px',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '1.5rem',
        cursor: 'pointer',
        zIndex: 999,
        background: 'var(--primary-color)',
        color: 'white',
        border: 'none',
        boxShadow: '0 0 20px var(--accent-glow)'
      }}
    >
      ↑
    </button>
  );
}

function App() {
  const [data, setData] = useState(mockData)
  const [dataSource, setDataSource] = useState('demo')
  const [isEmailModalOpen, setIsEmailModalOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('token'))
  const navigate = useNavigate()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const endpoints = ['personal-info', 'skills', 'experience', 'education', 'projects']
        const apiBaseUrl = import.meta.env.VITE_API_URL || 'http://localhost:8080'
        
        const fetchResults = await Promise.all(
          endpoints.map(ep => fetch(`${apiBaseUrl}/api/${ep}`).then(res => {
            if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
            return res.json();
          }))
        )

        const hasLiveData = fetchResults.some(res => res && res.length > 0);
        if (hasLiveData) {
          setDataSource('live');
        }

        setData({
          personalInfo: fetchResults[0].length > 0 ? fetchResults[0] : mockData.personalInfo,
          skills: fetchResults[1].length > 0 ? fetchResults[1] : mockData.skills,
          experience: fetchResults[2].length > 0 ? fetchResults[2] : mockData.experience,
          education: fetchResults[3].length > 0 ? fetchResults[3] : mockData.education,
          projects: fetchResults[4].length > 0 ? fetchResults[4] : mockData.projects
        })
      } catch (error) {
        console.error("Error fetching data:", error)
      } finally {
        setIsLoading(false)
      }
    }
    fetchData()
  }, [])

  const info = data.personalInfo[0] || {}

  const toggleEmailModal = (e) => {
    if (e) e.preventDefault();
    setIsEmailModalOpen(!isEmailModalOpen);
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
    navigate('/admin');
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    navigate('/');
  };

  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={
          <>
            <Navbar dataSource={dataSource} />
            <main>
              <Hero info={info} onEmailClick={toggleEmailModal} />
              <About info={info} />
              <Skills skills={data.skills} />
              <Experience experience={data.experience} />
              <Projects projects={data.projects} />
              <Contact info={info} onEmailClick={toggleEmailModal} />
            </main>
            <EmailModal
              email={info.email}
              isOpen={isEmailModalOpen}
              onClose={() => setIsEmailModalOpen(false)}
            />
            <footer style={{ padding: '4rem 0', textAlign: 'center', borderTop: '1px solid var(--glass-border)', marginTop: '4rem' }}>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                &copy; {new Date().getFullYear()} {info.name}. Engineered for the Web.
              </p>
              <div style={{ marginTop: '1.5rem' }}>
                <button 
                  onClick={() => navigate('/admin/login')} 
                  style={{ background: 'none', border: 'none', color: 'var(--primary-color)', cursor: 'pointer', fontSize: '0.8rem', opacity: 0.5 }}
                >
                  Administrative Access
                </button>
              </div>
            </footer>
          </>
        } />
        
        <Route path="/admin/login" element={
          isLoggedIn ? <Navigate to="/admin" /> : <LoginPage onLogin={handleLogin} />
        } />
        
        <Route path="/admin" element={
          isLoggedIn ? <AdminDashboard onLogout={handleLogout} /> : <Navigate to="/admin/login" />
        } />
      </Routes>
    </>
  )
}

export default App
