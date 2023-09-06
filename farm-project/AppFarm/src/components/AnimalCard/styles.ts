import { styled, css } from "styled-components/native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Dimensions } from "react-native";

const { height } = Dimensions.get("window");

export const Container = styled.View`
  ${({ theme }) => css`
    display: flex;
    width: ${wp(37)}px;
    height: ${height > 684 ? hp(22) : hp(24)}px;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    border: 1px solid #cebebe;
    background: #fff;
    border-radius: 10px;
    elevation: 20;
    gap: ${hp(0.3)}px;
  `}
`;

export const containerImage = styled.ImageBackground`
  width: ${wp(30)}px;
  height: ${height > 684 ? hp(12) : hp(14)}px;
`;

export const Text = styled.Text`
  font-size: 24px;
  font-weight: bold;
`;
