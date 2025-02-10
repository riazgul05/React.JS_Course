import React from 'react'
import { Col, Container, Nav, NavDropdown, Navbar, Row } from 'react-bootstrap'

function MyNavbar() {
  return (
    <>
    <Container >
        <Row>
            <Col>
            <Navbar fixed='top' bg='dark' variant='dark' expand ='md'>
                <Container>
                    <Navbar.Brand href='#'>
                    <img src="logo192.png" height='30' width='30'/> &nbsp;
                        My Website
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls='my-nav'></Navbar.Toggle>
                    <Navbar.Collapse id='my-nav'>
                    
                    <Nav className='me-auto fw-bold'>
                        <Nav.Link href='#'>Home</Nav.Link>
                        <NavDropdown title='Services' id='my-nav'>
                        <NavDropdown.Header>Heading 1</NavDropdown.Header>
                            <NavDropdown.Item href='#'>Service 1</NavDropdown.Item>
                            <NavDropdown.Item href='#'>Service 2</NavDropdown.Item>
                            <NavDropdown.Divider/>
                            <NavDropdown.Header>Heading 2</NavDropdown.Header>
                            <NavDropdown.Item href='#'>Service 3</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href='#'>About</Nav.Link>
                        <Nav.Link href='#'>Contact</Nav.Link>

                    </Nav>
                    <Navbar.Text>
                        Sign in here <a href="#">Login</a>
                    </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
                </Navbar>
            </Col>
        </Row>
        <Row>
            <Col>
                <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta perferendis, soluta animi earum iusto incidunt repudiandae est excepturi dolor eligendi deserunt repellat beatae dolore ut illum corporis officia provident? Ipsa culpa tempore temporibus animi quia accusantium eius pariatur quod aliquam, ipsum non odit, sequi quisquam. Eos fugiat maiores corporis nulla ipsum tempore sint pariatur eius nobis culpa nihil, iste in ad minima commodi repellendus harum dolore, doloribus itaque error cumque ut suscipit! Quos officiis voluptate nemo numquam minima, sunt aliquam quod voluptatem architecto natus ea quasi obcaecati nam, harum neque voluptatum tenetur.</h2>
                <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta perferendis, soluta animi earum iusto incidunt repudiandae est excepturi dolor eligendi deserunt repellat beatae dolore ut illum corporis officia provident? Ipsa culpa tempore temporibus animi quia accusantium eius pariatur quod aliquam, ipsum non odit, sequi quisquam. Eos fugiat maiores corporis nulla ipsum tempore sint pariatur eius nobis culpa nihil, iste in ad minima commodi repellendus harum dolore, doloribu Nobis eius quod accusantium itaque error cumque ut suscipit! Quos officiis voluptate nemo numquam minima, sunt aliquam quod voluptatem architecto natus ea quasi obcaecati nam, harum neque voluptatum tenetur.</h2>
                <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta perferendis, soluta animi earum iusto incidunt repudiandae est excepturi dolor eligendi deserunt repellat beatae dolore ut illum corporis officia provident? Ipsa culpa tempore temporibus animi quia accusantium eius pariatur quod aliquam, ipsum non odit, sequi quisquam. Eos fugiat maiores corporis nulla ipsum tempore sint pariatur eius nobis culpa nihil, iste in ad minima commodi repellendus harum dolore, doloribus mollitia sunt earum error cumque ut suscipit! Quos officiis voluptate nemo numquam minima, sunt aliquam quod voluptatem architecto natus ea quasi obcaecati nam, harum neque voluptatum tenetur.</h2>
                <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta perferendis, soluta animi earum iusto incidunt repudiandae est excepturi dolor eligendi deserunt repellat beatae dolore ut illum corporis officia provident? Ipsa culpa tempore temporibus animi quia accusantium eius pariatur quod aliquam, ipsum non odit, sequi quisquam. Eos fugiat maiores corporis nulla ipsum tempore sint pariatur eius nobis culpa nihil, iste in ad minima commodi repellendus harum dolore, doloribus itaque error cumque ut suscipit! Quos officiis voluptate nemo numquam minima, sunt aliquam quod voluptatem architecto natus ea quasi obcaecati nam, harum neque voluptatum tenetur.</h2>
            </Col>
        </Row>
    </Container>
    </>
  )
}

export default MyNavbar