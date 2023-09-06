import { styled, css } from "styled-components/native";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";

export const Container = styled.View`
  ${({ theme }) => css`
    width: ${wp(20)}px;
    height: ${wp(20)}px;
    border-radius: ${wp(10)}px;
    background-color: #8b9f69;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: 12px;
    right: 12px;
  `}
`;
