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
                    <h4 className="text-5xl text-color-other font-semibold">67</h4>
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
    <section className="w-full h-full font-sans bg-white py-20 p-3 md:px-36 grid items-center justify-center">
        <div className="py-16 grid justify-center gap-y-7">
          <div className="flex flex-col md:flex-row items-center gap-7">
            <div className="space-y-4">
              <h1 className="text-color-h text-xl md:text-2xl font-semibold">Partnership</h1>
              <p className="text-base text-color-p">
                Phaneretic Services (Pty) Ltd works in close collaboration
                with competent, experienced and independent geotech-
                nical engineers, geohydrologists, geophysicists, and envi-
                ronmental specialists. This network of specialists is able
                to provide versatile and cost effective consulting services
                to a wide variety of clients.
              </p>
            </div>
            <div className="space-y-4">
              <h1 className="text-color-h text-xl md:text-2xl font-semibold">Our Mission</h1>
              <p className="text-base text-color-p">
                We believe in personalised and professional service, long
                term relationships, mutual trust and building resolute part-
                nerships with our clients. We understand that trust is
                earned and aspire to proving that the company provides
                the ideal combination of competent technical expertise
                and professional integrity.
              </p>
            </div>
          </div>
          <div className="text-center">
            <div className="space-y-4">
              <h1 className="text-color-h text-xl md:text-2xl font-semibold">Our Vision</h1>
              <p className="text-base text-color-p">
               To become a market leader in consulting engineering through the application of proven effective methods to engineering solutions,
                but using a fresh approach
              </p>
            </div>
          </div>
          <div className="text-center">
            <div className="space-y-4">
              <h1 className="text-color-h text-xl md:text-2xl font-semibold">Social Responsibility</h1>
              <p className="text-base text-color-p">
                The company is committed to an active affirmation action policy. Priority is given to historically disadvantaged individuals
                (HDIs) when recruiting new staff, or to B-BBEE-compliant companies when outsourcing specialist services. Currently, the
                firm has a 100% HDI staff complement, most of whom are youth. The firm places high emphasis, however, on the compe-
                tence, experience, and/or development potential of these individuals and firms, so as not to compromise on the quality of the
                service delivered to the Client.
              </p>
              <p className="text-base text-color-p">
                  We are sponsoring a soccer team, donating uniform to a rural school, working on partnering with 2 NPO/NGO&apos;s, and did a pro bono job for a community looking to get sponsors for building a Combi-Court (sporting facility).
              </p>
            </div>
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

export default company
