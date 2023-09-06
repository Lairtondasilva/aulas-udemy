import Dummy from '.';

export default {
  title: 'Dummy',
  component: Dummy,
  args: {
    children: 'This is a Dummy',
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => (
  <div>
    <Dummy {...args} />
  </div>
);
