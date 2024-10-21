import { Fragment } from "react"
import { Container, Navbar,Nav,NavLink,NavDropdown,NavbarCollapse,Carousel,Card,Button,Table} from "react-bootstrap"
import BasicExample from "../Mern"
import 'bootstrap/dist/css/bootstrap.min.css';


const Ecommerce= () =>{
    return (<Fragment>
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home"><img src="./public/amazon.png" style={{width:"100px"}} alt="" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Carousel>
      <Carousel.Item>
        <img src="https://graphicsfamily.com/wp-content/uploads/edd/2021/07/Professional-E-Commerce-Shoes-Banner-Design-1536x864.jpg"  style={{width:"100%",height:"500px"}} alt="sample1" />
        <Carousel.Caption>
          <h3>Limited Offers</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src="https://img.freepik.com/premium-psd/shoes-facebook-cover-web-banner-template_220159-150.jpg" alt="sample2" style={{width:"100%",height:"500px"}} />
        <Carousel.Caption>
          <h3>Bumber Purchase</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src="https://img.freepik.com/premium-psd/shoes-facebook-cover-web-banner-template_220159-147.jpg" alt=""   style={{width:"100%",height:"500px"}}sample3/>
        <Carousel.Caption>
          <h3>Buy one get one free</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    <div className="d-flex gap-3  overflow-auto ">
    <Card className="flex-shrink-0" style={{ width: '18rem' }}>
      <img src="https://th.bing.com/th/id/OIP.1RfKeDjiffAd7MnXDykgcQAAAA?rs=1&pid=ImgDetMain" alt="" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    <Card className="flex-shrink-0"style={{ width: '18rem' }}>
      <img src="https://th.bing.com/th/id/OIP.1RfKeDjiffAd7MnXDykgcQAAAA?rs=1&pid=ImgDetMain" alt="" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    <Card className="flex-shrink-0" style={{ width: '18rem' }}>
      <img src="https://th.bing.com/th/id/OIP.1RfKeDjiffAd7MnXDykgcQAAAA?rs=1&pid=ImgDetMain" alt="" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    <Card className="flex-shrink-0"style={{ width: '18rem' }}>
      <img src="https://th.bing.com/th/id/OIP.1RfKeDjiffAd7MnXDykgcQAAAA?rs=1&pid=ImgDetMain" alt="" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    <Card className="flex-shrink-0"style={{ width: '18rem' }}>
      <img src="https://th.bing.com/th/id/OIP.1RfKeDjiffAd7MnXDykgcQAAAA?rs=1&pid=ImgDetMain" alt="" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    <Card className="flex-shrink-0"style={{ width: '18rem' }}>
      <img src="https://th.bing.com/th/id/OIP.1RfKeDjiffAd7MnXDykgcQAAAA?rs=1&pid=ImgDetMain" alt="" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    <Card className="flex-shrink-0"style={{ width: '18rem' }}>
      <img src="https://th.bing.com/th/id/OIP.1RfKeDjiffAd7MnXDykgcQAAAA?rs=1&pid=ImgDetMain" alt="" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </div>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>3</td>
          <td colSpan={2}>Larry the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </Table>

    <BasicExample></BasicExample>

    </Fragment>
    )
}
export default Ecommerce
