import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Footer = () => {
    return (
        <footer className='bg-primary text-white' expand='lg'>
           <Container >
               <Row>
               <Col className="text-center py-3">
                    <h6 className='text-white'>Follow us Social Media</h6>
                    <i className='fab fa-instagram' style={{color:'pink',fontSize:"30px"}}><h6 className='text-white'>Instgram</h6></i><br/>  
                    <i className='fab fa-facebook'style={{color:'blue',fontSize:"30px"}}><h6 className='text-white'>facebook</h6></i><br/>  
                    <i className='fab fa-twitter' style={{color:'blue',fontSize:"30px"}}><h6 className='text-white'>Instgram</h6></i><br/>  
                    <i className='fab fa-youtube'style={{color:'red',fontSize:"30px"}}><h6 className='text-white'>Instgram</h6></i>
                </Col>                   
                <Col className="text-center py-3">
                    <h6 className='text-white'>HaedQuter</h6>
                    <p>1238  Massachusetts Avenue
                    Washington,
                    DC,Washington DC,
                    20005,
                    202-662-3102
                    </p>

                    <h6 className='text-white'>Branch:1</h6>
                    <p >1238  Massachusetts Avenue
                    Washington,
                    DC,Washington DC,
                    20005,
                    202-662-3102
                    </p>
                    <h6 className='text-white'> Branch: 2</h6>
                    <p>1238  Massachusetts Avenue
                    Washington,
                    DC,Washington DC,
                    20005,
                    202-662-3102
                    </p>
                </Col>
                <Col className="text-center py-3">
                    <h6 className='text-white'>Acheivements</h6>
                    <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </Col>
               </Row>
           </Container>
        </footer>
    )
}

export default Footer
