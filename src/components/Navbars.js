// Import Library
import { Row } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';

function Navbars() {
    return (
        <>
            <Navbar className="shadow-sm" expand="sm" variant="light" bg="light">
                <Row className="mx-auto">
                    <Navbar.Brand>Let's make some Todo</Navbar.Brand>
                </Row>
            </Navbar>

            {/* For phone */}
            {/* <Navbar fixed="bottom" className="shadow-sm" expand="sm" variant="light" bg="light">
                <Row className="mx-auto w-100">
                    <Col sm={6} className="border border-primary d-sm-flex justify-content-center" >
                        <Navbar.Brand href="#" ><AiFillHome size={35} /></Navbar.Brand>
                    </Col>
                    <Col sm={6} className="border border-primary d-sm-flex justify-content-center">
                        <Navbar.Brand href="#"><AiFillHome size={35} /></Navbar.Brand>
                    </Col>
                </Row>
            </Navbar> */}
        </>


    );
}

export default Navbars;
