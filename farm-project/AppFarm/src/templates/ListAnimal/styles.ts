import { styled, css } from "styled-components/native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export const Container = styled.View`
  ${({ theme }) => css`
    padding: 0 ${wp(8)}px;
    margin-top: 22px;
    width: 100%;
    flex-direction: column;
    display: flex;
    gap: ${hp(4)}px;
    flex: 1;
    padding-bottom: 12px;
  `}
`;

export const ScrollView = styled.ScrollView``;
