import {FilterActionTypes, Filters} from "../../types";
import {SET_ACTIVE_FILTER} from "../../constants/actionsTypes";

const initialState = Filters.ALL

const filter = (state = initialState, action: FilterActionTypes) => {
    switch (action.type) {
        case SET_ACTIVE_FILTER:
            return action.activeFilter
        default:
            return state
    }
}

export default filter