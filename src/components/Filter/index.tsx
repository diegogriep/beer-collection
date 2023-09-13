'use client'

import { FormEvent, useState } from 'react'
import * as S from './styles'
import { useRouter } from 'next/navigation'
import Button from '../Button'

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
  return (
    <S.Wrapper>
      <h4>Filter by name</h4>
      <form onSubmit={onSubmit}>
        <input onChange={onChange} type="text" name="beer_name" placeholder='What beer are you looking for?' />
        <Button type="submit">
          Submit
        </Button>
      </form>
    </S.Wrapper>
  )
}

export default Filter
