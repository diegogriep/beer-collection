import { Meta, StoryObj } from '@storybook/react'
import Main from '.'

export default {
  title: 'components/Main',
  component: Main,
  parameters: {
    layout: 'fullscreen'
  }
} as Meta

export const Default: StoryObj<typeof Main> = {}

export const Normal: StoryObj<typeof Main> = {
  render: (args) => (
    <Main {...args}>
      <h1>Main story</h1>
    </Main>
  )
}
