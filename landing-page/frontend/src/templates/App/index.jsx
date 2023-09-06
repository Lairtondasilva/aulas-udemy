import Heading from '../../components/Heading';
import * as Styled from './styles';

export const shouldForwardProp = (prop) => !prop.startsWith('$');

export default function Home() {
  return (
    <Styled.Wrapper>
      <Heading>Hello World</Heading>
    </Styled.Wrapper>
  );
}
