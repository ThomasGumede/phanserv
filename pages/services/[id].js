/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import Head from '../../components/Head'
import Layout from '../../components/Layout'
import data from "../../data/services.data";

function Service({id}) {
  const service = data.filter((data) => data.id === id);
  return (
    <Layout>
      {service.map((service)  => (
        <Head key={service.id} title={service.title} link="/services" title_link="Services" img={service.img} img_title="Contacts page" />
      ))}
      <div className="px-8 flex flex-col py-20 md:flex-row justify-center space-x-4 items-center">
        <div className="space-y-4 md:space-y-0 w-full bg-white h-full flex flex-col md:flex-row justify-center space-x-4 items-center">
          <div>
            <img src="/images/rem.gif" alt="" className='md:w-[450px] md:h-[450px]' />
          </div>
            <div className="space-y-2 md:w-[500px] p-2">
              <h1 className="font-bold text-3xl md:text-5xl text-h1-color md:leading-relaxed">
                New Information Coming...
              </h1>
              <p className="text-base text-gray-500 font-regular leading-relaxed">
                Sorry for not being fast. We&apos;re still developing this site and our team is working 24/7 to make sure that everything is up and running soon. Some components are still in development... will let you know when we&apos;re done. please be patient and use the available services
              </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}

Service.getInitialProps = ({ query: { id } }) => {
  return { id };
};
export default Service