import Category from "./components/Category"
import FeatureSactionFruits from "./components/FeatureSactionFruits"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"

const App = () => {
  return (
    <main>
      <Navbar/>
      <Hero/>
      <Category/>
      <FeatureSactionFruits/>
    </main>
  )
}

export default App