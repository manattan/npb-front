import React from 'react'
import * as Types from '../../types/main'
import { Tr, Td, Button } from '@chakra-ui/react'

interface Props {
  data: Types.RequestDetail
}

const ListElement:React.FC<Props> = (props: Props) => {
  return (
      <Tr>
        <Td><p>データID: {props.data.dataid}<br/> ユーザーID: {props.data.uid}</p></Td>
        <Td>{props.data.prevent}</Td>
        <Td>{props.data.new}</Td>
        <Td>
          <section style={{textAlign: 'center'}}>
            <div style={{margin: '5px 0'}}>
              <Button colorScheme="orange" borderColor="orange.700">マージ</Button>
            </div>
            <div style={{margin: '5px 0'}}>
              <Button>却下</Button>
            </div>
          </section>
        </Td>
      </Tr>
  )
}

export default ListElement