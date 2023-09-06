import { api } from "../api";
import { ApiAction, actionTypes } from "../context/ApiContext/actionTypes";

interface FetchAnimalProps {
  specie: string;
  dispatch: React.Dispatch<ApiAction>;
}

export const getAnimalsBySpecie = async ({
  specie,
  dispatch,
}: FetchAnimalProps) => {
  try {
    dispatch({ type: actionTypes.START_LOADING });
    const { data, status } = await api.get(
      `/animals/?filters[$and][0][species][name][$eq]=${specie}`
    );
    dispatch({ type: actionTypes.SET_SPECIE_SELECTED, payload: specie });
    dispatch({ type: actionTypes.FETCH_ANIMALS_SUCCESS, payload: data.data });
  } catch (err) {
    throw new Error("Failed to fetch animals.");
  } finally {
    dispatch({ type: actionTypes.STOP_LOADING });
  }
};
