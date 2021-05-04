import React from 'react'
import Title from '../../../styles/components/Offers/Offer/Title'
import Text from '../../../styles/components/Offers/Offer/Text'
import Hour from '../../../styles/components/Offers/Offer/Hour'
import Header from '../../../styles/components/Offers/Offer/Header'
import Subheader from '../../../styles/components/Offers/Offer/Subheader'
import Company from '../../../styles/components/Offers/Offer/Company'
import Description from '../../../styles/components/Offers/Offer/Description'
import Wrapper from '../../../styles/components/Offers/Offer/Wrapper'
import Button from '../../../styles/components/Offers/Offer/Button'
import { BiChevronRight } from 'react-icons/bi'


export default function Offer({ offer }) {
  return (
    <Wrapper>
      <Header>
        <Title>{offer.title}</Title>
        <Hour>{offer.hour}</Hour>
      </Header>
      <Subheader>
        <Company>{offer.company}</Company>
        <Text>{offer.city}</Text>
      </Subheader>
      <Description>{offer.description}</Description>
      <Button><BiChevronRight size={30} /></Button>
    </Wrapper>
  )
}