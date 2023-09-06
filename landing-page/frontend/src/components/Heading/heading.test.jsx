import { screen } from '@testing-library/react';
import Heading from '.';
import { renderTheme } from '../../styles/renderTheme';

describe('<Heading />', () => {
  it('Should render with default values', () => {
    const { debug } = renderTheme(<Heading> texto </Heading>);
    debug();
    const heading = screen.getByRole('heading', { name: 'texto' });
    expect(heading).toMatchSnapshot();
  });
});
