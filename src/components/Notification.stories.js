import React from 'react'
import { Notification } from './Notification'

export default {
    title: 'Components/Notification',
    component: Notification,
    argTypes: {
        title: { control: 'text', defaultValue: 'Title' },
        content: { control: 'text', defaultValue: 'Content' },
    },
}

const Template = (args) => <Notification {...args} />

export const Primary = Template.bind({})
Primary.args = {
    type: 'primary',
}

export const Secondary = Template.bind({})

export const Error = Template.bind({})
Error.args = {
    type: 'error',
}

export const Warning = Template.bind({})
Warning.args = {
    type: 'warning',
}

export const Success = Template.bind({})
Success.args = {
    type: 'success',
}
