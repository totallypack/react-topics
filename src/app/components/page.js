import React from 'react'
import SayHello from '@/components/SayHello'

export default function Components() {

  const array = [
    {
      name: "Chris",
      greeting: "How are you?",
    },
    {
      name: "Coby",
    },
  ]

  return (
    <div>
      {
        // eslint-disable-next-line react/no-array-index-key
        array.map((item, i) => <SayHello key={i} name={item.name} greeting={item.greeting}/>)
      }
    </div>
  )
}
