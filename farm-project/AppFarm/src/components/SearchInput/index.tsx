import React from "react";
import * as Styled from "./styles";
import { SearchInputProps } from "./interfaces";
import { FontAwesome } from "@expo/vector-icons";
import { FunnelSimple } from "phosphor-react-native";

const SearchInput = ({ value, onChange }: SearchInputProps) => {
  return (
    <Styled.Container>
      <FontAwesome name="search" size={20} color="#888" />
      <Styled.Input
        placeholder="Pesquisar..."
        value={value}
        onChangeText={onChange}
      />
      <FunnelSimple size={28} color="#888" />
    </Styled.Container>
  );
};

export default SearchInput;
