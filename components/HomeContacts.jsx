import React from 'react'

function HomeContacts() {
  return (
    <section className="w-full bg-white font-sans p-5 py-20 md:px-16 lg:px-24 grid">
        <div className="w-full justify-between flex flex-col md:flex-row gap-8">
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
                        info@phanserv.co.za
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
  )
}

export default HomeContacts
