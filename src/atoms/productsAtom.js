import {atom} from 'recoil'



const productsState = atom({
    key: 'productsState', 
    default: [],

  });

  export default productsState;