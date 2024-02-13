import { configureStore, combineReducers } from "@reduxjs/toolkit"
import { catalogReducer } from "./slice/catalogReducer"
import { productsReducer } from "./slice/productsReducer"
import { userReducer } from "./slice/userReducer"
import orderReducer from "./slice/orderReducer" // Импортируйте как default

const rootReducer = combineReducers({
    catalog: catalogReducer,
    products: productsReducer,
    user: userReducer,
    orders: orderReducer // Используйте orderReducer как default импорт
})

const store = configureStore({
    reducer: rootReducer
})

export default store; // Экспортируйте только store как default
