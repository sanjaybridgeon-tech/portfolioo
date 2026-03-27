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

function App() {
  const [data, setData] = useState({
    personalInfo: [],
    skills: [],
    experience: [],
    education: [],
    projects: []
  })
  const [isEmailModalOpen, setIsEmailModalOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('token'))
  const navigate = useNavigate()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const endpoints = ['personal-info', 'skills', 'experience', 'education', 'projects']
        const apiBaseUrl = import.meta.env.VITE_API_URL || 'http://localhost:8080'
        
        // Add a timeout promise to ensure the loader is visible for at least 800ms for smoothness
        const minWait = new Promise(resolve => setTimeout(resolve, 800));
        
        const fetchResults = Promise.all(
          endpoints.map(ep => fetch(`${apiBaseUrl}/api/${ep}`).then(res => {
            if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
            return res.json();
          }))
        )

        const [results] = await Promise.all([fetchResults, minWait]);

        setData({
          personalInfo: results[0],
          skills: results[1],
          experience: results[2],
          education: results[3],
          projects: results[4]
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

  if (isLoading) {
    return (
      <div className="container loader-container">
        <div style={{ height: '80vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
          <div className="skeleton skeleton-title" style={{ width: '60%' }}></div>
          <div className="skeleton-title skeleton" style={{ width: '40%' }}></div>
          <div className="skeleton skeleton-text" style={{ width: '50%', height: '1.5rem', marginTop: '2rem' }}></div>
        </div>
      </div>
    )
  }

  return (
    <Routes>
      <Route path="/" element={
        <>
          <Navbar />
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
          <footer style={{ padding: '2rem 0', textAlign: 'center', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
            <p>&copy; {new Date().getFullYear()} {info.name}. Built with React & Spring Boot.</p>
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
  )
}

export default App
