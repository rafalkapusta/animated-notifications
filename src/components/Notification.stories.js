import React from 'react'
import { Notification } from './Notification'

export default {
    title: 'Components/Notification',
    component: Notification,
    argTypes: {
        title: { control: 'text', defaultValue: 'Title' },
        content: {
            control: 'text',
            defaultValue:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed sollicitudin orci. Morbi euismod euismod augue. Nam nibh tellus, interdum at eleifend ut, porta non sem. ',
        },
    },
}

const Template = (args) => (
    <div
        style={{
            position: 'relative',
            width: '100%',
            height: '100vh',
            overflow: 'hidden',
        }}
    >
        <Notification {...args} />
    </div>
)

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
