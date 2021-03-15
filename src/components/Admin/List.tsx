import React from 'react'
import styled from 'styled-components'
import * as Types from '../../types/main'

const ListContainer = styled.div`
  border: 2px solid orange;
  width: 80%;
`

interface Props {
  data: Types.RequestDetail
}

const ListElement:React.FC<Props> = (props: Props) => {
  return (
    <ListContainer>
      <p>{props.data.dataid}</p>
    </ListContainer>
  )
}

export default ListElement