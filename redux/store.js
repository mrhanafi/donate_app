// import { combineReducers } from "@reduxjs/toolkitux";
import { combineReducers } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";
import {logger} from "redux-logger";
import { persistReducer,persistStore } from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";

import User from './reducers/User';
import Categories from "./reducers/Categories";

const rootReducer = combineReducers({
    user: User,
    categories: Categories,
});

const configuration = {
    key: 'root',
    storage: AsyncStorage,
    version: 1
}
const persistedReducer = persistReducer(configuration,rootReducer);

const store = configureStore({
    reducer: persistedReducer,
    // reducer: rootReducer,
    middleware: getDefaultMiddleware => {
        return getDefaultMiddleware({
            serializableCheck: false,
        }).concat(logger);
    },
});

export default store;
export const persistor = persistStore(store);

