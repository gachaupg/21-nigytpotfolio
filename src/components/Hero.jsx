/* eslint-disable react/no-unescaped-entities */


const Hero = () => {

    return (

        <div data-aos="fade-right" data-aos-delay="400" className="text-black flex sus-top1   items-center justify-around border-b-indigo-100 w-full">
            <div style={{ width: '70%' }} className="flex bg--400  item relative animated abt1 flex-col hero-items text-slate-300 gap-12   ">
                <h1 className="text-6xl text-center text-red-600 font-bold">
                    Welcome to my <span className="bg-red-600 span text-white  -5xl">21</span> Knights
                </h1>
                <h3 className="text-4xl text-center text-slate-900">Connecting cities and communities across Africa</h3>
                <div className=" flex w-full justify-between flex-wrap gap-4">
                    <p style={{width:'45%'}} className=" text-slate-900 abt1 text-xl ">
                        At 21 Knights we aim to be Africa's leading Engineering, Construction, and Project
                        Management organization. our pledge is to deliver extraordinary results for our
                        customers and our team. This pledge is underpinned by our ability to design for the
                        world, inscribe our commitment with our actions, and construct with boundless
                        imagination.
                    </p>
                    <p style={{width:'45%'}} className=" text-slate-900 abt1 text-xl ">
                        Whether you are a potential client, collaborator or
                        simply someone who shares our passion for
                        engineering innovation, I invite you to connect with
                        us and learn more about what we do at 21 Knights
                        Engineering Group. Together we can create a
                        brighter future for everyone and shape Africa. For
                        inquiries, partnerships, or to stay connected, reach
                        out to us at

                    </p>
                </div>
                <button className="bg-red-600 text-white p-2 mb-2 w-32 rounded-lg">Learn More</button>
            </div>
        </div>


    )
}

export default Hero