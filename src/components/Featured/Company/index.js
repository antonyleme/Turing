import React from 'react'
import Icon from '../../../styles/components/Featured/Company/Icon'
import Title from '../../../styles/components/Featured/Company/Title'
import { RiSuitcaseLine } from 'react-icons/ri'
import Wrapper from '../../../styles/components/Featured/Company/Wrapper'

export default function Company({ name }) {
  return (
    <Wrapper>
      <Icon><RiSuitcaseLine color='rgba(20, 20, 20,.6)' size={30} /></Icon>
      <Title>{name}</Title>
    </Wrapper>
  )
}