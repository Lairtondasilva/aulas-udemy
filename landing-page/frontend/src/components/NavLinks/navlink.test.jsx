import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/renderTheme';
import NavLink from '.';
import { links } from './mocks';
import { theme } from '../../styles/theme';
import { toHaveStyleRule } from 'jest-styled-components';

describe('< NavLink />', () => {
  beforeAll(() => {
    expect.extend({ toHaveStyleRule });
  });
  it('Should render with default values', () => {
    renderTheme(<NavLink links={links} />);
    expect(screen.getAllByRole('link')).toHaveLength(links.length);
  });

  it('Should not render links', () => {
    renderTheme(<NavLink />);
    expect(screen.queryAllByText(/Link/i)).toHaveLength(0);
  });

  it('Should match snapshot', () => {
    renderTheme(<NavLink links={links} />);
    expect(screen.getAllByRole('link')).toMatchSnapshot();
  });

  it('Should match media query', () => {
    renderTheme(<NavLink links={links} />);
    expect(screen.getByText(/link 1/i).parentElement).toHaveStyleRule(
      'flex-flow',
      'column wrap',
      {
        media: theme.media.lteMedium,
      },
    );
  });
});
