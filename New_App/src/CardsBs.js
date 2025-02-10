import React from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'


function CardsBs() {
    return (
        <Container>
            <Row>
                <Col md={4}>
                    <Card border='danger'>
                        <Card.Img src='images/Koala.jpg' />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Subtitle>Card Sub Title</Card.Subtitle>
                            <Card.Text>
                                Lorem ipsum dolor sit amet consectetur Them.
                                Tenetur quas ex tempora suscipit corrupti.
                            </Card.Text>
                            <Card.Link href='#'>Link Here...</Card.Link>
                            <div className='d-grid'>
                                <Button variant='danger'>Read More...</Button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card bg='success'>
                        <Card.Header>
                            This is Card Header
                        </Card.Header>
                        <Card.Img src='images/Koala.jpg' />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Subtitle>Card Sub Title</Card.Subtitle>
                            <Card.Text>
                                Lorem ipsum dolor sit amet consectetur Them.
                                Tenetur quas ex tempora suscipit corrupti.
                            </Card.Text>
                            <div className='d-grid'>
                                <Button variant='primary'>Read More...</Button>
                            </div>
                        </Card.Body>
                        <Card.Footer>
                            This is Car Footer
                        </Card.Footer>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card bg='secondary'>
                        <Card.Img src='images/Koala.jpg' />
                        <Card.ImgOverlay style={{ color: 'white' }}>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Subtitle>Card Sub Title</Card.Subtitle>
                            <Card.Text>
                                Lorem ipsum dolor sit amet consectetur Them.
                                Tenetur quas ex tempora suscipit corrupti.
                            </Card.Text>
                            <div className='d-grid'>
                                <Button variant='success'>Read More...</Button>
                            </div>
                        </Card.ImgOverlay>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default CardsBs