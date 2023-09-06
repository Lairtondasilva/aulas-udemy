import { styled, css } from "styled-components/native";
import { Dimensions } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const { height } = Dimensions.get("window");

export const Container = styled.View`
  ${({ theme }) => css`
    padding: 0 ${wp(8)}px;
    margin-top: 22px;
    width: 100%;
    flex-direction: column;
    display: flex;
    gap: ${hp(1.5)}px;
    width: 100%;
    padding-bottom: 12px;
  `}
`;

export const Input = styled.TextInput`
  border: 2px solid #a8a8b3;
  border-radius: 8px;
  font-size: 16px;
  padding-left: 12px;
  height: ${height > 684 ? hp(6) : hp(7)}px;
`;

export const Text = styled.Text`
  font-size: 18px;
`;

export const DualContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 24px;
`;

export const DualItem = styled.View`
  flex: 0.5;
  gap: 10;
`;

export const ScrollView = styled.ScrollView``;
