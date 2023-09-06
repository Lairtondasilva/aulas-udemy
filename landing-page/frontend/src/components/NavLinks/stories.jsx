import NavLink from '.';
import { links } from './mocks';

export default {
  title: 'NavLink',
  component: NavLink,
  args: {
    links: links,
  },
};

export const Template = (args) => (
  <div>
    <NavLink {...args} />
  </div>
);
