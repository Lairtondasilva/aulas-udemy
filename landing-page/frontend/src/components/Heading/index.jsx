import * as Styled from './styles';
import P from 'prop-types';

const Heading = ({
  children,
  isLight = true,
  as = 'h1',
  size = 'xHuge',
  uppercase = false,
}) => {
  return (
    <Styled.Title
      islight={String(isLight)}
      as={as}
      size={size}
      uppercase={String(uppercase)}
    >
      {children}
    </Styled.Title>
  );
};

Heading.propTypes = {
  children: P.node.isRequired,
  isLight: P.bool,
  as: P.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
  size: P.oneOf(['small', 'medium', 'large', 'huge', 'xHuge']),
  uppercase: P.bool,
};

export default Heading;
