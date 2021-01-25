import React, { useState } from 'react'
import { Form, Button, FormGroup, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import FormContainer from '../components/FormContainer'
import CheckoutSteps from '../components/CheckoutSteps'
import { savePaymentMethod } from '../actions/cartAction'

const PaymentScreen = ({ history }) => {
  const cart = useSelector((state) => state.cart)
  const { shippingAddress } = cart

  const [paymentMethod,setPaymentMethod] = useState('paypal')

    if(!shippingAddress){
        history.push('/shipping')
    }
  const dispatch = useDispatch()

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(savePaymentMethod(paymentMethod))
    history.push('/placeorder')
  }

  return (
    <FormContainer>
      <CheckoutSteps step1 step2 step3/>
      <h2>Payment Method</h2>
      <Form onSubmit={submitHandler}>
        <FormGroup>
          <Form.Label as='legend'>Select Method</Form.Label>
        <Col>
            <Form.Check type='radio' label='paypal or Credit Card' id='Paypal' name='paymentMethod' value='paypal' 
            checked onChange={(e)=>setPaymentMethod(e.target.value)} ></Form.Check>

            {/* <Form.Check type='radio' label='stripe' id='Stripe' name='paymentMethod' value='stripe' 
             onChange={(e)=>setPaymentMethod(e.target.value)} ></Form.Check> */}
        </Col>
        </FormGroup>
        <Button type='submit' variant='primary'>
          Continue
        </Button>
      </Form>
    </FormContainer>
  )
}

export default PaymentScreen