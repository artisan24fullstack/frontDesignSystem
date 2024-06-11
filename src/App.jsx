
//import AppUserDropdown from './components/appUserDropdown.jsx'
import { useState } from 'react';
import { usersArray } from './data/userData.js'
import './index.css'
import UserAssignDropdown from './pattern/userDropdownCompound.jsx'
import Tabs from './pattern/TabsCompound.jsx';
import { Card, ActionButton, Actions, Header, HeaderButton, Image, Name, Role, SocialButton, Socials } from './pattern/CardCompound.jsx';
import { IoLogoInstagram, IoLogoTwitter, IoLogoYoutube, IoLogoLinkedin, IoArrowBack, IoEllipsisVerticalOutline } from "react-icons/io5";
import Rating from './components/Rating.jsx';
import { Toaster } from "react-hot-toast";

export const tabsData = [
  { id: 0, title: 'Tab 1', content: 'Tab Panel 1' },
  { id: 1, title: 'Tab 2', content: 'Tab Panel 2' },
  { id: 2, title: 'Tab 3', content: 'Tab Panel 3' }
];


function App() {
  const [assignedList, setAssignedList] = useState([]);

  return (
    <>
      <div className="bg-stone-200 h-[500dvh] text-white p-20 gap-4 items-center ">

        <div className="grid grid-cols-6">
          <Toaster />
          <Rating />
        </div>
        <br /><hr /><br />

        <div className='flex'>
          <div className="grid grid-cols-3">
            <Card>
              <Header>
                <HeaderButton onClick={() => { }}><IoArrowBack /></HeaderButton>
                <HeaderButton onClick={() => { }}><IoEllipsisVerticalOutline /></HeaderButton>
              </Header>
              <Image src={"https://i.pravatar.cc/300"} alt={"Profile image"} />
              <div className='mt-4 mb-2'>
                <Name>John Doe</Name>
                <Role>UX Specialist</Role>
              </div>
              <Actions>
                <ActionButton type={'primary'} onClick={() => { }}> Message</ActionButton>
                <ActionButton type={'secondary'} onClick={() => { }}> Call</ActionButton>

              </Actions>
            </Card>

          </div>
          <div className="grid grid-cols-3 ">
            <Card>

              <Image src={"https://i.pravatar.cc/300"} alt={"Profile image"} />
              <div className='mt-4 mb-2'>
                <Name>John Doe</Name>
                <Role>UX Specialist</Role>
              </div>
              <Socials>
                <SocialButton><IoLogoInstagram /></SocialButton>
                <SocialButton><IoLogoLinkedin /></SocialButton>
                <SocialButton><IoLogoTwitter /></SocialButton>
                <SocialButton><IoLogoYoutube /></SocialButton>
              </Socials>
            </Card>

          </div>

        </div>
        <br /><hr /><br />
        <div className="grid grid-cols-3">
          <Tabs>
            <div className='flex'>
              {tabsData.map((tabData) => (
                <Tabs.Tab key={tabData.id} index={tabData.id}>
                  {tabData.title}
                </Tabs.Tab>
              ))}
            </div>

            {tabsData.map((tabData) => (
              <Tabs.TabPanel key={tabData.id} index={tabData.id}>
                {tabData.content}
              </Tabs.TabPanel>
            ))}
            {/*
            <div className='flex'>
              <Tabs.Tab index={0}>Tab 1</Tabs.Tab>
              <Tabs.Tab index={1}>Tab 2</Tabs.Tab>
              <Tabs.Tab index={2}>Tab 3</Tabs.Tab>
            </div>

            <Tabs.TabPanel index={0}>Tabpanel 1</Tabs.TabPanel>
            <Tabs.TabPanel index={1}>Tabpanel 2</Tabs.TabPanel>
            <Tabs.TabPanel index={2}>Tabpanel 3</Tabs.TabPanel>
            */}
          </Tabs>

        </div>
        <br /><hr /><br />

        <div className="grid grid-cols-3">
          <UserAssignDropdown
            assignedList={assignedList}
            setAssignedList={setAssignedList}
            users={usersArray}>
            <UserAssignDropdown.Header />
            <UserAssignDropdown.Button />
            <UserAssignDropdown.AssignedList />
          </UserAssignDropdown>
        </div>

      </div >
    </>
  )
}



export default App
