import Navigation from '@/components/Navigation'
import HeroSection from '@/components/HeroSection'
import Trending from './components/Trending'
import '@/assets/style/main.css'
import '@/assets/style/imports/funky.css'
import Creators from './components/Creators'
import Categories from './components/Categories'
import Discover from './components/atoms/Discover'
import Magic from './components/atoms/overlay/Magic'
import Guideplan from './components/Guideplan'
import Email from './components/atoms/email/Email'
import Footer from './components/atoms/footer/Footer'

function App() {
  return (
    <main className="bg-background flex flex-col justify-center">
      <Navigation />
      <HeroSection />
      <Trending />
      <Creators />
      <Categories />
      <Discover />
      <Magic title="Magic Mashrooms" username="Shroomie" />
      <Guideplan />
      <Email />
      <Footer />
    </main>
  )
}
export default App
