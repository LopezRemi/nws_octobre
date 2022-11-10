import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'

function Materials() {

    const API_URL = 'http://localhost:3001'

    useEffect( ()=> {

        axios.get(`${API_URL}/materials/getMaterials`).then( (res) => {
            console.log(res)
        })

    }, [])


  return (
    <div>Materials</div>
  )
}

export default Materials