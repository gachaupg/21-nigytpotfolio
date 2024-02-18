import { Link, useParams } from "react-router-dom";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

const SingleProduct = () => {
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

    const { id } = useParams(); // Destructure id from the params object

    return (
        <div data-aos="fade-right" data-aos-delay="400" className=" single w-full flex items-center justify-center p-5">
        {data.map((item) => (
            item.id === id && (
                <Card style={{ width: '65%' }} className="abt flex flex-col shadow-2xl" key={item.id}>
                    <CardActionArea>
                        <CardMedia
                        className="w-full h-96  object-fill"
                            component="img"
                            
                            image={item.img}
                            alt="Product Image"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {item.title}
                            </Typography>
                            <Typography className="text-red-600 text-xl" variant="body2" color="text.secondary">
                                {item.desc}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Link to='/contact'>
                            <Button size="small" className="text-white border small bg-red-500">
                                Contact Us
                            </Button>
                        </Link>
                       
                    </CardActions>
                </Card>
            )
        ))}
    </div>
    
    );
};

export default SingleProduct;


