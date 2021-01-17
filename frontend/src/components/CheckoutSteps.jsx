import React from 'react'
import { Nav} from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const CheckoutSteps = ({ step1, step2, step3, step4 }) => {
    return (
        <Nav className='justify-content-center mb-4'> 
            <Nav.Item className='mr-1'>
                {step1 ? (<LinkContainer to='/login'>
                           <Nav.Link>Sign In</Nav.Link>
                        </LinkContainer>) : (<Nav.Link disabled>Sign In</Nav.Link>)
                }
            </Nav.Item>

            

            <Nav.Item  className='mr-1'>
                {step2 ? (<LinkContainer to='/shipping'>
                           <Nav.Link><i class="fa fa-arrow-circle-right"></i> Shipping</Nav.Link>
                        </LinkContainer>) : (<Nav.Link disabled><i class="fa fa-arrow-circle-right"></i> Shipping</Nav.Link>)
                }

                
            </Nav.Item>

           

            <Nav.Item  className='mr-1'>
                {step3 ? (<LinkContainer to='/payment'>
                           <Nav.Link><i class="fa fa-arrow-circle-right"></i> Payment</Nav.Link>
                        </LinkContainer>) : (<Nav.Link disabled><i class="fa fa-arrow-circle-right"></i> Payment</Nav.Link>)
                }
            </Nav.Item>

            

            <Nav.Item  className='mr-1'>
                {step4 ? (<LinkContainer to='/placeorder'>
                           <Nav.Link> <i class="fa fa-arrow-circle-right"></i> Placeorder</Nav.Link>
                        </LinkContainer>) : (<Nav.Link disabled> <i class="fa fa-arrow-circle-right"></i> Placeorder</Nav.Link>)
                }
            </Nav.Item>
            
        </Nav>
    )
}

export default CheckoutSteps
