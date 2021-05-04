import styled from 'styled-components'

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 36px;

  @media (max-width: 1024px) {
    flex-direction: column;
  }
`

export default Header