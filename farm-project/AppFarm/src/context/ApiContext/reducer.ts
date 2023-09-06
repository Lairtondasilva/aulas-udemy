import { Animals } from "./Animals";
import { Species } from "./Specie";
import { ApiAction, actionTypes } from "./actionTypes";

export interface ApiState {
  animals: Animals[];
  isLoading: boolean;
  specie: Species[];
  specieSelected: string;
}

const initialState: ApiState = {
  animals: [],
  isLoading: false,
  specie: [],
  specieSelected: "",
};

export const apiReducer = (
  state: ApiState = initialState,
  action: ApiAction
) => {
  switch (action.type) {
    case actionTypes.START_LOADING:
      return { ...state, isLoading: true };
    case actionTypes.STOP_LOADING:
      return { ...state, isLoading: false };
    case actionTypes.FETCH_ANIMALS_SUCCESS:
      return { ...state, animals: action.payload };
    case actionTypes.FETCH_SPECIES_SUCCESS:
      return { ...state, ...{ specie: [...action.payload] } };
    case actionTypes.SET_SPECIE_SELECTED:
      return { ...state, specieSelected: action.payload };
    default:
      return state;
  }
};
