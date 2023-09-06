import { Animals } from "./Animals";
import { Species } from "./Specie";

export enum actionTypes {
  FETCH_ANIMALS_SUCCESS = "FETCH_ANIMALS_SUCCESS",
  START_LOADING = "START_LOADING",
  STOP_LOADING = "STOP_LOADING",
  SET_SPECIE_SELECTED = "SET_SPECIE_SELECTED",
  FETCH_SPECIES_SUCCESS = "FETCH_SPECIES_SUCCESS",
}

export interface StartLoadingAction {
  type: actionTypes.START_LOADING;
}

export interface StopLoadingAction {
  type: actionTypes.STOP_LOADING;
}

export interface SetSpecieSelected {
  type: actionTypes.SET_SPECIE_SELECTED;
  payload: string;
}

export interface FetchAnimalsSuccessAction {
  type: actionTypes.FETCH_ANIMALS_SUCCESS;
  payload: Animals[];
}

export interface FetchSpeciesSuccessAction {
  type: actionTypes.FETCH_SPECIES_SUCCESS;
  payload?: Species[];
}

export type ApiAction =
  | FetchAnimalsSuccessAction
  | StartLoadingAction
  | StopLoadingAction
  | SetSpecieSelected
  | FetchSpeciesSuccessAction;
