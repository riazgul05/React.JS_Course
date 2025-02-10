import React from 'react'
import { Carousel, Col, Container, Row } from 'react-bootstrap'

function MyCarousel() {
  return (
    <>
    <Container fluid>
        <Row>
            <Col>
                <Carousel>
                    <Carousel.Item interval={500}> 
                        <img src='images/PIC1.jpg' className='d-block w-100'/>
                        <Carousel.Caption>
                            <h3>First Image</h3>
                            <p>The consectetur adipisicing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={500}>
                        <img src='images/PIC2.jpg' className='d-block w-100'/>
                        <Carousel.Caption>
                            <h3>Second Image</h3>
                            <p>Deleniti temaccusan praesentium.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={500}>
                        <img src='images/PIC3.jpg'className='d-block w-100' />
                        <Carousel.Caption>
                            <h3>Third Image</h3>
                            <p>The consectetur adipisicing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </Col>
        </Row>
    </Container>
    </>
  )
}

export default MyCarousel