import { Carousel } from "react-bootstrap";
const CarouselHome = ()=>{

    return (
        <Carousel className="mb-4">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="http://placehold.it/800x400"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            Nulla vitae elit libero, a pharetra augue mollis interdum.
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="http://placehold.it/800x400"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="http://placehold.it/800x400"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            Praesent commodo cursus magna, vel scelerisque nisl
            consectetur.
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

    )

    
}

export default CarouselHome;