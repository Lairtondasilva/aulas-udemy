import { styled, css } from "styled-components/native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export const ScrollView = styled.ScrollView`
  display: flex;
`;

export const ScrollViewContainer = styled.View`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin: ${wp(10)}px 0;
  padding: 0 ${wp(8)}px;
  gap: ${wp(6)}px;
`;

export const CardContainer = styled.View`
  ${({ theme }) => css`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-content: flex-start;
    gap: 20px;
    flex: 1;
  `}
`;

export const Text = styled.Text`
  ${({ theme }) => css`
    font-size: 48px;
    color: black;
  `}
`;
