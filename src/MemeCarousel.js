import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';


const MemeCarousel = function ({ memes }) {


    let myUrl = memes[0].url;
    console.log(myUrl);

    return (
        <Carousel>

            <Carousel.Item>
                <img className="d-block w-100" src="#" alt="#" />
                <Carousel.Caption>
                    <h5>First slide label</h5>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>



        </Carousel>
    );

}

export default MemeCarousel;