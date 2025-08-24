import { motion } from 'framer-motion'
import Header from '../components/Header'
import Hero from '../components/HeroNew'
import Features from '../components/Features'
import Pricing from '../components/Pricing'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />
      <Features />
      <Pricing />
    </motion.div>
  )
}

export default Home
