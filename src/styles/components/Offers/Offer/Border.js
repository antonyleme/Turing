import styled from 'styled-components'

const Border = styled.div`
  position: relative;

  @media(min-width: 1025px){
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: center;

    :nth-child(1) {
      padding-right: 41px;
      border-right: 1px solid #AAAAAA;
    }

    :nth-child(2) {
      margin-left: 41px;
    }

    :nth-child(3) {
      margin-left: 41px;
      padding-left: 41px;
      border-left: 1px solid #AAAAAA;
    }
  }
`

export default Border