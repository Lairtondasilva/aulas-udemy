import P from 'prop-types';
import * as Styled from './styles';

const Dummy = ({ children }) => {
  return (
    <Styled.Container>
      <h1>texto</h1>
    </Styled.Container>
  );
};

Dummy.propTypes = {
  children: P.node.isRequired,
};

export default Dummy;
