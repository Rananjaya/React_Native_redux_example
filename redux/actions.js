export const SET_USER_NAME = 'SET_USER_NAME';
export const SET_USER_AGE = 'SET_USER_AGE';
export const GET_CITIES = 'GET_CITIES';

const API_URL = "http://192.168.42.2:3001/test";

//deside action

export const getCities = () => {
  try{
   return async dispatch =>{
 const result = await fetch(API_URL,{
     method:'GET',
     headers: {
         'Content-Type' : 'application/json',
     }
 });
 const json = await result.json() // converted into json
   if(json){

    dispatch({
        type: GET_CITIES,
        payload: json.Rows,
    });

   }else{
       console.log('Unbale to fetch');
   }

}
  }catch(error){
      console.log("Error",error);
  }
}

export const setName = name => dispatch => {
    dispatch({
        type: SET_USER_NAME,
        payload: name,
    })
};

export const setAge = age => dispatch => {
    dispatch({
        type: SET_USER_AGE,
        payload: age,
    })
};