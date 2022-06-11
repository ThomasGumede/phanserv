import React from 'react'
import Link from 'next/link'
import Card from '../components/SharedComponents/ServiceCard'
import Layout from '../components/Layout'
import Head from '../components/Head'
import data from '../data/services.data'

function services() {
  return (
    <Layout>
      <Head title="Our Services" link="/services" title_link="Services" img="/images/img3.jpg" img_title="Services page" />
      <section className="w-full h-full font-sans bg-[hsl(0,0%,97%)] p-3 md:px-7 grid items-center justify-center">
        <div className="py-16 grid justify-center gap-y-10">
          <div className="md:w-[848px] space-y-7 justify-self-center text-center">
            <h4 className="heading">Our Services</h4>
            <h1 className="section_title md:leading-[60px]">High Quality Geotechnical Solutions Since 2017</h1>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 items-center text-start gap-7 w-full">
              {data.map((service) => (
                  <Card key={service.id} font={service.icon} title={service.title} description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's" id={service.id}/>
              ))}
          </div>
        </div>
      </section>
      <section className="w-full bg-white font-sans p-5 py-20 md:px-16 lg:px-24 grid">
        <div className="w-full justify-between grid grid-cols-1 sm:grid-cols-2 md:flex gap-4">
            <div className="self-start">
                <h4 className="heading">Contact Us</h4>
            </div>
            <div className="space-x-4 flex">
                <div className="text-color-other text-4xl">
                    <i className='bx bxs-phone'></i>
                </div>
                <div className="space-y-2">
                    <h1 className="text-xl md:text-2xl font-semibold text-color-h">
                        Call Us: 
                    </h1>
                    <p className="text-lg md:text-xl font-normal text-color-p">
                        +27835132008
                    </p>
                    <p className="text-lg md:text-xl font-normal text-color-p">
                        +27762802591
                    </p>
                </div>
            </div>
            <div className="space-x-4 flex">
                <div className="text-color-other text-4xl">
                    <i className='bx bxs-envelope' ></i>
                </div>
                <div className="space-y-2">
                    <h1 className="text-xl md:text-2xl font-semibold text-color-h">
                        Email Us: 
                    </h1>
                    <p className="text-lg md:text-xl font-normal text-color-p">
                        info@phanserve.co.za
                    </p>
                    <p className="text-lg md:text-xl font-normal text-color-p">
                        phiko@phanserve.co.za
                    </p>
                    <p className="text-lg md:text-xl font-normal text-color-p">
                        geo@phanserve.co.za
                    </p>
                    <p className="text-lg md:text-xl font-normal text-color-p">
                        accounts@phanserve.co.za
                    </p>
                </div>
            </div>
            <div className="space-x-4 flex">
                <div className="text-color-other text-4xl">
                    <i className='bx bx-current-location'></i>
                </div>
                <div className="space-y-1">
                    <h1 className="text-xl md:text-2xl font-semibold text-color-h">
                        Visit Us: 
                    </h1>
                    <p className="text-lg md:text-xl font-normal text-color-p">
                        Gxulu Location,
                    </p>
                    <p className="text-lg md:text-xl font-normal text-color-p">
                        Zithathele A.A, Libode,
                    </p>
                    <p className="text-lg md:text-xl font-normal text-color-p">
                         5160
                    </p>
                </div>
            </div>
        </div>
      </section>
      
    </Layout>
  )
}

export default services
