import React, { useState, useEffect } from "react"
import { useRecoilState } from "recoil"
import ListElement from "./List"
import { getRequest } from "../../API/main"
import { RequestState } from '../../store/main'

const AdminContainer: React.FC = () => {
  const [request, setRequest] = useRecoilState(RequestState)
  const [loading, setLoading] = useState(true)
  const [list, setList] = useState<Array<JSX.Element>>()

  useEffect(() => {
    const fetchData = async () => {
      const result = await getRequest()
      if (result.ok) {
        const tmp = (await result.json()).data
        setRequest(tmp)
      }
    }
    fetchData()
    // eslint-disable-next-line
  }, [])

  useEffect(() => {
    console.log(request)
    if (request) {
      const renderList = []
      for (const tmp of request) {
        renderList.push(
          <ListElement data={tmp}/>
        )
      }
      setList(renderList)
      setLoading(false)
    }
  }, [request])

  if (loading) {
    <div />
  }

  return (
    <div>
      <ul>{list}</ul>
    </div>
  )
}

export default AdminContainer