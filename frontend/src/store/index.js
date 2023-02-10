import { configureStore, combineReducers } from "@reduxjs/toolkit";
import Image from "./slice";
const reducer = combineReducers({ Image });
const store = configureStore({ reducer });

export default store;
