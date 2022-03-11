import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

const SearchResult = () => {
    const [bestBrand, setBestBrand] = useState()
    const [bestCount, setBestCount] = useState(0)
    useEffect(()=>{
        fetch("http://localhost:5001/database")
        .then((res)=>(res.json()))
        .then(data => {
            var bestNum= 0
            for(var i=0; i < data.length; i++){
                if(bestNum<data[i].count){
                    bestNum = data[i].count
                    setBestCount(bestNum)
                    setBestBrand(data[i].name)
                }
                
            }
            }
        )
        
    },[])
  return (
    <div>
        <p>가장 많이 선택된 브랜드</p>
                <p>{bestBrand}</p>
        <p>조회수: {bestCount}</p>
    </div>
  )
}

export default SearchResult