import TextComponent from '.';

export default {
  title: 'TextComponent',
  component: TextComponent,
  args: {
    children:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur sint praesentium eveniet, officia neque quo ipsam repudiandae possimus eius nihil adipisci omnis odio necessitatibus tempore cupiditate sunt iure ex accusantium.',
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => (
  <div style={{ maxWidth: '865px', padding: '20px' }}>
    <TextComponent {...args} />
  </div>
);
