
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import{Button,Navbar,Nav,Form, FormControl, Container,Image} from 'react-bootstrap'
function App() {
  return (
    <div className="App">
       <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-info">Search</Button>
    </Form>
  </Navbar>
      <header className="App-header">
        <Container>
     
  <Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
    </Form.Text>
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlSelect1">
    <Form.Label>Country</Form.Label>
    <Form.Control as="select">
      <option>Italy</option>
      <option>Spain</option>
      <option>France</option>
      <option>Tunisia</option>
      <option>United Kingdom</option>
    </Form.Control>
  </Form.Group>
  
  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" size="sm" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>

</Form>
<br/> 
  
<Image src="Gomycode-et-Tunisia-Jobs-696x385.jpg" fluid />

        </Container>
        
      </header>
    </div>

  
  );
}

export default App;
