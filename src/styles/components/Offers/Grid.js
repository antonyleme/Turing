import styled from 'styled-components'

const Wrapper = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 1fr 1fr;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    grid-column-gap: 41px;
  }
`

export default Wrapper