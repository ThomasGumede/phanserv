import Head from 'next/head'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import HomeServices from '../components/HomeServices'
import AboutUs from '../components/HomeAboutUs'
import Projects from '../components/HomeProjects'
import Contacts from '../components/HomeContacts'

export default function Home() {
  return (
    <Layout title="Home" description="Phaneretic Services (Pty) Ltd is a South African owned independent geotechnical consultancy that provides geotechnical services within shallow foundations, roads & transportation, large structures, township development & residential, stability investigations, water & sanitation, geo-environmental investigations, NHBRC enrolments, and borrow pit investigation.">
      <Hero />
      <HomeServices />
      <AboutUs />
      <Projects />
      <Contacts />
    </Layout>
  )
}