import Head from "next/head";
import { Navbar, Nav, ListGroup, Carousel, Card } from "react-bootstrap";

import moment from "moment";

export default function Home() {
  return (

    <>
    <div>
      <Head>
        <title>Home</title>
      </Head>

      <Navbar className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="#">
            Start Bootstrap
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <Nav className="navbar-nav ml-auto">
              <Nav.Link href="#deets">More deets</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                Dank memes
              </Nav.Link>
            </Nav>
          </div>
        </div>
      </Navbar>

      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <h1 className="my-4">Shop Name</h1>
            <div className="list-group">
              <ListGroup variant="flush">
                <ListGroup.Item>Cras justo odio</ListGroup.Item>
                <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
              </ListGroup>
            </div>
          </div>

          <div className="col-lg-9">
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

            <div className="row">
              <div className="col-lg-4 col-md-6 mb-4">
                <Card>
                  <Card.Img variant="top" src="http://placehold.it/700x400" />
                  <Card.Body>
                    <Card.Title className="card-title">Card Title</Card.Title>
                    <Card.Text>
                      <h5>$24.99</h5>
                       Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <small className="text-muted">
                      &#9733; &#9733; &#9733; &#9733; &#9734;
                    </small>
                  </Card.Footer>
                </Card>
              </div>

              <div className="col-lg-4 col-md-6 mb-4">
                <Card>
                  <Card.Img variant="top" src="http://placehold.it/700x400" />
                  <Card.Body>
                    <Card.Title className="card-title">Card Title</Card.Title>
                    <Card.Text>
                      <h5>$24.99</h5>
                       Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <small className="text-muted">
                      &#9733; &#9733; &#9733; &#9733; &#9734;
                    </small>
                  </Card.Footer>
                </Card>
              </div>

              <div className="col-lg-4 col-md-6 mb-4">
                <Card>
                  <Card.Img variant="top" src="http://placehold.it/700x400" />
                  <Card.Body>
                    <Card.Title className="card-title">Card Title</Card.Title>
                    <Card.Text>
                      <h5>$24.99</h5>
                       Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <small className="text-muted">
                      &#9733; &#9733; &#9733; &#9733; &#9734;
                    </small>
                  </Card.Footer>
                </Card>
              </div>

              <div className="col-lg-4 col-md-6 mb-4">
                <Card>
                  <Card.Img variant="top" src="http://placehold.it/700x400" />
                  <Card.Body>
                    <Card.Title className="card-title">Card Title</Card.Title>
                    <Card.Text>
                      <h5>$24.99</h5>
                       Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <small className="text-muted">
                      &#9733; &#9733; &#9733; &#9733; &#9734;
                    </small>
                  </Card.Footer>
                </Card>
              </div>

              <div className="col-lg-4 col-md-6 mb-4">
                <Card>
                  <Card.Img variant="top" src="http://placehold.it/700x400" />
                  <Card.Body>
                    <Card.Title className="card-title">Card Title</Card.Title>
                    <Card.Text>
                      <h5>$24.99</h5>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <small className="text-muted">
                      &#9733; &#9733; &#9733; &#9733; &#9734;
                    </small>
                  </Card.Footer>
                </Card>
              </div>

              <div className="col-lg-4 col-md-6 mb-4">
                <Card>
                  <Card.Img variant="top" src="http://placehold.it/700x400" />
                  <Card.Body>
                    <Card.Title className="card-title">Card Title</Card.Title>
                    <Card.Text>
                       Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                      
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <small className="text-muted">
                      &#9733; &#9733; &#9733; &#9733; &#9734;
                    </small>
                  </Card.Footer>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="py-3 bg-dark">
        <div className="container">
          <p className="m-0 text-center text-white">
            Copyright &copy; Andres Arpe {moment().year()} </p>
          
        </div>
      </footer>
    </div>
    </>
  );
}
