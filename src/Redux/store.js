import{configureStore} from '@reduxjs/toolkit'
import MovieSlice from './Reducers/Movie.slice'
// import ProductsSlice from './Reducers/Products.slice'
// import Cartslice from './Reducers/Cart.slice'
//Root reducer
export default configureStore({
    reducer:{
       movie:MovieSlice,    
    },
})
