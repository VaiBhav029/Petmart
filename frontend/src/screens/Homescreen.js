import React, { useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'
import Product from '../components/Product'
import Message from '../components/Message'
import Loader from '../components/Loader'
import {useDispatch,useSelector} from 'react-redux'
import { listProducts } from '../actions/productAction'


const Homescreen = ({match}) => {

    const keyword = match.params.keyword

    const dispatch = useDispatch()
    const productList = useSelector(state =>state.productList)
    const {loading,error,products} = productList

    useEffect(() =>{
        dispatch(listProducts(keyword))
    },[dispatch,keyword])

    return (
        <>
            <h1>Latest Products</h1>
        {loading ? <Loader /> : error ? <Message variant='danger'>{error}</Message> :
                        <Row>
                        {products.map(p =>(
                            <Col key={p.id}sm={12} md={6} lg={4} xl={3}>
                               <Product product={p} />
                            </Col>
                        ))}
                    </Row>
            }

        </>
    )
}

export default Homescreen
