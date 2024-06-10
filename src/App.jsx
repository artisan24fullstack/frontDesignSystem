import { useState } from 'react';
import { UserDropdown } from './components/UserDropdown'
import { usersArray } from "./data/userData.js";

import './index.css'
function App() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <>
      <div className="bg-[#2b2c37] h-[100dvh] text-white p-20 gap-4 ">
        <div className=" grid justify-center items-center ">
          <h1 className="text-3xl font-bold ">
            Design system
          </h1>

        </div>

        <div className="grid grid-cols-2 gap-4">
          <UserDropdown
            usersArray={usersArray}
            isDropdownOpen={isDropdownOpen}
            setIsDropdownOpen={setIsDropdownOpen}
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
        </div>

      </div>

    </>
  )
}

export default App
