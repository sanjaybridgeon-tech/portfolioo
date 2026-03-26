import { useState, useEffect } from 'react'
import './index.css'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Navbar from './components/Navbar'
import EmailModal from './components/EmailModal'

function App() {
  const [data, setData] = useState({
    personalInfo: [],
    skills: [],
    experience: [],
    education: [],
    projects: []
  })
  const [isEmailModalOpen, setIsEmailModalOpen] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const endpoints = ['personal-info', 'skills', 'experience', 'education', 'projects']
        const apiBaseUrl = import.meta.env.VITE_API_URL || 'http://localhost:8080'
        const results = await Promise.all(
          endpoints.map(ep => fetch(`${apiBaseUrl}/api/${ep}`).then(res => res.json()))
        )

        setData({
          personalInfo: results[0],
          skills: results[1],
          experience: results[2],
          education: results[3],
          projects: results[4]
        })
      } catch (error) {
        console.error("Error fetching data:", error)
      }
    }
    fetchData()
  }, [])

  const info = data.personalInfo[0] || {}

  const toggleEmailModal = (e) => {
    if (e) e.preventDefault();
    setIsEmailModalOpen(!isEmailModalOpen);
  };

  return (
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
  )
}

export default App
