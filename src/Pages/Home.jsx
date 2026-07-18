import HomeCard from "../Component/HomeCard";
import { FaUserGroup } from "react-icons/fa6";
import { Input } from "@heroui/react";
import { IoSearch } from "react-icons/io5";
import { ImBlocked } from "react-icons/im";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getDatabase, ref, onValue } from "firebase/database";
import { useNavigate } from "react-router-dom";

function Home() {
  let [array, setArray] = useState([]);
  const currentUser = array?.[0];
  const db = getDatabase();
  let data = useSelector((state) => state.activeuser.value);

  let navigate = useNavigate();

  useEffect(() => {
    if (data == null) {
      navigate("/login");
    }
  }, [data, navigate]);

  useEffect(() => {
    if (!data) return;

    const starCountRef = ref(db, "userlist/");

    onValue(starCountRef, (snapshot) => {
      let arr = [];

      snapshot.forEach((item) => {
        if (item.val().email === data.email) {
          arr.push(item.val());
        }
      });

      setArray(arr);
    });
  }, [data]);

  return (
    <section className=" mb-32 md:mb-0  max-w-330">
      <div className="mb-8 mt-5 relative w-full md:w-72">
        <Input
          aria-label="Search"
          placeholder="Search here..."
          className="w-full md:w-72 py-3 rounded-full shadow-[0px_0px_10px_rgba(255,255,255,0.1)] pr-10 bg-surface text-white"
        />

        <IoSearch className="absolute top-1/2 -translate-y-1/2 right-4 text-gray-400 text-xl" />
      </div>

      <div className="mb-8">
        <h1 className="w-full truncate text-xl md:text-2xl font-semibold text-text-primary">
          Welcome back, {currentUser?.username} 👋
        </h1>

        <p className="text-text-secondary text-sm md:text-base">
          Here's what's happening today
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 ">
        <HomeCard
          icon={<FaUserGroup />}
          iconClass="text-blue-600 bg-blue-100"
          tittle="Friends"
          number="128"
          status="Total Friends"
          link="/friends"
        />

        <HomeCard
          icon={<FaUserGroup />}
          iconClass="text-[#12B35B] bg-green-100"
          tittle="Groups"
          number="128"
          status="Total Groups"
          link="/group"
        />

        <HomeCard
          icon={<FaUserGroup />}
          iconClass="text-orange-400 bg-orange-100"
          tittle="Users"
          number="128"
          status="Total Users"
          link="/users"
        />

        <HomeCard
          icon={<FaUserGroup />}
          iconClass="text-blue-600 bg-blue-100"
          tittle="Friend Requests"
          number="128"
          status="New Requests"
          link="/request"
        />

        <HomeCard
          icon={<FaUserGroup />}
          iconClass="text-red-400 bg-red-100"
          tittle="My Groups"
          number="128"
          status="Groups You Manage"
          link="/mygroup"
        />

        <HomeCard
          icon={<ImBlocked />}
          iconClass="text-red-400 bg-red-100"
          tittle="Blocked Users"
          number="128"
          status="Blocked Users"
          link="/block"
        />
      </div>
    </section>
  );
}

export default Home;
