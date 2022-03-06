import { BarChartSharp, ChatBubbleOutlined, DynamicFeedOutlined, LineStyleOutlined, MailOutlined, Money, PermIdentityOutlined, Report, ReportOutlined, StorefrontOutlined, TimelineOutlined, TrendingUpOutlined, WorkOutlined } from '@material-ui/icons'
import React from 'react'
import './Sidebar.css'

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem active">
               <LineStyleOutlined className='sidebarIcon'/>
                Home 
            </li>
            <li className="sidebarListItem">
               <TimelineOutlined className='sidebarIcon'/>
                Analytics
            </li>
            <li className="sidebarListItem">
               <TrendingUpOutlined className='sidebarIcon'/>
                Sales
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
               <PermIdentityOutlined className='sidebarIcon'/>
                Users 
            </li>
            <li className="sidebarListItem">
               <StorefrontOutlined className='sidebarIcon'/>
                Products
            </li>
            <li className="sidebarListItem">
               <Money className='sidebarIcon'/>
                Transactions
            </li>
            <li className="sidebarListItem">
               <BarChartSharp className='sidebarIcon'/>
                Reports
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Notifications</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
               <MailOutlined className='sidebarIcon'/>
                Mail 
            </li>
            <li className="sidebarListItem">
               <DynamicFeedOutlined className='sidebarIcon'/>
                Feedback
            </li>
            <li className="sidebarListItem">
               <ChatBubbleOutlined className='sidebarIcon'/>
                Messages
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Staff</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
               <WorkOutlined className='sidebarIcon'/>
                Manage 
            </li>
            <li className="sidebarListItem">
               <TimelineOutlined className='sidebarIcon'/>
                Analytics
            </li>
            <li className="sidebarListItem">
               <Report className='sidebarIcon'/>
                Reports
            </li>
          </ul>
        </div>

      </div>
    </div> 
  )
}

export default Sidebar