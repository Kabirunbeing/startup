import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { SignedIn, SignedOut, RedirectToSignIn } from '@clerk/clerk-react'
import { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import FeaturesPage from './pages/FeaturesPage'
import Documentation from './pages/Documentation'
import Support from './pages/Support'
import SignInPage from './pages/SignInPage'
import SignUpPage from './pages/SignUpPage'

// Page transition wrapper component
const PageTransition = ({ children }) => {
  return (
    <div className="animate-fade-in">
      {children}
    </div>
  )
}

// Animated routes component
const AnimatedRoutes = ({ isGuestMode, setIsGuestMode }) => {
  const location = useLocation()
  
  return (
    <Routes location={location} key={location.pathname}>
      <Route 
        path="/" 
        element={
          <PageTransition>
            <Home />
          </PageTransition>
        } 
      />
      <Route 
        path="/home" 
        element={
          <PageTransition>
            <Home />
          </PageTransition>
        } 
      />
      <Route 
        path="/features" 
        element={
          <PageTransition>
            <FeaturesPage />
          </PageTransition>
        } 
      />
      <Route 
        path="/sign-in" 
        element={
          <PageTransition>
            <SignInPage setIsGuestMode={setIsGuestMode} />
          </PageTransition>
        } 
      />
      <Route 
        path="/sign-up" 
        element={
          <PageTransition>
            <SignUpPage />
          </PageTransition>
        } 
      />
      <Route 
        path="/documentation" 
        element={
          <PageTransition>
            <Documentation />
          </PageTransition>
        } 
      />
      <Route 
        path="/support" 
        element={
          <PageTransition>
            <Support />
          </PageTransition>
        } 
      />
      {/* Catch all route - redirect to home */}
      <Route 
        path="*" 
        element={
          <PageTransition>
            <Home />
          </PageTransition>
        } 
      />
    </Routes>
  )
}

function App() {
  const [isGuestMode, setIsGuestMode] = useState(false)
  const location = useLocation()
  
  // Hide header and footer only on sign-in and sign-up pages
  const isAuthPage = location?.pathname === '/sign-in' || location?.pathname === '/sign-up'

  return (
    <div className="min-h-screen bg-black text-white animate-fade-in">
      {!isAuthPage && <Header />}
      <main>
        <AnimatedRoutes isGuestMode={isGuestMode} setIsGuestMode={setIsGuestMode} />
      </main>
      {!isAuthPage && <Footer />}
    </div>
  )
}

// Wrapper component to provide location context
const AppWrapper = () => {
  return (
    <Router basename={import.meta.env.BASE_URL || '/'}>
      <App />
    </Router>
  )
}

export default AppWrapper
