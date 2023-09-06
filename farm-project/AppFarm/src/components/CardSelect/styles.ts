import styled from "styled-components/native";

export const Container = styled.View`
  flex-flow: row nowrap;
  width: 100%;
  padding: 2px;
`;

export const CardContainer = styled.View<{
  isActive: boolean;
  qntItems: number;
  item: number;
}>`
  min-width: ${(props) => 100 / props.qntItems + "%"};
  height: ${(props) => (props.qntItems > 2 ? "80px" : "64px")};
  justify-content: center;
  align-items: center;
  background-color: ${(props) =>
    props.isActive ? props.theme.colors.primary : "#DFDFDF"};
  border-radius: ${(props) =>
    props.item === 0
      ? "8px 0 0 8px"
      : props.item === props.qntItems - 1
      ? "0 8px 8px 0"
      : 0};
`;

export const Text = styled.Text<{ isActive: boolean }>`
  color: ${(props) => (props.isActive ? "white" : "black")};
  display: flex;
  max-width: 85%;
  font-size: 12px;
  font-weight: bold;
  text-align: center;
`;
