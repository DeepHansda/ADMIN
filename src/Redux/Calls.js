import api from './API';

const getOrders = ()=>{
    return api.get('/user/getOrders');
}
const getUsers = ()=>{
    return api.get('/user/showData');
}

const getBakers = ()=>{
    return api.get('/baker/getbakers')
}
const getShippers =()=>{
    return api.get('/shipper/getshippers')
}

const getCakes = ()=>{
    return api.get('/admin/getCake')
}

const updateOrder = (id,data)=>{
    return api.patch(`/user/editOrders/${id}`,data);
}

const updateCakes = (id,data)=>{
    return api.patch(`/admin/editCake/${id}`,data);
}

const addBaker = (data)=>{
    return api.post('/baker/signup',data)
}
const addShipper = (data)=>{
    return api.post('/shipper/signup',data)
}
const addCake = (data)=>{
    return api.post('/admin/addCake',data)
}
const deleteBaker = (id)=>{
    return api.post(`/baker/delete/${id}`)
}
const deleteShipper = (id)=>{
    return api.post(`/shipper/delete/${id}`)

}

const adminLogin = (data)=>{
    return api.post('/admin/login',data)
}
const adminSignup = (data)=>{
    return api.post('/admin/signup',data)
}




export  const call = {
    getOrders,
    getUsers,
    getBakers,
    getShippers,
    getCakes,
    updateOrder,
    updateCakes,
    addBaker,
    addShipper,
    addCake,
    deleteBaker,
    deleteShipper,
    adminLogin,
    adminSignup
}