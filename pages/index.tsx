import { GetStaticProps } from 'next'
import React, { useEffect, useState } from 'react'
import { Button, Htag, Ptag, Rating, Tag } from '../components'
import { withLayout } from '../layout/Layout'
import axios from 'axios'
import { MenuItem } from '../interfaces/menu.interface'

function Home({ menu }: HomeProps): JSX.Element {
  const [counter, setCounter] = useState<number>(0)
  const [rating, setRating] = useState<number>(4)

  useEffect(() => { counter > 5 && counter < 9 ? console.log('Counter:', counter) : null })

  return (
    <>
      <Htag tag='h1'>{counter}</Htag>
      <Button appearance='primary' arrow='right' onClick={() => setCounter(x => x + 1)}>Click</Button>
      <Button appearance='transparent' arrow='right' onClick={() => setCounter(x => x - 1)}>Click</Button>
      <Ptag size='lg'>...Wow!!!</Ptag>
      <Ptag size='md'>...Wow!!!</Ptag>
      <Ptag size='sm'>...Wow!!!</Ptag>
      <Tag size='sm' appearance='transparent' href='apple.com'>Tag 1</Tag>
      <Tag size='sm' appearance='primary'>Tag 2</Tag>
      <Tag size='md' appearance='red' href='apple.com'>Tag 3</Tag>
      <Tag size='md' appearance='green' href='apple.com'>Tag 4</Tag>
      <Tag size='md' appearance='grey' href='apple.com'>Tag 5</Tag>
      <Rating style={{ marginTop: '20px' }} rating={rating} isEditable={true} setRating={setRating} />
      <ul>
        {menu.map(m => (<li key={m._id.secondCategory}>{m._id.secondCategory}</li>))}
      </ul>
    </>
  )
}

export default withLayout(Home)

export const getStaticProps: GetStaticProps = async () => {
  const firstCategory = 0
  const { data: menu } = await axios.post<MenuItem>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
    firstCategory
  })
  return {
    props: {
      menu,
      firstCategory
    }
  }
}

interface HomeProps extends Record<string, unknown> {
  menu: MenuItem[]
  firstCategory: number
}