import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/renderTheme';
import Dummy from '.';

describe('<Dummy />', () => {
  it('Should render with default values', () => {
    const { debug } = renderTheme(
      <Dummy>
        <h1>texto</h1>
      </Dummy>,
    );
    debug();
    const dummy = screen.getByRole('heading', { name: 'texto' }).parentElement;
    expect(dummy).toMatchSnapshot();
  });
});
