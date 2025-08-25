import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { SignedIn, SignedOut, RedirectToSignIn } from '@clerk/clerk-react'
import { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Documentation from './pages/Documentation'
import Support from './pages/Support'
import SignInPage from './pages/SignInPage'
import SignUpPage from './pages/SignUpPage'
import Dashboard from './pages/Dashboard'

// Page transition wrapper component
const PageTransition = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{
        duration: 0.3,
        ease: "easeInOut"
      }}
    >
      {children}
    </motion.div>
  )
}

// Animated routes component
const AnimatedRoutes = ({ isGuestMode, setIsGuestMode }) => {
  const location = useLocation()
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route 
          path="/" 
          element={
            <PageTransition>
              <SignInPage setIsGuestMode={setIsGuestMode} />
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
          path="/dashboard" 
          element={
            <SignedIn>
              <PageTransition>
                <Dashboard />
              </PageTransition>
            </SignedIn>
          } 
        />
        <Route 
          path="/guest-dashboard" 
          element={
            <PageTransition>
              <Dashboard isGuest={true} />
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
      </Routes>
    </AnimatePresence>
  )
}

function App() {
  const [isGuestMode, setIsGuestMode] = useState(false)
  const location = useLocation()
  
  // Hide header and footer only on sign-in and sign-up pages
  const isAuthPage = location?.pathname === '/' || location?.pathname === '/sign-in' || location?.pathname === '/sign-up'

  return (
    <motion.div 
      className="min-h-screen bg-black text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {!isAuthPage && <Header />}
      <main>
        <AnimatedRoutes isGuestMode={isGuestMode} setIsGuestMode={setIsGuestMode} />
      </main>
      {!isAuthPage && <Footer />}
    </motion.div>
  )
}

// Wrapper component to provide location context
const AppWrapper = () => {
  return (
    <Router>
      <App />
    </Router>
  )
}

export default AppWrapper
