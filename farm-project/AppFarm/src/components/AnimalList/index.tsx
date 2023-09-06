import { Text } from "react-native";
import { ScrollView } from "../../templates/Home/styles";
import { Animals } from "../../templates/ListAnimal/interfaces";
import AnimalListItem from "../AnimalListItem";
import * as Styled from "./styles";

interface AnimalListProps {
  animals: Animals[];
}

export const AnimalList = ({ animals }: AnimalListProps) => {
  return (
    <Styled.Container>
      {animals ? (
        animals.map((animal) => (
          <AnimalListItem
            key={animal.id}
            id={animal.id}
            name={animal.name}
            birth={animal.birth}
            marking={animal.marking}
          />
        ))
      ) : (
        <Text>Erro na conexão...</Text>
      )}
    </Styled.Container>
  );
};
