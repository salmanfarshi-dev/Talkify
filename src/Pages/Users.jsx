import React, { useEffect, useState } from "react";
import RequestCard from "../Component/RequestCard";
import { Input } from "@heroui/react";
import { IoSearch } from "react-icons/io5";
import { getDatabase, ref, onValue,set } from "firebase/database";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Users() {
  const db = getDatabase();
  let [array, setArray] = useState([]);

  let data = useSelector((state) => state.activeuser.value);
console.log(data);

  let navigate = useNavigate();

  useEffect(() => {
    if (data == null) {
      navigate("/login");
    }
  }, [data, navigate]);

  useEffect(() => {
    if (!data?.email) return;

    const starCountRef = ref(db, "userlist/");
    let arr = [];
    onValue(starCountRef, (snapshot) => {
      snapshot.forEach((item) => {
        if (item.key != data.uid) {
          arr.push({...item.val(), id:item.key});
        }
      });
      setArray(arr);
    });
  }, [data]);


const handleAddFriend=(item)=>{
  set(ref(db, 'friendrequestlist/'), {
    sendername: data.username,
    senderid: data.uid,
    receivername: item.username ,
    receiverid: item.id,
  });
  
}


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
              <RequestCard
                key={item.email}
                src={item.profilepic}
                name={item.username}
                time="Follow me"
                onClick={()=>handleAddFriend(item)}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Users;
