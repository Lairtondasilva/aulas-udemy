import { TouchableOpacity, View } from "react-native";
import { CardSelectProps } from "./interfaces";
import * as Styled from "./styles";
import { Children, useState } from "react";
import { getIcon } from "../../utils/iconsUtils";

const CardSelect: React.FC<CardSelectProps> = ({ cardsOptions, onPress }) => {
  const [active, setActive] = useState("");

  const handlePress = (titleion: string) => {
    if (titleion !== active) {
      onPress(titleion);
      setActive(titleion);
    }
  };

  return (
    <Styled.Container>
      {cardsOptions.map(({ title, icon }, idx) => {
        const Icon = getIcon(icon);

        return (
          <TouchableOpacity key={title} onPress={() => handlePress(title)}>
            <Styled.CardContainer
              isActive={active === title}
              qntItems={cardsOptions.length}
              item={idx}
            >
              <Icon color={active === title ? "white" : "black"} />
              <Styled.Text isActive={active === title}>{title}</Styled.Text>
            </Styled.CardContainer>
          </TouchableOpacity>
        );
      })}
    </Styled.Container>
  );
};

export default CardSelect;
