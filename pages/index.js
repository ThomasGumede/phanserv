import Head from 'next/head'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import HomeServices from '../components/HomeServices'
import AboutUs from '../components/HomeAboutUs'
import Projects from '../components/HomeProjects'
import Contacts from '../components/HomeContacts'

export default function Home() {
  return (
    <Layout>
      <Hero />
      <HomeServices />
      <AboutUs />
      <Projects />
      <Contacts />
    </Layout>
  )
}