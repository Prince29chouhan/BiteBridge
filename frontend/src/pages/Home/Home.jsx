import React, { useState } from 'react'
import Header from '../../components/Header/Header'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'
import AppDownload from '../../components/AppDownload/AppDownload'
import Canteens from '../../components/Canteens/canteens'

const Home = () => {

  const [category,setCategory] = useState("All")

  return (
    <>
      <Header/>
      {/* <ExploreMenu setCategory={setCategory} category={category}/> */}
      <Canteens setCategory={setCategory} category={category}/>
      <FoodDisplay category={category}/>
      <AppDownload/>
    </>
  )
}

export default Home
