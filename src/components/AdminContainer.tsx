import React, { useState, useEffect } from "react"
import { getRequest } from "../API/main"
import * as types from "../types/main"

const AdminContainer = () => {
  const [req, setReq] = useState<JSX.Element[]>()

  useEffect(() => {
    const fetchData = async () => {
      const result = await getRequest()
      if (result.ok) {
        const ok = (await result.json()).data
        const renderList = []
        for (const tmp of ok) {
          renderList.push(
            <li>{tmp}</li>
          )
        }
        console.log(renderList)
        setReq(renderList)
        console.log(req)
      }
    }
    fetchData()
    // eslint-disable-next-line
  }, [])

  return (
    <div />
  )
}

export default AdminContainer