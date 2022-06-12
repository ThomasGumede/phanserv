/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Link from 'next/link'
import Card from '../components/SharedComponents/ServiceCard'
import Layout from '../components/Layout'
import Head from '../components/Head'

function services() {
  return (
    <Layout title="Geotechical Services We Offer" description="Phanserv offers best geotechnical services at affordable price">
      <Head title="Our Services" link="/services" title_link="Services" img="/images/img6.jpg" img_title="Services page" />
      <section className="w-full h-full font-sans bg-[hsl(0,0%,97%)] p-3 md:px-7 grid items-center justify-center">
        <div className="py-16 grid justify-center gap-y-10">
          <div className="md:w-[848px] space-y-7 justify-self-center text-center">
            <h4 className="font-semibold text-xl md:text-2xl text-color-other">Our Services</h4>
            <h1 className="font-semibold text-2xl md:text-5xl text-color-h md:leading-[60px]">High Quality Geotechnical Solutions Since 2017</h1>
          </div>
        </div>
      </section>
      <section className="w-full h-full font-sans bg-white py-20 p-3 md:px-36 grid items-center justify-center">
        <div className="space-y-7">
            <div className="space-y-4">
                <h1 className="text-color-h text-xl md:text-2xl font-semibold">Geotechnical Services</h1>
                <p className="text-base text-color-p">
                    Phaneretic Services (Pty) Ltd is a South African owned independent geotechnical consultancy that provides geotechnical services within shallow foundations, roads & transportation, large structures, township development & residential, stability investigations, water & sanitation, geo-environmental investigations, NHBRC enrolments, and borrow pit investigation.
                </p>
              
                <ul className="p-4 gap-6 grid grid-cols-1 md:grid-cols-2">
                    <li>
                        <div className="flex items-center space-x-4">
                            <div className="text-6xl text-color-h"><i className="bx bxs-home "></i></div>
                            <div className="spce-y-2">
                                <h4 className="font-semibold text-2xl text-color-h">Foundation Investigations</h4>
                                <ul className="text-color-p text-sm list-disc p-2">
                                    <li>
                                        NHBRC Phase 1 Geotechnical Investigation
                                    </li>
                                    <li>
                                        NHBRC Phase 2 Geotechnical Investigation
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="flex items-center space-x-4">
                            <div className="text-6xl text-color-h"><i className="bx bxs-hard-hat"></i></div>
                            <div className="spce-y-2">
                                <h4 className="font-semibold text-2xl text-color-h">Centerline Geotechnical Investigation</h4>
                                <ul className="text-color-p text-sm list-disc p-2">
                                    <li>
                                        Roads, bridges and Culverts
                                    </li>
                                    <li>
                                        Pipelines, Canals and Reservoirs
                                    </li>
                                    <li>
                                        Railways
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="flex items-center space-x-4">
                            <div className="text-6xl text-color-h"><i className="bx bxs-analyse "></i></div>
                            <div className="spce-y-2">
                                <h4 className="font-semibold text-2xl text-color-h">Reporting & Analysis</h4>
                                <ul className="text-color-p text-sm list-disc p-2">
                                    <li>
                                        Reports signed off by qualified registered personell
                                    </li>
                                    <li>
                                        Foundation analysis
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="flex items-center space-x-4">
                            <div className="text-6xl text-color-h"><i className="bx bxs-group "></i></div>
                            <div className="spce-y-2">
                                <h4 className="font-semibold text-2xl text-color-h">Other Services</h4>
                                <ul className="text-color-p text-sm list-disc p-2">
                                    <li>
                                        rural, Township and Urban Development
                                    </li>
                                    <li>
                                        Recreation
                                    </li>
                                    <li>
                                        Percolation Tests
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </li> 
                </ul>
            </div>
            <div className="space-y-4">
              <h1 className="text-color-h text-xl md:text-2xl font-semibold">GEOTECHNICAL INVESTIGATIONS</h1>
              <p className="text-base text-color-p">
                Phaneretic Services (Pty) Ltd is continuously involved in a variety of Geotechnical Investigations for a range of different projects including:
              </p>
              <ul className="text-color-p text-base p-4 list-disc">
                    <li>Foundation Investigations</li>
                    <li>NHBRC Phase 1 and Phase 2 Investigations</li>
                    <li>Road Centre Line and Material Investigations</li>
                    <li>Pavement material Investigations</li>
                    <li>Bridges</li>
                    <li>Pipelines and Reservoirs</li>
                    <li>Borrow pit investigations</li> 
              </ul>
            </div>
            <div className="space-y-4">
              <h1 className="text-color-h text-xl md:text-2xl font-semibold">VARIOUS DEPENDANT PROJECTS</h1>
              <p className="text-base text-color-p">
                Our involvement in these projects varies project dependent but generally includes any of the following aspects:
              </p>
              <ul className="text-color-p text-base list-disc p-4">
                    <li>Desktop Reviews</li>
                    <li>Mapping</li>
                    <li>Test Pit Profiling</li>
                    <li>Auger Hole Profiling</li>
                    <li>Borehole Core Profiling or Percussion Chip Logging</li>
                    <li>Soil and Rock Sampling</li>
                    <li>DCP, DPL and DPSH Testing</li>
                    <li>Percolation Testing</li> 
                    <li>Interpretation of Laboratory Test Results</li> 
              </ul>
            </div>
        </div>
      </section>
      <section className="w-full h-screen md:h-72 font-sans grid">
        <div className="w-full relative h-full bg-color-h overflow-hidden">
          <img src="/images/img3.jpg" alt="" className="w-full h-full object-cover opacity-50" />
          <div className="absolute top-2/4 left-2/4 translate-x-[-50%] translate-y-[-50%]">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 items-center justify-between gap-7 sm:gap-20 w-full">
                <div className="space-y-2 text-center">
                  <h4 className="text-5xl text-white font-bold">7</h4>
                  <p className="text-lg md:text-xl text-white font-normal">Years Of Expirience</p>
                </div>
                <div className="space-y-2 text-center">
                  <h4 className="text-5xl text-white font-bold">67</h4>
                  <p className="text-lg md:text-xl text-white font-normal">Completed Projects</p>
                </div>
                <div className="space-y-2 text-center">
                  <h4 className="text-5xl text-white font-bold">25</h4>
                  <p className="text-lg md:text-xl text-white font-normal">Satisfied Clients</p>
                </div>
                <div className="space-y-2 text-center">
                  <h4 className="text-5xl text-white font-bold">5</h4>
                  <p className="text-lg md:text-xl text-white font-normal">Qualified Employees</p>
                </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full bg-white font-sans p-5 py-20 md:px-16 lg:px-24 grid">
        <div className="w-full justify-between grid grid-cols-1 sm:grid-cols-2 md:flex gap-4">
            <div className="self-start">
                <h4 className="font-semibold text-xl md:text-2xl text-color-other">Contact Us</h4>
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
                        22 Gerald Spilkin Street,
                    </p>
                    <p className="text-lg md:text-xl font-normal text-color-p">
                        Ikhwezi Township, Umtata,
                    </p>
                    <p className="text-lg md:text-xl font-normal text-color-p">
                         5099
                    </p>
                </div>
            </div>
        </div>
      </section>
      
    </Layout>
  )
}

export default services
