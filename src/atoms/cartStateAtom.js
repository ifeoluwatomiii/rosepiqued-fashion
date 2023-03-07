import {atom} from 'recoil'
import { recoilPersist } from 'recoil-persist'


const { persistAtom } = recoilPersist({
    key: 'cartStateData', // this key is using to store data in local storage
    storage: localStorage, // configurate which stroage will be used to store the data
  })

const cartState = atom({
    key: 'cartState', 
    default: [],
    effects_UNSTABLE: [persistAtom],
  });

  export default cartState;