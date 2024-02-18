/* eslint-disable react/no-unescaped-entities */


const Hero = () => {

    return (
        <div className="pt-16">
            <div data-aos="fade-right" data-aos-delay="400" className="text-black flex hero    items-center justify-around gap-8 p-2 border-b-indigo-100 w-full">
                <div style={{ width: '70%' }} className="flex bg-slate-400 p-2 item relative animated abt1 flex-col hero-items text-slate-300 gap-12 pl-2  ">
                    <h1 className="text-4xl text-red-600 font-bold">
                        Welcome to my <span className="bg-red-600 span text-white p-1 -5xl">21</span> Knights
                    </h1>

                    <p className=" text-slate-900 ">
                        Connecting cities and communities across Africa
                        At 21 Knights we aim to be Africa's leading Engineering, Construction, and Project
                        Management organization. our pledge is to deliver extraordinary results for our
                        customers and our team. This pledge is underpinned by our ability to design for the
                        world, inscribe our commitment with our actions, and construct with boundless
                        imagination.
                    </p>

                    <button className="bg-red-600 text-white p-2 mb-2 w-32 rounded-lg">Learn More</button>


                </div>


            </div>

        </div>

    )
}

export default Hero