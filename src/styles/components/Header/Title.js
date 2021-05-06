import styled from 'styled-components'

const Title = styled.h1`
  font-size: 48px;
  font-weight: 500;
  line-height: 68px;
  color: white;
  margin-bottom: 8px;

  @media (max-width: 768px) {
    font-size: 42px;
    line-height: 44px;
    max-width: 85%
  }
`

export default Title