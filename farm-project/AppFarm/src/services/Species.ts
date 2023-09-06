import { api } from "../api";
import { ApiAction, actionTypes } from "../context/ApiContext/actionTypes";

interface FetchAnimalProps {
  dispatch: React.Dispatch<ApiAction>;
}

export const getSpecies = async ({ dispatch }: FetchAnimalProps) => {
  try {
    dispatch({ type: actionTypes.START_LOADING });
    const { data, status } = await api.get(`/species`);
    dispatch({ type: actionTypes.FETCH_SPECIES_SUCCESS, payload: data.data });
  } catch (err) {
    throw new Error("Failed to fetch Species.");
  } finally {
    dispatch({ type: actionTypes.STOP_LOADING });
  }
};
