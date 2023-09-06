import Heading from '.';

export default {
  title: 'Heading',
  component: Heading,
  args: {
    children: 'This is a heading',
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Light = (args) => <Heading {...args} />;
export const Dark = (args) => <Heading {...args} />;

Light.args = {
  children: 'O texto está escuro',
  isLight: true,
};

Light.parameters = {
  backgrounds: {
    default: 'light',
  },
};

Dark.args = {
  children: 'O texto está claro',
  isLight: false,
};

Dark.parameters = {
  backgrounds: {
    default: 'dark',
  },
};
