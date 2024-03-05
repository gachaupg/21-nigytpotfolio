
import { MDBCarousel, MDBCarouselCaption, MDBCarouselItem } from 'mdb-react-ui-kit';

export default function App() {
  return (
    <div className='relative '>
      <MDBCarousel className='slider' showControls>
        <MDBCarouselItem itemId={1} className="carousel-item animate-right-to-left">
          <img src='https://3a4527b4.flyingcdn.com/wp-content/uploads/2021/08/Blog-Hero.jpg' className='d-block w-1 s-image relative' alt='...' />
          <MDBCarouselCaption className='absolute top-96 bottom-40 left- right- asb bg-blue-300 p-1  h-52 w-96'>
            <h1 className='text-red-500' >INNOVATION</h1>
            <p>Our commitment to innovation is shaped by our actions, partnerships and our team</p>
          </MDBCarouselCaption>
        </MDBCarouselItem>
        <MDBCarouselItem itemId={2} className="carousel-item animate-right-to-left">
          <img src='https://res.cloudinary.com/pitz/image/upload/v1708324327/2_u5kgaz.png' className='d-block w-100 s-image' alt='...' />
          <MDBCarouselCaption className='absolute top-96 bottom-40 left- right- asb bg-slate-700 p-1  h-52 w-96'>
            <h2 className='text-red-600' >SOCIAL & AGRICULTURE INFRASTRACTURE</h2>
            <p>We are committed to construction of public amenities for societies and building systesm to assist in agriculture and rural development.</p>
          </MDBCarouselCaption>
        </MDBCarouselItem>
        <MDBCarouselItem itemId={3} className="carousel-item animate-right-to-left">
          <img src='https://res.cloudinary.com/pitz/image/upload/v1708114510/Cap_huhjt7.png' className='d-block w-100 s-image' alt='...' />
          <MDBCarouselCaption className='absolute top-96 bottom-40 left- right- asb p-1 bg-slate-400  h-52 w-96'>
            <h2 className='text-red-600' >ENERGY PROJECTS DEVELOPMENT</h2>
            <p>21 Knights Engineering Group is a pioneer in energy projects development.</p>
          </MDBCarouselCaption>
        </MDBCarouselItem>
        <MDBCarouselItem itemId={4} className="carousel-item animate-right-to-left">
          <img src='https://res.cloudinary.com/pitz/image/upload/v1708692494/Capture_edschp.png' className='d-block w-100 s-image' alt='...' />
          <MDBCarouselCaption className='absolute top-96 bottom-40 left- p-1 right- asb bg-slate-400  h-52 w-96'>
            <h2 className='text-red-600'>COMMERCIAL & RESIDENTIAL BUILDINGS</h2>
            <p>At 21 Knights Engineering Group we offer comprehensive Commercial and Residential construction services to our customers within the continent.</p>
          </MDBCarouselCaption>
        </MDBCarouselItem>
      </MDBCarousel>
    </div>


  );
}