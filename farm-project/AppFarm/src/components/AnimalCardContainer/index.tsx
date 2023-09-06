import AnimalCard from "../AnimalCard";
import { AnimalCardContainerProps } from "./interfaces";
import * as Styled from "./styles";

const AnimalCardContainer = ({
  AnimalCardInfoList,
}: AnimalCardContainerProps) => {
  return (
    <Styled.Container>
      {AnimalCardInfoList &&
        AnimalCardInfoList.map(({ iconUrl, name, pageUrl, id }) => (
          <AnimalCard
            key={id}
            id={id}
            iconUrl={iconUrl}
            name={name}
            pageUrl={pageUrl || "Animals"}
          />
        ))}
    </Styled.Container>
  );
};

export default AnimalCardContainer;
