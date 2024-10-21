import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './Pages/mern.css';

function BasicExample() {
  return (
   <div className='form-container'>
    <Form >
        <h1 style={{display:"flex", justifyContent:"center",color:"#0056b3"}}>FORM</h1>

        <Row>
        <Col>
          <Form.Control placeholder="First name" />
        </Col>
        <Col>
          <Form.Control placeholder="Last name" />
        </Col>
      </Row>
      <Form.Group className="mb-3 " controlId="formBasicEmail">
        <Form.Label className="pt-3 fs-4 fw-medium">Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      {/* <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group> */}

     
    <h4>Currently Working</h4>
    {[ 'radio'].map((type) => (
        <div key={`default-${type}`} className="mb-3">
          <Form.Check // prettier-ignore
            type={type}
            name='radio1'
            id={`default-${type}`}
            label={`Yes `}
            
          />
           <Form.Check // prettier-ignore
            type={type}
            name='radio1'
            id={`default-${type}`}
            label={`No `}
          />
           <Form.Select aria-label="Default select example">
      <option>Preferred Location</option>
      <option value="1">Bangalore</option>
      <option value="2">Chennai</option>
      <option value="3">Hyderabad</option>
    </Form.Select>
          <h5>Available for immediate join</h5>
           <Form.Check // prettier-ignore
        type="switch"
        id="custom-switch"
       
      />
     </div>
      ))}

{['checkbox'].map((type) => (
        <div key={`inline-${type}`} className="mb-3">
            <h5>Language</h5>
          <Form.Check
            inline
            label="English"
            name="group1"
            type={type}
            id={`inline-${type}-1`}
          />
          <Form.Check
            inline
            label="Tamil"
            name="group1"
            type={type}
            id={`inline-${type}-2`}
          />
           <Form.Check
            inline
            label="Hindi"
            name="group1"
            type={type}
            id={`inline-${type}-2`}
          />
         
        </div>
      ))}

<Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Address</Form.Label>
        <Form.Control placeholder="1234 Main St" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGridAddress2">
        <Form.Label>Address 2</Form.Label>
        <Form.Control placeholder="Apartment, studio, or floor" />
      </Form.Group>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label className="pt-2">City</Form.Label>
          <Form.Control />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>State</Form.Label>
          <Form.Select defaultValue="Choose...">
            <option>India</option>
            <option>Other</option>
          </Form.Select>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridZip">
          <Form.Label>Zip</Form.Label>
          <Form.Control />
        </Form.Group>
      </Row>
      <Form.Group className="position-relative mb-3">
            <Form.Label>Upload Resume</Form.Label>
            <Form.Control
              type="file"
              required
              name="file"
             
            />
            
          </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="I agree" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>
  );
}

export default BasicExample;