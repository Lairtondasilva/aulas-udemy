import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/renderTheme';
import TextComponent from '.';

describe('< TextComponent />', () => {
  it('Should render a text', () => {
    renderTheme(<TextComponent>Hello World</TextComponent>);
    expect(screen.getByText('Hello World')).toBeInTheDocument();
  });

  it('Should render a text', () => {
    const { container } = renderTheme(
      <TextComponent>Hello World</TextComponent>,
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
