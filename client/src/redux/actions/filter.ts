import {SET_ACTIVE_FILTER} from "../../constants/actionsTypes";
import {FilterActionTypes, Filters} from "../../types";

export const filter = (activeFilter: Filters): FilterActionTypes => ({type: SET_ACTIVE_FILTER, activeFilter})