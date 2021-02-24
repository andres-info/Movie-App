import React from "react";

import Swal from "sweetalert2";

import { Card, Button } from "react-bootstrap";

class MovieList extends React.Component {
  //   state={
  // count: 0
  //    }

  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };

  //  this.increment = this.increment.bind(this)
  }
  increment  =()=> {
    //const count = this.state.count
    const { count } = this.state;
    
    // VERY BAD
    //this.state.count = count + 1

    this.setState({
      count: count + 1,
    });
    Swal.fire({
      icon: "success",
      title: "Good...",
      text: "Incrementing Number!",
      showConfirmButton: false,
      timer: 1000,

      // footer: '<a href>Why do I have this issue?</a>'
    });
  };

  decrement = () => {
    const { count } = this.state;

    this.setState({
      count: count - 1,
    });
    Swal.fire({
      icon: "error",
      title: "Bad...",
      text: "Decrementing Number!",
      showConfirmButton: false,
      timer: 1000,

      // footer: '<a href>Why do I have this issue?</a>'
    });
  };

  render() {
    
    return (
      <>
        <div>
          <Button className="btn btn-primary" onClick={ this.increment}>
            Increment Number
          </Button>

          <Button className="btn btn-secondary" onClick={this.decrement}>
            Decrement Number
          </Button>

          <h1> {this.state.count}</h1>
        </div>

        <div className="col-lg-4 col-md-6 mb-4">
          <Card>
            <Card.Img variant="top" src="http://placehold.it/700x400" />
            <Card.Body>
              <Card.Title className="card-title">Card Title</Card.Title>
              <Card.Text>
                <h5>$24.99</h5>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
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
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
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
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
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
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
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
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
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
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">
                &#9733; &#9733; &#9733; &#9733; &#9734;
              </small>
            </Card.Footer>
          </Card>
        </div>
      </>
    );
  }
}

export default MovieList;
