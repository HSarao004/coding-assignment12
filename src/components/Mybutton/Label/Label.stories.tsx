import React from 'react';
import { Meta, Story } from '@storybook/react';
import Label from './Label';
import { LabelProps } from './Label.types';

export default {
    title: 'Components/Label',
    component: Label,
    argTypes: {
        color: { control: 'color' },
        children: { control: 'text' },
    },
} as Meta;

const Template: Story<LabelProps> = (args) => <Label {...args} />;

export const Default = Template.bind({});
Default.args = {
    children: 'Label Text',
    color: 'black',
};

export const CustomColor = Template.bind({});
CustomColor.args = {
    children: 'Label Text',
    color: 'red',
};
