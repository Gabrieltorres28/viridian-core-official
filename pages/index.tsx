
import Head from 'next/head'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Services from '../components/Services'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Viridian Core</title>
      </Head>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Contact />
      <Footer />
    </>
  )
}
