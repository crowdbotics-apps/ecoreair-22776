import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import Dashboard17175936Reducer from '../features/Dashboard17175936/redux/reducers'
import Dashboard18175935Reducer from '../features/Dashboard18175935/redux/reducers'

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
Dashboard17175936: Dashboard17175936Reducer,
Dashboard18175935: Dashboard18175935Reducer,

});