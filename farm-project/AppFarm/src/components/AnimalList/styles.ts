import { styled, css } from "styled-components/native";

export const Container = styled.View`
  ${({ theme }) => css`
    gap: 12px;
    elevation: 2;
  `}
`;
