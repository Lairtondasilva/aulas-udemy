import { TouchableOpacity } from "react-native";
import { AnimalCardProps } from "./interfaces";
import * as Styled from "./styles";
import React, { useContext } from "react";
import NavigationProvider from "../../context/NavigationProvider";
import { getAnimalsBySpecie } from "../../services/Animals";
import { ApiContext } from "../../context/ApiContext";

const AnimalCard = ({
  name,
  iconUrl,
  pageUrl = "Animals",
  id,
}: AnimalCardProps) => {
  const navigation = useContext(NavigationProvider);
  const { dispatch } = useContext(ApiContext);
  return (
    <TouchableOpacity
      onPress={async () => {
        await getAnimalsBySpecie({ specie: name, dispatch: dispatch });
        navigation.navigate(pageUrl);
      }}
      activeOpacity={0.9}
    >
      <Styled.Container>
        <Styled.containerImage
          source={{ uri: iconUrl }}
          resizeMode="contain"
        ></Styled.containerImage>
        <Styled.Text>{name}</Styled.Text>
      </Styled.Container>
    </TouchableOpacity>
  );
};

export default AnimalCard;
