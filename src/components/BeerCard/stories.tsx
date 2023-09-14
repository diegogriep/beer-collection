import { Meta, StoryObj } from '@storybook/react'
import BeerCard, { BeerProps } from '.'

import beer from './mock'

export default {
  title: 'components/BeerCard',
  component: BeerCard,
  args: { ...beer[0] }
} as Meta

export const Default: StoryObj<BeerProps> = {
  render: (args) => (
    <BeerCard {...args} />
  )
}
