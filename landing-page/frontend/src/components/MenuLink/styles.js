import styled, { css } from 'styled-components';

export const Container = styled.a`
  ${({ theme }) => css`
    font-size: ${theme.fonts.sizes.small};
    display: block;
    text-decoration: none;
    padding: ${theme.spacings.medium};
    color: ${theme.colors.primary};
    position: relative;

    &::after {
      //& se refere a proprio componente parecido com this em uma classe.
      content: '';
      position: absolute;
      bottom: 0.76rem;
      left: 50%;
      width: 0;
      height: 0.2rem;
      background: ${theme.colors.secondary};
      transition: all 300ms ease-in-out;
    }

    &:hover::after {
      left: 25%;
      width: 50%;
    }
  `}
`;
