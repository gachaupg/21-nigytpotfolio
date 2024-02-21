import { NavLink } from "react-router-dom"

const data = [
    {
        id: '4',
        img: 'https://res.cloudinary.com/pitz/image/upload/v1708323532/1_bjx7vj.png',
        title: 'INNOVATION',
        desc: 'Our commitment to innovation is shaped by our actions, partnerships and our teams. with continuous Use and adoption of ecofriendly practices digital technologies like BIM and Jenga  21 and advanced materials, 21 Knights is constantly dedicated  to innovation and making our  sector more efficient for everyone.'
    },
    {
        id: '5',
        img: 'https://res.cloudinary.com/pitz/image/upload/v1708323916/2_lbuhm1.png',
        title: 'CIVIL & ENERGY INFRASTRACTURE',
        desc: 'At 21 Knights Engineering Group we are at the forefront of the  development of Civil and Energy infrastructure.We are dedicated to completing outstanding projects that promote Advancement, Sustainability, and Innovation. Our track record demonstrates this.We stand out because of our knowledge, commitment, and unwavering dedication towards quality and safety. Join us as we   set out to create a better tomorrow for Shaping Africa'
    },
    {
        id: '6',
        img: 'https://res.cloudinary.com/pitz/image/upload/v1708324087/2_wr6ewo.png',
        title: 'HIGHWAYS & ROADS',
        desc: 'As a global construction firm specializing in roads and highways, we are exceptional at designing, building, and maintaining vital transportation  infrastructure we pride ourselves in delivering road and highway projects,  connecting communities, fostering economic growth, and advancing transportation infrastructure.'
    },
    {
        id: '7',
        img: 'https://res.cloudinary.com/pitz/image/upload/v1708324327/2_u5kgaz.png',
        title: 'SOCIAL & AGRICULTURE INFRASTRACTURE',
        desc: 'We are committed to construction of public amenities for societies and building  systesm to assist in agriculture and rural  development.'
    },
    {
        id: '8',
        img: 'https://res.cloudinary.com/pitz/image/upload/v1708324548/2_xkgm2z.png',
        title: 'SUSTAINABLE WATER SUPPLY    & DISTRIBUTION SYSTEMS',
        desc: 'We ensure reliable water supply for Communities via involvement in Construction of Efficient Pipelines Treatment Facilities, Recycling and   Smart Technologies to ensure long term water Sustainability.'
    }, {
        id: '1',
        img: 'https://res.cloudinary.com/pitz/image/upload/v1708114510/Cap_huhjt7.png',
        title: 'ENERGY PROJECTS DEVELOPMENT',
        desc: '21 Knights Engineering Group is a pioneer in energy projects development.We are in wind ,solar and hydro-electricspace. We are currently collaborating withother frims on undertaking extensive research on potential areas in africa for renewable energies. We believe that withstrategic partnerships and Investments we can drive a sustainable energy transition that addresses Africa energy Challenges and contribute to a greener future.'
    },
    {
        id: '2',
        img: 'https://res.cloudinary.com/pitz/image/upload/v1708114893/Capture_actys7.png',
        title: 'COMMERCIAL & RESIDENTIAL BUILDINGS',
        desc: 'At 21 Knights Engineering Group we offer comprehensive Commercial and Residential construction services to our customers within the continent. With our team specialized in EDGE building construction   practices we are committed to sustainable design and construction.'
    },
    {
        id: '3',
        img: 'https://res.cloudinary.com/pitz/image/upload/v1708115255/Capture_dp41mf.png',
        title: 'INDUSTRIAL AND MINING INFRASTRUCTURE',
        desc: 'Our Expertise Spans Design, Construction, And Maintenance, Catering To The Unique Requirements of Industrial And Mining Sectors.'
    },

]
const Projects = () => {
    return (
        <div data-aos="fade-right" data-aos-delay="400" className="w-full">
            <div className="sus-top flex justify-center   w-full items-center ">
                <h1>
                    Services
                </h1>
            </div>

            <div data-aos="fade-right" data-aos-delay="400" className="flex w-full mt-32 pb-4 items- justify-center flex-col gap-8">
                <h2 className="text-red-600 text-center text-4xl">What we do </h2>
                <div className="flex w-full  items-cent justify-center flex-wrap  gap-8">

                    {data.map((item) => {
                        return (
                            <div key={item.title} className="flex card-pro abt flex-col p-2 border rounded-lg shadow-2xl">
                                <img src={item.img} className="w-full object-cover h-80" alt="" />
                                <h1 className="text-xl text-red-600">
                                    {item.title}
                                </h1>
                                <p className="text-slate-600  cursor-pointer">
                                    {item.desc.length > 20 ?
                                        <>{item.desc.substring(0, 150)}
                                            <NavLink to={`/projects/${item.id}`}  >
                                                <p className="text-red-400 ml-3">read more....</p>
                                            </NavLink>
                                        </> :
                                        item.desc
                                    }
                                </p>

                            </div>
                        )
                    })}

                </div>
            </div>
        </div>
    )
}

export default Projects