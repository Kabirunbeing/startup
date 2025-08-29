
import Header from '../components/Header'
import Hero from '../components/HeroNew'
import BotDemo from '../components/BotDemo'
import BotTraining from '../components/BotTraining'
import Pricing from '../components/Pricing'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div className="animate-fade-in">
      <Hero />
      <BotDemo />
      <BotTraining />
      <Pricing />
    </div>
  )
}

export default Home
