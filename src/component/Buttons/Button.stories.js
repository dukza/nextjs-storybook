import React from 'react';
import {storiesOf} from '@storybook/react';
import { addons } from '@storybook/addons';
import { withDesign } from 'storybook-addon-designs';
// component
import Button from './Button';

storiesOf("Button", module)
    .addDecorator(withDesign)
    .add("primary",()=><Button>Primary</Button>,{
        design: {
            type: 'figma',
            url:
              'https://www.figma.com/file/6ahWdulcdjFOWAiLNofrrr/Espresso-Cafe24?node-id=3%3A86',
        }
    })
    .add("dark",()=>(<Button color="dark">Dark</Button>))
    .add("success",()=>(<Button color="success">Success</Button>))
    .add("warning",()=>(<Button color="warning">Warning</Button>))
    .add("critical",()=>(<Button color="danger">Critical</Button>))
    .add("light",()=>(<Button color="light">Light</Button>))
