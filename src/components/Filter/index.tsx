'use client'

import { FormEvent, useState } from 'react'
import * as S from './styles'
import { usePathname, useRouter } from 'next/navigation'
import Button from '../Button'
import Link from 'next/link'

const Filter = () => {
  const [value, setValue] = useState('')
  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setValue(e.currentTarget.value)
  }

  const { push } = useRouter()

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    push(`/?beer_name=${value}`)
  }

  return usePathname() !== '/add' && (
    <S.Wrapper>
      <Link href={'/add'} title='add new bottle'>add new bottle</Link>
      <form onSubmit={onSubmit}>
        <label htmlFor='beer_name'>Filter by name</label>
        <input id='beer_name' onChange={onChange} type="text" name="beer_name" placeholder='What beer are you looking for?' />
        <Button type="submit">
          Search
        </Button>
      </form>
    </S.Wrapper>
  )
}

export default Filter
