import styled from 'styled-components'

const Button = styled.button`
  border: none;
  border-radius: 5px;
  padding: 11px 32px;
  background: transparent linear-gradient(90deg, #266EFD 0%, #3876F1 100%) 0% 0% no-repeat padding-box;
  color: white;
  font-size: 20px;
  cursor: pointer;
  box-shadow: 0px 3px 17px #3876F194;
  transition: 0.3s;

  &:hover {
    opacity: 0.8;
  }

  @media(max-width: 1024px){
    font-size: 16px;
  }
`

export default Button