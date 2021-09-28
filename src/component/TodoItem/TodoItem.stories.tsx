import React from 'react';
// import fetch from 'node-fetch';
import TodoItem  from './TodoItem';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  component: TodoItem,
  title: 'Loader',
}as ComponentMeta<typeof TodoItem>;
const Template: ComponentStory<typeof TodoItem> = (args, { loaded: { todo } }) => <TodoItem {...args} {...todo} />;

export const Primary = Template.bind({});
Primary.args = { 
    text: 'text', 
  };
Primary.loaders = [
  async () => ({
    todo: (await fetch('https://jsonplaceholder.typicode.com/todos/1')).json(),
  }),
];