import BlogSection from "./BlogSection"
import BannerSection from "./components/BannerSection"
import Category from "./components/Category"
import FeatureSection from "./components/FeatureSection"
import FeatureSactionBreakfast from "./components/FeatureSectionBreakfast"
import FeatureSactionFruits from "./components/FeatureSectionFruits"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import NewsLetter from "./components/NewsLetter"

const App = () => {
  return (
    <main>
      <Navbar/>
      <Hero/>
      <Category/>
      <FeatureSactionFruits/>
      <FeatureSactionBreakfast/>
      <BannerSection/>
      <BlogSection/>
      <NewsLetter/>
      <FeatureSection/>
      <Footer/>
    </main>
  )
}

export default App