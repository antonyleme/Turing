import styled from 'styled-components'

const Container = styled.div`
  padding-left: 140px;
  padding-right: 140px;

  @media (max-width: 1440px) {
    padding-left: 70px;
    padding-right: 70px;
  }

  @media (max-width: 1024px) {
    padding-left: 20px;
    padding-right: 20px;
  }
`

export default Container