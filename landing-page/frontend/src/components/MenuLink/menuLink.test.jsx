import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/renderTheme';
import MenuLink from '.';

describe('<MenuLink />', () => {
  it('Should render with default values', () => {
    const { debug } = renderTheme(
      <MenuLink link="https://www.google.com.br">texto</MenuLink>,
    );
    debug();
    const menuLink = screen.getByRole('link', {
      name: 'texto',
    });
    expect(menuLink).toBeInTheDocument();
  });

  it('Should render in new tab', () => {
    const { debug } = renderTheme(
      <MenuLink link="https://www.google.com.br" newTab={true}>
        texto
      </MenuLink>,
    );
    debug();
    const menuLink = screen.getByRole('link', {
      name: 'texto',
    });
    expect(menuLink).toHaveAttribute('target', '_blank');
  });

  it('Should render snapshot', () => {
    const { container } = renderTheme(
      <MenuLink link="https://www.google.com.br" newTab={false}>
        texto
      </MenuLink>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
