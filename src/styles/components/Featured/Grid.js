import styled from 'styled-components'

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(9, 1fr);
  grid-gap: 76px;
  grid-row-gap: 38px;
  margin-bottom: 100px;

  @media (max-width: 1600px) {
    grid-template-columns: repeat(6, 1fr);
  }

  @media (max-width: 1440px) {
    grid-template-columns: repeat(5, 1fr);
  }

  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 375px) {
    grid-template-columns: 1fr;
  }
`

export default Grid