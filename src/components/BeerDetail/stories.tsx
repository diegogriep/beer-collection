import { Meta, StoryObj } from '@storybook/react'
import BeerDetail from '.'

import beer from '../BeerCard/mock'
import { BeerProps } from '../BeerCard'

export default {
  title: 'components/BeerDetail',
  component: BeerDetail,
  args: { ...beer[0] }
} as Meta

export const Default: StoryObj<BeerProps> = {
  render: (args) => (
    <BeerDetail {...args} />
  )
}
