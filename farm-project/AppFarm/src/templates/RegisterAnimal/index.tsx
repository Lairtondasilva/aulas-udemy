import * as Styled from "./styles";

import Header from "../../components/Header";
import CardSelect from "../../components/CardSelect";
import { useState } from "react";
import { genderOptions, statusOptions } from "./utils";
import { ScrollView } from "../Home/styles";
import DatePicker from "../../components/DatePicker";
import { Button, View } from "react-native";
import CheckBox from "@react-native-community/checkbox";
import ImageSelector from "../../components/ImageSelector";

const RegisterAnimal = () => {
  const [gender, setGender] = useState("");
  const [files, setFiles] = useState("");

  return (
    <ScrollView>
      <Header arrow={true}>Cadastrar</Header>
      <Styled.Container>
        <Styled.Text>Nome:</Styled.Text>
        <Styled.Input />
        <Styled.Text>Marcação:</Styled.Text>
        <Styled.Input />
        <Styled.Text>Gênero:</Styled.Text>
        <CardSelect
          cardsOptions={genderOptions}
          active=""
          onPress={(option: string) => {
            setGender(option);
          }}
        />
        {gender === "Fêmea" && (
          <View>
            <Styled.Text>Selecionar filhos</Styled.Text>
            <CheckBox />
          </View>
        )}
        <Styled.Text>Status:</Styled.Text>
        <CardSelect
          cardsOptions={statusOptions}
          active=""
          onPress={(option: string) => {
            setGender(option);
          }}
        />
        <Styled.DualContainer>
          <Styled.DualItem>
            <Styled.Text>Nascimento:</Styled.Text>
            <DatePicker />
          </Styled.DualItem>
          <Styled.DualItem>
            <Styled.Text>Peso:</Styled.Text>
            <Styled.Input keyboardType="numeric" />
          </Styled.DualItem>
        </Styled.DualContainer>
        <Styled.Text>Raça:</Styled.Text>
        <Styled.Input />
        <Styled.Text>Selecione as imagens:</Styled.Text>
        <ImageSelector />
      </Styled.Container>
    </ScrollView>
  );
};

export default RegisterAnimal;
