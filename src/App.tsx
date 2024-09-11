import BannerSection from "./components/BannerSection"
import Category from "./components/Category"
import FeatureSactionBreakfast from "./components/FeatureSectionBreakfast"
import FeatureSactionFruits from "./components/FeatureSectionFruits"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"

const App = () => {
  return (
    <main>
      <Navbar/>
      <Hero/>
      <Category/>
      <FeatureSactionFruits/>
      <FeatureSactionBreakfast/>
      <BannerSection/>
    </main>
  )
}

export default App