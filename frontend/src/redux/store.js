import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import loginReducer from "./login/loginReducer";
import recipesReducer from "./recipes/recipesReducer";
import favoriteRedcuer from "./favorites/favoriteRedcuer";


const rootReducer=combineReducers({
    loginReducer,
    recipesReducer,
    favoriteRedcuer
})

export const store= legacy_createStore(rootReducer,applyMiddleware(thunk));