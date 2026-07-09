import React, { useEffect, useState } from "react";
import RequestCard from "../Component/RequestCard";
import { Input } from "@heroui/react";
import { IoSearch } from "react-icons/io5";
import { getDatabase, ref, onValue } from "firebase/database";
import { useSelector } from "react-redux";

function Users() {
  const db = getDatabase();
  let [array, setArray] = useState([]);
  let data = useSelector(state=>state.activeuser.value)


  
  useEffect(() => {
    const starCountRef = ref(db, "userlist/");
    let arr = [];
    onValue(starCountRef, (snapshot) => {
      snapshot.forEach((item) => {
        arr.push(item.val());
      });
        setArray(arr)
    });
  }, []);

  return (
    <>
      <div className="md:w-200 mx-auto w-full">
        <div className=" mb-3 md:mb-8 mt-2 md:mt-5 relative w-full md:w-100">
          <Input
            aria-label="Search"
            placeholder="Search here..."
            className="w-full md:w-100 py-3 rounded-full shadow-[0px_0px_10px_rgba(255,255,255,0.1)] pr-10 bg-surface text-white"
          />

          <IoSearch className="absolute top-1/2 -translate-y-1/2 right-4 text-gray-400 text-xl" />
        </div>

        <div className=" bg-surface  rounded-xl">
          <h5 className="text-2xl font-semibold pl-4 pt-5">User List</h5>
          <div className=" mt-3 md:mt-5 flex flex-col w-full h-[75vh] overflow-y-auto scrollbar-none">
            {array.map((item) => (
              <RequestCard src={item.profilepic} name={item.username} time="Follow me"/>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Users;
