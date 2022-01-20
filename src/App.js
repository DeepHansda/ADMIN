import React,{ useState,useEffect} from 'react';
import SideNavBar from './components/SideBar/SideNavBar'
import Auth from './components/Auth/Auth'
import AllProducts from './components/AllProducts/AllProducts'
import Dashboard from './components/Dashboard/Dashboard'
import Orders from './components/Tables/Orders';
import Users from './components/Tables/Users';
import Bakers from './components/Tables/Bakers';
import Shipping_Partners from './components/Tables/Shipping_Partners';
import Upload from './components/Upload/Upload'
import { Route, Routes,useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';




function App() {


const logOut = async ()=>{
  Cookies.remove('accessToken')
  window.location.reload();
}
const [sideBar,setSideBar] = useState(false)
const navigate = useNavigate()
useEffect(()=>{
  const access = Cookies.get('accessToken')
  if(access) {
    navigate('/')
    setSideBar(true)

  }
  else {
    navigate('/auth')
  }
},[])

  return (
    <>
    <SideNavBar sideBar={sideBar} logOut={logOut}/>
    <Routes>
      <Route exact path="/" element={<Dashboard/>}/>
      <Route exact path="/orders" element={<Orders/>}/>
      <Route exact path="/users" element={<Users/>}/>
      <Route exact path="/bakers" element={<Bakers/>}/>
      <Route exact path="/shipping_partners" element={<Shipping_Partners/>}/>
      <Route exact path="/all_products" element={<AllProducts/>}/>
      <Route exact path="/upload" element={<Upload/>}/>
      <Route exact path="/auth"  element={<Auth setSideBar={setSideBar}/>}/>

    </Routes>
    </>
  );
}

export default App;
