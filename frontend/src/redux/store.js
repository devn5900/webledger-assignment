import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import loginReducer from "./login/loginReducer";
import recipesReducer from "./recipes/recipesReducer";


const rootReducer=combineReducers({
    loginReducer,
    recipesReducer
})

export const store= legacy_createStore(rootReducer,applyMiddleware(thunk));