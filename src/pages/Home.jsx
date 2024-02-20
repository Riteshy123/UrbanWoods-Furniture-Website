import React from 'react'
import HeaderNavbar from '../components/HeaderNavbar'
import Hero from '../components/Hero'
import Products from '../components/Products'
import Choice from '../components/Choice'
import BannerPage from '../components/BannerPage'
import NewItems from '../components/NewItems'
import Lightfooter from '../components/Lightfooter';


function Home() {
  return (
    <>
    <HeaderNavbar />
    <BannerPage />
    <Hero />
    <NewItems />
    <Choice />
    <Products />
    <Lightfooter />
    </>
    

  )
}

export default Home;