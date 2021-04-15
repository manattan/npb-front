import React from 'react'
import styled from 'styled-components'
import { sp } from '../../StyledComponent/meta';

const TopButtonContainer = styled.div`
  width: 35vw;
  height: 30vh;
  background-color: #009e96;
  color: white;
  border-radius: 20px;
  margin: 0 auto;
  font-weight: bold;
  position: relative;
  ${sp`
    display: none;
  `}
`

const TextContainer = styled.div`
  margin: auto;
  top: 0;
  bottom: 0;
  left: 0;
  right:0;
  position: absolute;
  width: 25vw;
  max-height: 20vh;
`

interface Props {
  label: string
}

const TopButtonPC:React.FC<Props> = (props:Props) => {
  return (
    <TopButtonContainer>
      <TextContainer>
        <p style={{padding: 'auto'}}>
          <span style={{fontSize: '5vw'}}>{props.label}</span>
          <br />
          <span style={{fontSize: '3vw'}}>から検索する</span>
        </p>
      </TextContainer>
    </TopButtonContainer>
  )
}

export default TopButtonPC