import React, {useEffect, useState} from "react";
import {Heading} from '@chakra-ui/react'
import {Li} from '../StyledComponent/index'
import {getTeam}  from '../../lib/main'
import * as types from '../../types/main'

type Props = {
  location: {
    state: {
      results: {
        data: types.Data[];
      };
      number: number;
    };
  };
}

const ResultsNumber: React.FC<Props> = (props:Props) => {
  const [data, setData] = useState<JSX.Element[] | string>('少々お待ちください...')
  useEffect(() => {
    const result = [];
    for (const tmp of props.location.state.results.data) {
      result.push(
        <Li key={tmp.id}>
          <p>{getTeam(tmp.teamname)}</p>
          <p>背番号: {tmp.num}</p>
          <p>{tmp.history}</p>
        </Li>
      );
    }

    setData(result);
  }, [props]);
  return (
    <>
      <div style={{margin: '40px auto', textAlign: 'center'}}>
        <Heading size="md">検索結果</Heading>
      </div>
      <ul>{data}</ul>
    </>
  );
};

export default ResultsNumber;
