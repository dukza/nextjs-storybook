import React from 'react';
import Button from './Button';
import { config, withDesign } from 'storybook-addon-designs'



export default {
    //필수, 프로젝트에 표시되는 텍스트
    title:'Button',
    // 권장
    component:Button,
    decorators: [withDesign],
}

// 메뉴항목생성
export const Primary = () => (
    <Button>Primary</Button>
)
export const Dark = () => (
    <Button color="dark">Dark</Button>
)
export const Success = () => (
    <Button color="success">Success</Button>
)
export const Warning = () => (
    <Button color="warning">Warning</Button>
)
export const Critical = () => (
    <Button color="danger">Danger</Button>
)
export const Light = () => (
    <Button color="light">Light</Button>
)

Primary.parameters = {
    design: config([
      {
        type: 'figma',
        name: 'Tab1',
        url:
          'https://www.figma.com/proto/6ahWdulcdjFOWAiLNofrrr/Espresso%2FCafe24?node-id=3%3A86&scaling=min-zoom&page-id=0%3A1',
      },
      {
        type: 'figma',
        name: 'Tab2',
        url:
          'https://www.figma.com/file/Klm6pxIZSaJFiOMX5FpTul9F/storybook-addon-designs-sample?node-id=2%3A5',
      },
    ]),
  }