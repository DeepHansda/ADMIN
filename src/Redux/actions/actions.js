import {call} from '../Calls';
import Cookies from 'js-cookie'


export const getAllOrders = () => async(dispatch)=>{
    try{
        const res = await call.getOrders();

        dispatch({
            type: 'GET_ORDERS',
            payload: res.data
        })
    }
    catch(err){
        console.error(err)
    }
}

export const getAllUsers = () => async(dispatch)=>{
    try{
        const res = await call.getUsers();

        dispatch({
            type: 'GET_USERS',
            payload: res.data
        })
    }
    catch(err){
        console.error(err)
    }
}





export const getAllBakers = () => async(dispatch)=>{
    try{
        const res = await call.getBakers();

        dispatch({
            type: 'GET_BAKERS',
            payload: res.data
        })
    }
    catch(err){
        console.error(err)
    }
}

export const getAllShippers = () => async(dispatch)=>{
    try{
        const res = await call.getShippers();

        dispatch({
            type: 'GET_SHIPPERS',
            payload: res.data
        })
    }
    catch(err){
        console.error(err)
    }
}



export const getAllProducts = () => async(dispatch)=>{
    try{
        const res = await call.getCakes();

        dispatch({
            type: 'GET_CAKES',
            payload: res.data
        })
    }
    catch(err){
        console.error(err)
    }
}

export const updateOrder = (id,data) => async(dispatch)=>{
    try{
        const res = await call.updateOrder(id,data);

        dispatch({
            type: 'UPADATE_ORDER',
            payload: res.data
        })
        return Promise.resolve(res.data);
    }
    catch(err){
        return Promise.reject(err);
    }
}

export const updateCake = (id,data) => async(dispatch)=>{
    try{
        const res = await call.updateCakes(id,data);

        dispatch({
            type: 'UPADATE_CAKES',
            payload: res.data
        })
        return Promise.resolve(res.data);
    }
    catch(err){
        return Promise.reject(err);
    }
}

export const addBaker = (data) => async(dispatch)=>{
    try{
        const res = await call.addBaker(data);

        dispatch({
            type: 'ADD_BAKER',
            payload: res.data
        })
        return Promise.resolve(res.data);
    }
    catch(err){
        return Promise.reject(err);
    }
}

export const addShipper = (data) => async(dispatch)=>{
    try{
        const res = await call.addShipper(data);

        dispatch({
            type: 'ADD_SHIPPER',
            payload: res.data
        })
        return Promise.resolve(res.data);
    }
    catch(err){
        return Promise.reject(err);
    }
}

export const addCake = (data) => async(dispatch)=>{
    try{
        const res = await call.addCake(data);

        dispatch({
            type: 'ADD_CAKE',
            payload: res.data
        })
        return Promise.resolve(res.data);
    }
    catch(err){
        return Promise.reject(err);
    }
}

export const deleteBaker = (id) => async(dispatch)=>{
    try{
        const res = await call.deleteBaker(id);
        dispatch({
            type: 'DELETE_BAKER',
            payload: {id}
        })
       
    }

    catch(err){
        console.log(err);
    }
    
}

export const deleteShipper = (id) => async(dispatch)=>{
    try{
        const res = await call.deleteShipper(id);
        dispatch({
            type: 'DELETE_SHIPPER',
            payload: {id}
        })
       
    }

    catch(err){
        console.log(err);
    }
    
}


export const adminLogin = (data) => async(dispatch)=>{
    try{
        const res = await call.adminLogin(data).
        then((response) =>{

            dispatch({
                type: 'ADMIN_LOGIN',
                payload: response.data
            })
            const token = (response.data.accessToken);
            Cookies.set('accessToken',token);
            console.log(response.data)
        })
    }
    catch(err){
        console.log(err)

    }
}

export const adminSignup = (data) => async(dispatch)=>{
    try{
        const res = await call.adminSignup(data).
        then((response) =>{

            dispatch({
                type: 'ADMIN_SIGNUP',
                payload: response.data
            })
            const token = (response.data.accessToken);
            Cookies.set('accessToken',token);
        })

    }
    catch(err){
        console.log(err)
    }
}