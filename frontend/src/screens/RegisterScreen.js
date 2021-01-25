import React,{useState,useEffect}from 'react'
import {Link} from 'react-router-dom'
import {Row,Button,Col,Form} from 'react-bootstrap'
import {useDispatch,useSelector} from 'react-redux'
import FormContainer from '../components/FormContainer'
import Message from '../components/Message'
import Loader from '../components/Loader'
import {register} from '../actions/userAction'



const RegisterScreen = ({location,history}) => {
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [confirmpassword,setConfirmPassword] = useState('')
    const [message,setMessage] = useState(null)

    const redirect = location.search ? location.search.split('=')[1]:'/'

    const dispatch = useDispatch()

    const userRegister = useSelector(state => state.userRegister)
    const {userInfo,loading,error} = userRegister

    useEffect(()=>{
        if(userInfo){
            history.push(redirect)
        }
    },[history,userInfo,redirect]
    )

    const submitHandler = (e) =>{
        e.preventDefault()
        if(password !== confirmpassword){
            setMessage('Password Do Not Match')
        }else{
            dispatch(register(name,email,password))
        }
        
    }
    return (
        <FormContainer>
            <h1>New user ? Register</h1>
            {message && <Message variant='danger'>{message} </Message>}
            {error && <Message variant='danger'>{error} </Message>}
            {loading && <Loader></Loader>}
            <Form onSubmit={submitHandler}>
                <Form.Group controlId='name'>
                        <Form.Label>Name</Form.Label>
                        <Form.Control type='name' 
                        placeholder='Enter Name' 
                        value={name} 
                        onChange={(e)=>setName(e.target.value)}>
                        </Form.Control>
                </Form.Group>
                <Form.Group controlId='email'>
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control type='email' 
                    placeholder='Enter Email Address' 
                    value={email} 
                    onChange={(e)=>setEmail(e.target.value)}>
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId='password'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type='password' 
                    placeholder='Enter password' 
                    value={password} 
                    onChange={(e)=>setPassword(e.target.value)}>
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId='confirmpassword'>
                    <Form.Label>confirm Password</Form.Label>
                    <Form.Control type='password' 
                    placeholder='Confirm Password' 
                    value={confirmpassword} 
                    onChange={(e)=>setConfirmPassword(e.target.value)}>
                    </Form.Control>
                </Form.Group>
                <Button type='submit' variant='primary'>Sign Up</Button>
            </Form>
            <Row className='py-3'>
                <Col>
                Already Registered ? <Link to={redirect ? `/login?redirect=${redirect}`: '/login'}>Sign in</Link>
                </Col>
            </Row>
            
        </FormContainer>
    )
}

export default RegisterScreen
