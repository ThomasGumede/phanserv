import React from 'react'
import Layout from '../components/Layout'
import Head from '../components/Head'
import Link from 'next/link'
import ProjectCard from '../components/SharedComponents/ProjectCard'
import data from '../data/projects.data'

const projects = () => {
  return (
    <Layout title="Geotechnical Services We Perfomed" description="Phanserv has completed more than 67 geotechnical services projects since it was first started.">
      <Head title="Our Projects" link="/projects" title_link="Projects" img="/images/img2.jpg" img_title="Foundation investigation" />
      <section className="w-full h-full font-sans bg-[hsl(0,0%,97%)] p-3 py-20 md:px-7 grid items-center justify-center">
        <div className="py-16 grid justify-center items-center gap-y-10">
          <div className="md:w-[848px] space-y-7 justify-self-center text-center">
            <h4 className="font-semibold text-xl md:text-2xl text-color-other">Our Projects</h4>
            <h1 className="font-semibold text-2xl md:text-5xl text-color-h md:leading-[60px]">Some of our <span className="text-color-other">popular</span> projects</h1>
            <p className="text-base text-color-p">
              Geotechnical consulting and Investigations have been carried out over both non-dolomitic areas for numerous consulting
              civil engineering and town planning
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 items-center justify-center text-start gap-6 w-full">
            {data.map((pro) => (
              <ProjectCard key={pro.id} img_alt={pro.catergory} img={pro.image} id={pro.id} />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default projects
