import React from 'react'
import Chart from '../../Charts/Chart'
import FeaturedInfo from '../../FeaturedInfo/FeaturedInfo'
import './Home.css'
import { userData } from '../../../dummyData'
import WidgetSm from '../../widgetSm/WidgetSm'
import WidgetLg from '../../WidgetLg/WidgetLg'

const Home = () => {
  return (
    <div className='home'>
    <FeaturedInfo/>
    <Chart data={userData} title='User Analytics' grid datakey="Active User"/>
    <div className="homeWidgets">
      <WidgetSm/>
      <WidgetLg/>
    </div>
    </div>
  )
}

export default Home