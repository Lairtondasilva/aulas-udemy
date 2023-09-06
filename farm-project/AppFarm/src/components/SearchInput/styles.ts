import { styled, css } from "styled-components/native";
import { Dimensions } from "react-native";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const { height } = Dimensions.get("window");

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  background-color: #fff;
  padding: 12px 12px 12px 20px;
  border-radius: 5px;
  width: 100%;
`;

export const Input = styled.TextInput`
  flex: 1;
  font-size: 16px;
  padding-left: 12px;
  margin-left: 10px;
  height: ${height > 684 ? hp(4) : hp(6)}px;
`;
