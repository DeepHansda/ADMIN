

const initialState = [];
const adminReducer = (actionData = initialState , action)=>{
    const {type,payload} = action;

    switch(type){

        case 'GET_ORDERS' : return payload;
        case 'GET_USERS' : return payload; 
        case 'GET_BAKERS' : return  payload;
        case 'GET_SHIPPERS' : return payload;
        case 'GET_CAKES' : return  payload;
        case 'UPDATE_ORDER' :
            return actionData.map((a) => {
              if (a.id === payload.id) {
                return {
                  ...a,
                  ...payload,
                };
              } else {
                return a;
              }
            });
        
        case 'UPDATE_CAKES' :
                return actionData.map((a) => {
                  if (a.id === payload.id) {
                    return {
                      ...a,
                      ...payload,
                    };
                  } else {
                    return a;
                  }
                });

                case 'ADD_BAKER' : return [...actionData,payload];
                case 'ADD_SHIPPER' : return [...actionData,payload];
                case 'ADD_CAKE' : return [...actionData,payload];
                case  'DELETE_BAKER' : return actionData.filter(({ id }) => id !== payload.id);
                case  'DELETE_SHIPPER' : return actionData.filter(({ id }) => id !== payload.id);
                case 'ADMIN_LOGIN' : return {...actionData, payload}
                case 'ADMIN_SIGNUP' : return {...actionData, payload}



                default: return actionData;
   }
    }


export default adminReducer