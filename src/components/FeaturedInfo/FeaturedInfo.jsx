import React from 'react'
import './FeaturedInfo.css'
import {ArrowDownward, ArrowUpward} from "@material-ui/icons"

const FeaturedInfo = () => {
  return (
    <div className='featured'>
        <div className="featuredItem">
            <span className="featureTitle">Revenue</span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">Ksh 2,415</span>
                <span className="featuredMoneyRate">- 11.4 <ArrowDownward className='featuredIcon'/></span> 
            </div>
            <span className='featuredSub'>Compared to last Month</span>
        </div>
        <div className="featuredItem">
            <span className="featureTitle">Expenditure</span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">Ksh 2,415</span>
                <span className="featuredMoneyRate">- 11.4 <ArrowDownward className='featuredIcon'/></span> 
            </div>
            <span  className='featuredSub'>Compared to last Month</span>
        </div>
        <div className="featuredItem">
            <span className="featureTitle">New Users</span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">Ksh 4,415</span>
                <span className="featuredMoneyRate">+ 2.4 <ArrowUpward className='featuredIconpositive'/></span> 
            </div>
            <span className='featuredSub' >Compared to last Month</span>
        </div>
    </div>
  )
}

export default FeaturedInfo