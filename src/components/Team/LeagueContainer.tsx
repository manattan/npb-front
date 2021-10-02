import React from 'react'
import styled from 'styled-components'
import * as Types from '../../types/main'

interface Props {
  league: Types.league
  list: Array<JSX.Element>
}

const EntireContainer = styled.div`

`

const LeagueContainer:React.FC<Props> = (props: Props) => {
  const {league}
  return (
    <EntireContainer>
      
    </EntireContainer>
  )
}

export default LeagueContainer