import SideNavBar from './components/SideBar/SideNavBar'
import NormalTable from './components/Normal_Table/NormalTable'
import Auth from './components/Auth/Auth'
import AllProducts from './components/AllProducts/AllProducts'
import EditableTable from './components/Editable_Table/EditableTable'
import Dashboard from './components/Dashboard/Dashboard'
import { Route, Routes } from 'react-router-dom';
function App() {
  return (
    <>
    <SideNavBar/>
    <Routes>
      <Route exact path="/" element={<Dashboard/>}/>
      <Route exact path="/orders" element={<EditableTable/>}/>
      <Route exact path="/users" element={<NormalTable/>}/>
      <Route exact path="/bakers" element={<EditableTable/>}/>
      <Route exact path="/shipping_partners" element={<EditableTable/>}/>

      <Route exact path="/all_products" element={<AllProducts/>}/>


    </Routes>
    </>
  );
}

export default App;
