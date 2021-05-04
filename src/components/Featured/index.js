import React from 'react'
import Title from '../../styles/components/Title'
import Container from '../../styles/components/Container'
import Section from '../../styles/components/Section'
import Grid from '../../styles/components/Featured/Grid'
import Company from './Company'
import Header from '../../styles/components/Header'

const companys = ['GrandParade', 'Seargin', 'DEX Ventures', 'NBC', 'SVT SP Zoo', 'DG Tech', 'PickSaaS', 'BlackRose', 'FrontKom']

export default function Featured() {
  return (
    <Container>
      <Section>
        <Header>
          <Title>Featured Companies</Title>
        </Header>
        <Grid>
          {companys.map(company => <Company name={company} />)}
        </Grid>
      </Section>
    </Container>
  )
}