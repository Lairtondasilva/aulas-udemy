import Header from "../../components/Header";
import * as Styled from "./styles";
import AnimalCardContainer from "../../components/AnimalCardContainer";
import ProcedureCard from "../../components/ProcedureCard";
import { useEffect, useContext } from "react";
import { getSpecies } from "../../services/Species";
import { ApiContext } from "../../context/ApiContext";

export default function Home() {
  const { state, dispatch } = useContext(ApiContext);

  async function fetchData() {
    await getSpecies({ dispatch });
  }

  useEffect(() => {
    if (!state.specie) {
      fetchData();
    }
  }, [state.specie]);
  return (
    <>
      <Header arrow={false}>Home</Header>
      <Styled.ScrollView>
        <Styled.ScrollViewContainer>
          <AnimalCardContainer AnimalCardInfoList={state.specie} />
          <ProcedureCard />
        </Styled.ScrollViewContainer>
      </Styled.ScrollView>
    </>
  );
}
