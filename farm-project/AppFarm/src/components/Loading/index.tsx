import { ActivityIndicator } from "react-native";
import * as Styled from "./styles";

const Loading = () => (
  <Styled.Container>
    <ActivityIndicator size="large" color="#000000" />
  </Styled.Container>
);

export default Loading;
