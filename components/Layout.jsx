import React from 'react'
import Head from 'next/head'
import NavBar from './Navbar'
import Script from 'next/script'
import Footer from './Footer';

function Layout({children, title, description}) {
  return (
      <div>
        <Head>
          <title>PHANSERV - {title}</title>
          <meta charSet="utf-8" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="mobile-web-app-capable" content="yes" />
          

          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
          <meta name="msapplication-TileColor" content="#da532c" />
          <meta name="theme-color" content="#ffffff" />

 
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content="Phaneretic Services" />
          <meta content="Geotechical Investigations, Geotechical Consultations" name="keywords" />
          <meta 
          content={description}
          name="description" />
          <meta
            property="og:description"
            content="Phaneretic Services (Pty) Ltd is a South African owned independent geotechnical consultancy that provides geotechnical services within shallow foundations, roads & transportation, large structures, township development & residential, stability investigations, water & sanitation, geo-environmental investigations, NHBRC enrolments, and borrow pit investigation."
          />
          <meta property="og:title" content="Phaneretic Services (Pty) Ltd" />
          <meta property="og:image" content="/images/img2.jpg" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <div className="">
          <NavBar />
          {children}
          <Footer />
        </div>
      </div>
  )
}

export default Layout