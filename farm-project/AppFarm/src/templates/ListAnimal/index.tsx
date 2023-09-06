import { useContext } from "react";

import Header from "../../components/Header";
import SearchInput from "../../components/SearchInput";
import * as Styled from "./styles";
import { ApiContext } from "../../context/ApiContext";
import { AnimalList } from "../../components/AnimalList";
import AddButton from "../../components/AddButton";

const ListAnimal = () => {
  const { state } = useContext(ApiContext);

  return (
    <>
      <Header arrow={true}>{state.specieSelected}</Header>
      <Styled.Container>
        <SearchInput value="" onChange={() => {}} />
        <Styled.ScrollView showsVerticalScrollIndicator={false}>
          <AnimalList animals={state.animals} />
        </Styled.ScrollView>
      </Styled.Container>
      <AddButton redirect={"RegisterAnimals"} />
    </>
  );
};

export default ListAnimal;
