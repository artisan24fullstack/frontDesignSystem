import { useRef, useState } from 'react';
import { UserDropdown } from './UserDropdown'
import { usersArray } from "../data/userData.js";
import { FaXmark } from "react-icons/fa6";

function AppUserDropdown() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [assignedList, setAssignedList] = useState([]);
  const dropdownContainerRef = useRef(null);

  return (
    <>
      <div className="grid grid-cols-4" ref={dropdownContainerRef}>
        <UserDropdown
          usersArray={usersArray}
          isDropdownOpen={isDropdownOpen}
          setIsDropdownOpen={setIsDropdownOpen}
          assignedList={assignedList}
          setAssignedList={setAssignedList}
        />
      </div>
      <div className="grid grid-cols-4 gap-4">
        {assignedList.length === 0 ? (
          <p className="mt-4 p-2 shadow-sm bg-[#828fa318] rounded">
            No users assigned to the task yet.
          </p>
        ) : (
          <AssignedList
            assignedList={assignedList}
            setAssignedList={setAssignedList}
          />
        )}
      </div>

    </>
  )
}

function AssignedList({ assignedList, setAssignedList }) {
  function handleRemove(id) {
    setAssignedList((assignedList) =>
      assignedList.filter((user) => user.id !== id)
    );
  }
  return (
    <div className="mt-4 p-2 shadow-sm bg-[#828fa318] rounded">
      <h2 className="px-2 my-3 font-bold">Assigned list:</h2>
      <div className="flex flex-wrap gap-4 ">
        {assignedList?.map((user, index) => (
          <div
            key={user.id}
            className="flex items-center gap-1 w-[47.5%] p-2 hover:bg-[#20212c] rounded transition-all duration-200"
            onClick={() => handleRemove(user.id)}>
            <span>{index + 1}.</span>
            <img
              className="w-6 h-6 "
              src={user.imgUrl}
              alt={`${user.name} image`}
            />

            <span>{user.name}</span>
            <span className="ml-auto cursor-pointer p-1 hover:bg-[#2b2c37] rounded-full">
              <FaXmark />
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AppUserDropdown
