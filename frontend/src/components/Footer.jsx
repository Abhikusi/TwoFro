import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Footer = () => {

    const data = new Date().getFullYear()

    return (
        <footer>
           <Container>
               <Row>
                   <Col className='text-center py-5'>
                    TwoFro by Abhishek. Copyright &copy; {data}
                   </Col>
               </Row>
           </Container>
        </footer>
    )
}

export default Footer
