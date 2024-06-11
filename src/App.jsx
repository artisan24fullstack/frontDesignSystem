
//import AppUserDropdown from './components/appUserDropdown.jsx'
import { useState } from 'react';
import { usersArray } from './data/userData.js'
import './index.css'
import UserAssignDropdown from './pattern/userDropdownCompound.jsx'
function App() {
  const [assignedList, setAssignedList] = useState([]);

  return (
    <>
      <div className="bg-[#2b2c37] h-[100dvh] text-white p-20 gap-4 items-center ">
        <div className=" grid justify-center items-center ">
          <h1 className="text-3xl font-bold ">
            Design system
          </h1>

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
