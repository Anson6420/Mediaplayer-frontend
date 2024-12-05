import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';

function Landingpage() {
  return (
   <>
   <Container className='mt-5'>
    <Row>
      
      <Col sm={12} md={6}>
      <h3>Welcome To <span className='text-warning'>
        Media Player</span></h3>
        <p style={{textAlign:'justify'}} className='mt-4'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim, architecto. Eligendi provident minus, voluptatum ullam animi porro voluptatem adipisci eius perspiciatis sapiente dolorum cupiditate iure suscipit ratione dolores distinctio hic?
        </p>
        <Link to={'home'}> <button className='btn btn-warning mt-5'>Get Started</button></Link>
      
      </Col>
      <Col sm={12} md={6} className='d-flex justify-content-center'>
      <img src="https://c.tenor.com/YoFLcGT38dYAAAAC/dj-mix.gif" alt="no image" className='w-55' /></Col>
      
    </Row>
   </Container>
   <div className='container-fluid mt-5'>
    <div className='row mt-5'>
      <div className='col-md-2'></div>
      <div className='col-md-8'>
        <h4 className='text-center'>Features</h4>
        <div className='row mt-5 '>
          <div className="col-md-4">
          <Card style={{ width: '100%' }} className='p-3'>
      <Card.Img variant="top" src="https://media.tenor.com/11u8gg1tMs4AAAAM/music-rock.gif" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        
      </Card.Body>
    </Card>

          </div>
          <div className="col-md-4 mt-4 mt-md-0">
          <Card style={{ width: '100%' }} className='p-3'>
      <Card.Img variant="top" src="https://media.tenor.com/eMrZP9HBkqEAAAAj/frkst-records.gif" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        
      </Card.Body>
    </Card>

          </div>
          <div className="col-md-4  mt-4 mt-md-0">
          <Card style={{ width: '100%' }}className='p-3'>
      <Card.Img variant="top" src="https://de.picmix.com/pic/download?picId=10104326&key=76c4b" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        
      </Card.Body>
    </Card>
          </div>
        </div>
      </div>
      <div className='col-md-2'></div>
    </div>
   </div>
   </>
  )
}

export default Landingpage