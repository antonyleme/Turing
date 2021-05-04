import React from 'react'
import Container from '../../styles/components/Container'
import Wrapper from '../../styles/components/Header/Wrapper'
import Title from '../../styles/components/Header/Title'
import Subtitle from '../../styles/components/Header/Subtitle'
import Button from '../../styles/components/Button'

export default function Header() {
  return (
    <Wrapper>
      <Container>
        <Title>Juniors make IT Work.</Title>
        <Subtitle>Hire and invest in highly skilled juniors now.</Subtitle>
        <Button>Post Offer Now</Button>
      </Container>
    </Wrapper>
  )
}