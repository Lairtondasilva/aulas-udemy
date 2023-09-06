import { styled, css } from "styled-components/native";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Dimensions, View } from "react-native";
import { containerImage } from "../AnimalCard/styles";

const { height } = Dimensions.get("window");

export const Container = styled.View`
  width: 100%;
  height: ${height > 684 ? hp(12) : hp(14)}px;
  background: #dfdfdf;
  border-radius: 12px;
  padding: 8px;
  flex-direction: row;
  gap: 16px;
  elevation: 4;
`;

export const ImageContainer = styled.View`
  width: 25%;
  height: 100%;
  border-radius: 8px;
`;
export const Image = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: 8px;
`;

export const Content = styled.View`
  flex-direction: column;
  flex: 1;
`;

export const CardHeader = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  padding: 8px 0;
`;

export const Text = styled.Text``;
