
//import AppUserDropdown from './components/appUserDropdown.jsx'
import { useState } from 'react';
import { usersArray } from './data/userData.js'
import './index.css'
import UserAssignDropdown from './pattern/userDropdownCompound.jsx'
import Tabs from './pattern/TabsCompound.jsx';

export const tabsData = [
  { id: 0, title: 'Tab 1', content: 'Tab Panel 1' },
  { id: 1, title: 'Tab 2', content: 'Tab Panel 2' },
  { id: 2, title: 'Tab 3', content: 'Tab Panel 3' }
];


function App() {
  const [assignedList, setAssignedList] = useState([]);

  return (
    <>
      <div className="bg-stone-200 h-[100dvh] text-white p-20 gap-4 items-center ">
        <div className=" grid justify-center items-center ">
          <h1 className="text-3xl font-bold ">
            Design system
          </h1>

        </div>
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
