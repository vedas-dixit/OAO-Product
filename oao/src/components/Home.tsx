"use client"
import Image from 'next/image'
import React from 'react'

function HomePage() {
    
    return (
        <div className='w-full h-full'>
            <div className="relative w-full h-[100vh]">
                <Image
                    src="/1.png"
                    alt="OAO image"
                    fill
                    priority
                    sizes="100vw"
                    className="object-cover"
                />
            </div>

            <div className='h-[100vh] w-full  '>
                <div className='justify-center flex items-center text-center'>
                    <h1 className='text-[150px]'>“</h1>
                    <h1 className="text-lg md:text-3xl font-bold">The name of the product comes from it`s form itself.
                        <br /> Spelled as OA, Pronounced as <span>Oh Wow!</span>
                    </h1>
                    <h1 className='text-[150px]'>”</h1>
                </div>
                <div>
                    <Image
                        src="/3.png"
                        alt="OAO image"
                        width={0}
                        height={0}
                        sizes="100vw"
                        className="w-full h-auto"
                        style={{
                            width: '100%',
                            height: 'auto'
                        }}
                    />
                </div>

                <div className="relative w-full max-w-6xl mx-auto px-4 py-8 overflow-hidden">

                    <div className="absolute left-0 top-1 w-full h-px bg-black transform -translate-x-96"></div>


                    <div className="flex items-center gap-4 ml-20">

                        <div className="w-2 h-2 rounded-full bg-black shrink-0"></div>

                        <div className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-8">
                            <h2 className="text-6xl md:text-8xl font-normal">Brief</h2>
                            <p className="text-base md:text-lg">
                                OAO is an attempt to break away from the generic chair forms with an intention to experiment with various material combinations & capabilities.
                            </p>
                        </div>
                    </div>
                </div>
                <div>
                    <Image
                        src="/5.png"
                        alt="OAO image"
                        width={0}
                        height={0}
                        sizes="100vw"
                        className="w-full h-auto"
                        style={{
                            width: '100%',
                            height: 'auto'
                        }}
                    />
                </div>

                <div className="relative w-full max-w-6xl mx-auto px-4 py-8 overflow-hidden">
                    <div className="flex flex-col md:flex-row items-start justify-end gap-4">
                        <div className="flex items-center gap-4 md:gap-8 max-w-4xl">
                            <div className="w-2 h-2 rounded-full bg-black shrink-0"></div>
                            <h2 className="text-6xl md:text-8xl font-normal">Work Flow</h2>


                        </div>


                    </div>

                    <p className="text-base md:text-lg">
                        The process began with understanding the ergonomic dimensions for a dinning chair followed by ideation of the form through sketches assuming various materials. The form was developed into a 1:5 scale prototype followed by construction of 1:1 scale prototype in the Workshop.
                    </p>
                    <div className="absolute left-0 top-4 w-full h-px bg-black transform translate-x-96"></div>
                </div>
                <div>
                    <Image
                        src="/6.png"
                        alt="OAO image"
                        width={0}
                        height={0}
                        sizes="100vw"
                        className="w-full h-auto"
                        style={{
                            width: '100%',
                            height: 'auto'
                        }}
                    /><Image
                        src="/7.png"
                        alt="OAO image"
                        width={0}
                        height={0}
                        sizes="100vw"
                        className="w-full h-auto"
                        style={{
                            width: '100%',
                            height: 'auto'
                        }}
                    />
                </div>



                <div className="relative w-full max-w-6xl mx-auto px-4 py-8 overflow-hidden">
                    <div className="flex flex-col md:flex-row items-start justify-end gap-4">
                        <div className="flex  items-center md:items-center gap-4 md:gap-8 max-w-4xl">
                            <div className="w-2 h-2 rounded-full bg-black shrink-0"></div>
                            <h2 className="text-6xl md:text-8xl font-normal">Structure</h2>


                        </div>


                    </div>

                    <p className="text-base md:text-lg">
                        The pyramidal structure of the chair ensures stability.
                        The form is meant to look fragile visually such that it creates
                        an `Aha!` moment once sat upon & realised how strong it is.
                    </p>
                    <div className="absolute left-0 top-4 w-full h-px bg-black transform translate-x-96"></div>
                </div>

                <div className='flex items-center justify-between overflow-hidden m-auto'>
                    <Image
                        src="/2.png"
                        alt="OAO image"
                        width={0}
                        height={0}
                        sizes="100vw"
                        className="w-full h-auto"
                        style={{
                            width: '40%',
                            height: 'auto'
                        }}
                    />
                    <div className="flex flex-col items-center justify-center text-center p-6">
                        <h1 className="text-6xl md:text-9xl  font-bold">
                            <span className="text-black">.</span>OAO<span className="text-black">.</span>
                        </h1>
                        <p className="text-lg ">Designed by Ila Rani</p>
                        <p className="text-lg ">Developed by Vedas Dixit</p>
                    </div>
                </div>


            </div>
        </div>

    )
}

export default HomePage