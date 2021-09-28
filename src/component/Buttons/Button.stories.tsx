import React from 'react';
import { withDesign } from 'storybook-addon-designs';
import Button from './Button';

import { ComponentStory, ComponentMeta } from '@storybook/react';
// 구성 요소를 설명하는 기본 내보내기
export default {
    //필수, 프로젝트에 표시되는 텍스트
    title:'Button',
    component: Button,
    parameters: {
      backgrounds: {
        values: [
          { name: 'red', value: '#f00' },
          { name: 'green', value: '#0f0' },
          { name: 'blue', value: '#00f' },
        ],
      },
    },
    //Creates specific argTypes
    argTypes: {
        backgroundColor: { control: 'color' }
    },
    decorators: [
      (Story) => (
        <div style={{ margin: '3em' }}>
          <Story/>
        </div>
      ),withDesign
    ],
} as ComponentMeta<typeof Button>;
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;
// 스토리를 설명하는 명명된 내보내기 
export const Primary = Template.bind({});
Primary.args = { 
  style: 'primary', 
  label: 'Primary'
};
// Primary.storyName = 'I am the primary';
//  Template.bind({}) 코드의 중복을 줄이는 복사본
export const Success = Template.bind({});
Success.args = { style: 'success', label: 'Success' };
//  ...Primary.args로 코드를 줄일수 있음
//Secondary.args = { ...Primary.args, label: '😄👍😍💯' };



Primary.parameters = {
    design:{
        type: 'figma',
        url:
          'https://www.figma.com/file/6ahWdulcdjFOWAiLNofrrr/Espresso-Cafe24?node-id=3%3A86'
      }
}
