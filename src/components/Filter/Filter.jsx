import React from 'react'

export const Filter = ({changeFilter}) => {
  return (
    <input onChange={changeFilter} type='text' name='filter'/>
  )
}

