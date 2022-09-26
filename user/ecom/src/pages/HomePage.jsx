import React, { Component, Fragment } from 'react'
import FeaturedProducts from '../components/home/FeaturedProducts';
import HomeTop from '../components/home/HomeTop'
import Collection from '../components/home/Collection';
import Categories from '../components/home/Categories';
import NewArrival from '../components/home/NewArrival';


export class HomePage extends Component {
  render() {
    return (
      <Fragment>
        <HomeTop />
        <FeaturedProducts/>
        <NewArrival />
        <Collection />
        <Categories />
      </Fragment>
    )
  }
}

export default HomePage;