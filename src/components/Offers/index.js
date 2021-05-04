import React from 'react'
import Container from '../../styles/components/Container'
import Section from '../../styles/components/Section'
import Title from '../../styles/components/Title'
import Header from '../../styles/components/Header'
import Link from '../../styles/components/Offers/Link'
import Grid from '../../styles/components/Offers/Grid'
import Border from '../../styles/components/Offers/Offer/Border'
import Offer from './Offer'
import { BsArrowRight } from 'react-icons/bs'

const offers = [
  {
    title: 'Junior Java Developer',
    company: 'PickSaaS',
    city: 'Wrclaw, Polska',
    hour: '2 hours ago',
    description: 'I am currently looking for a Java Developer. Project for Public Sector Location: Wrocław (during the pandemic remote work) $ up to PLN 550 net / MD B2B',
  },
  {
    title: 'Junior Project Manager',
    company: 'Frontkom',
    city: 'Lublin, Polska',
    hour: '2 hours ago',
    description: 'Join us in the Lublin office to build innovative long-term projects. Exciting international clients and partners and a work environment focused on learning and growth awaits you!',
  },
  {
    title: 'Junior Developer',
    company: 'Frontkom',
    city: 'Lublin, Polksa',
    hour: '2 hours ago',
    description: 'I am currently looking for a Java Developer. Project for Public Sector Location: Wrocław (during the pandemic remote work) $ up to PLN 550 net / MD B2B',
  }
]

export default function Offers() {
  return (
    <Container>
      <Section>
        <Header>
          <Title>Newest Job Offers </Title>
          <Link href='/'>View all job offers <BsArrowRight size={20} /></Link>
        </Header>

        <Grid>
          {offers.map(offer => (<Border><Offer offer={offer} /></Border>))}
        </Grid>
      </Section>
    </Container>
  )
}