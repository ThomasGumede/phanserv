/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Layout from '../components/Layout'
import Head from '../components/Head'
import TeamCard from '../components/SharedComponents/TeamCard'

const company = () => {
  return (
    <Layout>
      <Head title="About Us" link="/company" title_link="About Us" img="/images/img1.jpg" img_title="About Us page" />
      <section className="w-full p-5 font-sans py-36 md:px-16 lg:px-24 grid items-center justify-center">
        <div className="gap-10 flex items-center flex-col md:flex-row w-full justify-between">
            <div className="space-y-7 md:w-2/4">
                <div className="space-y-5">
                    <h4 className="heading">Why Choose Us?</h4>
                  <h1 className="font-semibold text-2xl md:text-3xl xl:text-5xl xl:leading-[50px] leading-10 text-[#0E2B5C]">
                    We provide the ideal combination of competent technical expertise
                    and professional integrity
                  </h1>
                </div>
                <div className="text">
                  <p className="text-color-p">
                    Our team enjoys a diversity of work, with a wide range of clients. Phanservs values include
                    quality, professionalism,
                    integrity, sustainability, passion and cost effectiveness. In addition, we have an obligation
                    to our clients to ensure
                    that our data and interpretation
                    thereof is accurate and ethical.
                  </p>
                  <br />
                  <p className="text-color-p">
                    Have peace of mind in the fact that our experience ensures quality.
                    We are committed to our client&apos;s best interests providing economical &
                    practical solutions for building and civil construction.
                  </p>
                  <br />
                  <div className="grid items-center md:grid-cols-2 gap-3">
                    <div className="flex items-center space-x-4">
                      <i className="bx text-color-other text-lg bxs-right-arrow-circle"></i>
                      <p className="text-color-p">Highly Professional Team</p>
                    </div>
                    <div className="flex items-center space-x-4">
                      <i className="bx text-color-other text-lg bxs-right-arrow-circle"></i>
                      <p className="text-color-p">Highly Professional Team</p>
                    </div>
                    <div className="flex items-center space-x-4">
                      <i className="bx text-color-other text-lg bxs-right-arrow-circle"></i>
                      <p className="text-color-p">Highly Professional Team</p>
                    </div>
                    <div className="flex items-center space-x-4">
                      <i className="bx text-color-other text-lg bxs-right-arrow-circle"></i>
                      <p className="text-color-p">Quality services at affordable prices</p>
                    </div>
                  </div>
                </div>

            </div>
            <div className="space-y-8">
                <div className="flex w-full items-center space-x-10">
                  <div className="space-y-2">
                    <h4 className="text-5xl text-color-other font-semibold">10</h4>
                    <p className="text-base text-color-h font-normal">Completed Projects</p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-5xl text-color-other font-semibold">5</h4>
                    <p className="text-base text-color-h font-normal">Qualified Employees</p>
                  </div>
              </div>
              <div className="content_img_container">
                <img src="/images/img6.jpg" alt="" className="md:w-[31.25rem] md:h-[28.75rem]" />
              </div>
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
                  <h4 className="text-5xl text-white font-bold">10</h4>
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
      <section className="w-full h-full font-sans bg-[hsl(0,0%,97%)] py-28 p-3 md:px-7 grid items-center justify-center">
        <div className="py-16 grid justify-center gap-y-10">
          <div className="md:w-[848px] space-y-7 justify-self-center text-center">
            <h4 className="heading">Our Team</h4>
            <h1 className="section_title md:leading-[60px]">Our Expert Team</h1>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-centern text-start gap-8 w-full">
            <TeamCard />
            <TeamCard />
            <TeamCard />
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
                        info@phanserv.co.za
                    </p>
                    <p className="text-lg md:text-xl font-normal text-color-p">
                        phiko@phanserv.co.za
                    </p>
                    <p className="text-lg md:text-xl font-normal text-color-p">
                        geo@phanserv.co.za
                    </p>
                    <p className="text-lg md:text-xl font-normal text-color-p">
                        accounts@phanserv.co.za
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

export default company
