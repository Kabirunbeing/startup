import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { SignedIn, SignedOut, RedirectToSignIn } from '@clerk/clerk-react'
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
const AnimatedRoutes = () => {
  const location = useLocation()
  
  return (
    <AnimatePresence mode="wait">
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
          path="/sign-in" 
          element={
            <PageTransition>
              <SignInPage />
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
          path="/documentation" 
          element={
            <SignedIn>
              <PageTransition>
                <Documentation />
              </PageTransition>
            </SignedIn>
          } 
        />
        <Route 
          path="/support" 
          element={
            <SignedIn>
              <PageTransition>
                <Support />
              </PageTransition>
            </SignedIn>
          } 
        />
      </Routes>
    </AnimatePresence>
  )
}

function App() {
  return (
    <Router>
      <motion.div 
        className="min-h-screen bg-black text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Header />
        <main>
          <AnimatedRoutes />
        </main>
        <Footer />
      </motion.div>
    </Router>
  )
}

export default App
