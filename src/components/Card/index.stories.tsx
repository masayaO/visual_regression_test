import {ComponentMeta, ComponentStory, storiesOf} from '@storybook/react';
import React from 'react';

import Card from './index';

export default {
  title: 'Card',
  component: Card,
} as ComponentMeta<typeof Card>;

export const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

Template.args = { title: 'Card Title', description: 'Card Description' };