import styled, { css } from 'styled-components';
import { theme } from '../../styles/theme';

const titleSize = {
  small: (theme) => css`
    font-size: ${theme.fonts.sizes.medium};
  `,
  medium: (theme) => css`
    font-size: ${theme.fonts.sizes.large};
  `,
  large: (theme) => css`
    font-size: ${theme.fonts.sizes.xLarge};
  `,
  huge: (theme) => css`
    font-size: ${theme.fonts.sizes.huge};
    ${mediaFont(theme)}
  `,
  xHuge: (theme) => css`
    font-size: ${theme.fonts.sizes.xhuge};
  `,
};

const mediaFont = (theme) => css`
  @media ${theme.media.lteMedium} {
    font-size: ${theme.fonts.sizes.large};
    background-color: red;
  }
`;

const titleCase = (upperCase) => css`
  text-transform: ${upperCase === 'true' ? 'upperCase' : 'none'};
`;

export const Title = styled.h1`
  ${({ theme, islight, size, uppercase }) => css`
    color: ${islight === 'true' ? theme.colors.primary : theme.colors.white};
    ${titleSize[size](theme)};
    ${titleCase(uppercase)}
  `}
`;
