import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const BackgroundSlider = () => {
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
  return (
    <div className="w-full flex items-center justify-center ">
      <Carousel
        showThumbs={false}
        showStatus={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={5000} // Change slide every 5 seconds
        transitionTime={1000} // Transition duration
        stopOnHover={false} // Do not stop auto play on hover
        swipeable={true} // Allow swipe on mobile
        emulateTouch={true} // Emulate touch events
        dynamicHeight={false} // Maintain aspect ratio
      >
        {/* {data.map((item)=>{
          return(
            <div key={item.id} className="slider-item">
              <img className='w-full h-full ' src={item.img} alt="Image 1" />
              <div className="info">
                <h2 className='text-white text-4xl'>{item.title}</h2>
                <p className='text-slate-900 text-2xl'>{item.desc}</p>
              </div>
            </div>
          )
        })} */}
        <div className="slider-item">
          <img className='w-full h-full s-image' src="https://assets.ennomotive.com/wp-content/uploads/2019/02/11163321/innovative-construction-solutions-e1549903420794.jpg" alt="Image 1" />
          <div style={{ width: '65%' }} className="info bg-slte-400">
            <h2 className='text-white text-6xl'>INNOVATION</h2>
            <p className='text-slate-900 text-4xl'> Our commitment to innovation is shaped by our actions, partnerships and our teams. with continuous Use and adoption of ecofriendly practices digital technologies like BIM and Jenga  21 and advanced materials, 21 Knights is constantly dedicated  to innovation and making our  sector more efficient for everyone</p>
          </div>
        </div>
        <div className="slider-item">
          <img className='w-full h-full s-image' src="https://res.cloudinary.com/pitz/image/upload/v1708324327/2_u5kgaz.png" alt="Image 1" />
          <div style={{ width: '65%' }} className="info bg-sate-400">
            <h2 className='text-white text-6xl '>SOCIAL & AGRICULTURE INFRASTRACTURE</h2>
            <p className='text-slate-100 text-4xl'> We are committed to construction of public amenities for societies and building  systesm to assist in agriculture and rural  development.</p>
          </div>
        </div>
        <div className="slider-item ">
          <img className='w-full h-full s-image' src="https://3a4527b4.flyingcdn.com/wp-content/uploads/2021/08/Blog-Hero.jpg" alt="Image 2" />
          <div style={{ width: '65%' }} className="info bg-sate-400">
            <h2 className='text-white text-6xl'>COMMERCIAL & RESIDENTIAL BUILDINGS</h2>
            <p className='text-slate-100 text-4xl'> At 21 Knights Engineering Group we offer comprehensive Commercial and Residential construction services to our customers within the continent. With our team specialized in EDGE building construction   practices we are committed to sustainable design and construction.</p>
          </div>
        </div>
        <div className="slider-item ">
          <img className='w-full h-full s-image' src="https://theconstructor.org/wp-content/uploads/2017/02/bituminous-road-construction.jpg" alt="Image 2" />
          <div style={{ width: '65%' }} className="info bg-slte-400">
            <h2 className='text-white text-6xl'>HIGHWAYS & ROADS</h2>
            <p className='text-slate-100 text-4xl'> As a global construction firm specializing in roads and highways, we are exceptional at designing, building, and maintaining vital transportation  infrastructure we pride ourselves in delivering road and highway projects,  connecting communities, fostering economic growth, and advancing transportation infrastructure.</p>
          </div>
        </div>
        <div className="slider-item ">
          <img className='w-full h-full s-image' src="https://res.cloudinary.com/pitz/image/upload/v1708323916/2_lbuhm1.png" alt="Image 2" />
          <div className="info  ">
            <h2>Title 2</h2>
            <p>Description 2</p>
          </div>
        </div>
        <div className="slider-item">
          <img src="https://res.cloudinary.com/pitz/image/upload/v1708324548/2_xkgm2z.png" alt="Image 2" />
          <div className="info ">
            <h2>Title 2</h2>
            <p>Description 2</p>
          </div>
        </div>
        {/* Add more slider items as needed */}
      </Carousel>
    </div>
  );
};

export default BackgroundSlider;