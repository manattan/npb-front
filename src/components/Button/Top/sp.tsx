import React from 'react'
import styled from 'styled-components'
import { sp, pc } from '../../StyledComponent/meta';


const TopButtonContainer = styled.div`
  width: 90%;
  height: 100px;
  background-color: #009e96;
  color: white;
  border-radius: 15px;
  margin: 20px auto 0;
  padding: 10px;
  font-weight: bold;
  font-size: 150%;
  ${pc`
    display: none;
  `}
`

interface Props {
  label: string
}

const TopButtonSP:React.FC<Props> = (props:Props) => {
  return (
    <TopButtonContainer>
      <span style={{fontSize: '30px'}}>{props.label}</span>
      <br />
      <span>から検索する</span>
    </TopButtonContainer>
  )
}

export default TopButtonSP