/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Head from '../../components/Head'
import Layout from '../../components/Layout'
import ProjectCard from '../../components/SharedComponents/ProjectCard'
import data from "../../data/projects.data";

const Project = ({ id }) => {
  const id_no = parseInt(id)
  const project = data.filter((data) => data.id === id_no);
  const title = project.map(title => (title.catergory))
  return (
    <Layout>
      
      <Head  title="Projects" link="/projects" title_link="Projects" img="/images/img4.jpg" img_title={title[0]} />
      <section className="w-full h-full font-sans bg-[hsl(0,0%,97%)] p-3 py-20 md:px-7 grid items-center justify-center">
        <div className="py-16">
          <div className="justify-self-center text-center">
            <h4 className="heading capitalize">{title[0]}</h4>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 items-center justify-center gap-6 w-full">
            {project.map((pro) => (
              pro.gallery.map((img) => (
                <div key={img.id} className="relative w-[330px] h-[450px] cursor-pointer overflow-hidden group duration-500">
                  <div className="w-full h-full overflow-hidden">
                    <img src={img.image} alt="" className="w-full h-full duration-500 group-hover:scale-110 object-cover" />
                  </div>
                </div>
              ))
            ))}
          </div>
      </section>
    </Layout>
  )
}


Project.getInitialProps = ({ query: { id } }) => {
  return { id };
};

export default Project