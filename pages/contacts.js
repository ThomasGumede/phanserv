import React from 'react'
import Layout from '../components/Layout'
import Head from '../components/Head'

const contacts = () => {
  return (
    <Layout>
      <Head title="Contacts" link="/contacts" title_link="Contacts" img="/images/img6.jpg" img_title="Contacts page" />
      <section className="w-full h-full font-sans bg-[hsl(0,0%,97%)] p-3 py-20 md:px-7 grid items-center justify-center">
        <div className="py-16 grid justify-center items-center gap-y-10">
          <div className="md:w-[848px] space-y-7 justify-self-center text-center">
            <h4 className="heading">Contacts Us</h4>
            <h1 className="section_title md:leading-[60px]">If You Have Any Query, Feel Free To Contact Us</h1>
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
                        Accounts@phanserve.co.za
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

export default contacts
