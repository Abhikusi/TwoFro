import React from 'react'
import { Col, Row, Image, Button } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const PnfScreen = () => {
    return (
        <Row>
            <Col md={8} className='mx-auto'>
                <Image src='https://www.elegantthemes.com/blog/wp-content/uploads/2020/02/000-404.png' fluid/>
                <LinkContainer to={'/'}>
                        <Button variant='dark' className='btn-block mx-auto'>Lets go back</Button>
                </LinkContainer>
            </Col>  
        </Row>
    )
}

export default PnfScreen
