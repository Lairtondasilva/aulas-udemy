import { TouchableOpacity } from "react-native";
import * as Styled from "./styles";
import { Plus } from "phosphor-react-native";
import { useContext } from "react";
import NavigationProvider from "../../context/NavigationProvider";

const AddButton = ({ redirect }) => {
  const navigation = useContext(NavigationProvider);
  return (
    <TouchableOpacity
      activeOpacity={0.95}
      onPress={() => {
        navigation.navigate(redirect);
      }}
    >
      <Styled.Container>
        <Plus size={32} weight="bold" color="white" />
      </Styled.Container>
    </TouchableOpacity>
  );
};

export default AddButton;
