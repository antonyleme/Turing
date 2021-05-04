import styled from 'styled-components'
import Background from '../../../assets/header.png'

const Wrapper = styled.header`
  height: 540px;
  width: 100%;
  display: flex;
  align-items: center;
  background-image: url(${Background});
  background-size: cover;
  background-position: top;

  @media(max-width: 1024px){
    background-position: left;
  }
`

export default Wrapper