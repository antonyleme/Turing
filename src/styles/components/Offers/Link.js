import styled from 'styled-components'

const Link = styled.a`
  font-size: 18px;
  line-height: 24px;
  color: #276FFB;
  font-weight: bold;
  text-decoration: none;
  display: flex;
  align-items: center;

  @media (max-width: 1024px){
    font-size: 16px;
    line-height: 22px;
  }
`

export default Link