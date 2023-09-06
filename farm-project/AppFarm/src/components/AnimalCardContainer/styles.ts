import { styled, css } from "styled-components/native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export const Container = styled.View`
  ${({ theme }) => css`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-content: flex-start;
    gap: 20px;
    flex: 1;
  `}
`;
