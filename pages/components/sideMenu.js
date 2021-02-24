import { ListGroup } from "react-bootstrap";

const SideMenu = () => {
  return (
    <div >
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
  );
};

export default SideMenu;
