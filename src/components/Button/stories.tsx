import { Meta, StoryObj } from '@storybook/react'
import Button from '.'

export default {
  title: 'components/Button',
  component: Button,
  args: {
    children: 'Learn more'
  },
  argTypes: {
    children: {
      type: 'string'
    }
  }
} as Meta

export const Default: StoryObj = {  render: (args) => (
  <Button {...args} />
)}

export const asLink: StoryObj = {  render: (args) => (
  <Button {...args} />
)}

asLink.args = {
  children: 'Learn more',
  as: 'a',
  href: '/learn'
}
