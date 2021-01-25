import React from 'react'
import { Container} from 'react-bootstrap'
import {BrowserRouter,Route} from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Homescreen from './screens/Homescreen'
import ProductSceen from './screens/ProductSceen'
import CartScreen from './screens/CartScreen'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'
import ProfileScreen from './screens/ProfileScreen'
import ShippingScreen from './screens/ShippingScreen'
import PaymentScreen from './screens/PaymentScreen'
import PlaceOrder from './screens/PlaceOrder'
import OrderScreen from './screens/OrderScreen'
import UserListScreen from './screens/UserListScreen'
import ProductListScreen from './screens/ProductListScreen'
import ProductEditScreen from './screens/ProductEditScreen'
import OrderListScreen from './screens/orderListScreen'


const App = () => {
  return (
    <BrowserRouter>
    <Header />
      <main className="py-3">
        <Container>
        <Route path='/login' component={LoginScreen} />
        <Route path='/shipping' component={ShippingScreen} />
        <Route path='/orders/:id' component={OrderScreen} />
        <Route path='/payment' component={PaymentScreen} />
        <Route path='/placeorder' component={PlaceOrder} />
        <Route path='/profile' component={ProfileScreen} />
        <Route path='/register' component={RegisterScreen} />
        <Route path='/product/:id' component={ProductSceen} />
        <Route path='/cart/:id?' component={CartScreen} />
        <Route path='/admin/userlist' component={UserListScreen} />
        <Route path='/admin/productlist' component={ProductListScreen} />
        <Route path='/admin/products/:id/edit' component={ProductEditScreen} />
        <Route path='/admin/orders' component={OrderListScreen} />
        <Route path='/search/:keyword' component={Homescreen}  />
        <Route path='/' component={Homescreen} exact />
        </Container>
      </main>

    <Footer />
    </BrowserRouter>
  )
}

export default App;

