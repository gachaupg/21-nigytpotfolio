import { Link } from "react-router-dom"

const data = [
    {
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
        img: 'https://res.cloudinary.com/pitz/image/upload/v1708115255/Capture_dp41mf.png',
        title: 'INDUSTRIAL AND MINING INFRASTRUCTURE',
        desc: 'Our Expertise Spans Design, Construction, And Maintenance, Catering To The Unique Requirements of Industrial And Mining Sectors.'
    },
    {
        id: '3',
        img: 'https://res.cloudinary.com/pitz/image/upload/v1708114510/Cap_huhjt7.png',
        title: 'ENERGY PROJECTS DEVELOPMENT',
        desc: '21 Knights Engineering Group is a pioneer in energy projects development.We are in wind ,solar and hydro-electricspace. We are currently collaborating withother frims on undertaking extensive research on potential areas in africa for renewable energies. We believe that withstrategic partnerships and Investments we can drive a sustainable energy transition that addresses Africa energy Challenges and contribute to a greener future.'
    },
    {
        id: '4',
        img: 'https://res.cloudinary.com/pitz/image/upload/v1708114893/Capture_actys7.png',
        title: 'COMMERCIAL & RESIDENTIAL BUILDINGS',
        desc: 'At 21 Knights Engineering Group we offer comprehensive Commercial and Residential construction services to our customers within the continent. With our team specialized in EDGE building construction   practices we are committed to sustainable design and construction.'
    },
    {
        id: '5',
        img: 'https://res.cloudinary.com/pitz/image/upload/v1708115255/Capture_dp41mf.png',
        title: 'INDUSTRIAL AND MINING INFRASTRUCTURE',
        desc: 'Our Expertise Spans Design, Construction, And Maintenance, Catering To The Unique Requirements of Industrial And Mining Sectors.'
    },
]
const Projects = () => {
    return (
        <div data-aos="fade-right" data-aos-delay="400" className="flex w-full mt-32 pb-4 items- justify-center flex-col gap-8">
            <h2 className="text-red-600 text-center text-4xl">Our Projects </h2>
            <div className="flex w-full  items-cent justify-center flex-wrap  gap-8">

                {data.map((item) => {
                    return (
                        <div key={item.title} className="flex card-pro abt flex-col p-2 border rounded-lg shadow-2xl">
                            <img src={item.img} className="w-full object-fill h-80" alt="" />
                            <h1 className="text-xl text-red-600">
                                {item.title}
                            </h1>
                            <p className="text-slate-600  cursor-pointer">
                                {item.desc.length > 20 ?
                                    <>{item.desc.substring(0, 150)}
                                        <Link to={`projects/${item.id}`}  >
                                            <p className="text-red-400 ml-3">read more....</p>
                                        </Link>
                                    </> :
                                    item.desc
                                }
                            </p>

                        </div>
                    )
                })}

            </div>
        </div>
    )
}

export default Projects