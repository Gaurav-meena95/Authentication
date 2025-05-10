import Link from "next/link";
import React, { use } from "react";
import { useAuth } from "../../../../library/context";

const Logout = () => {
  const { user, handelLogout } = useAuth();
  return (
    <div>
      {!user && (
        <Link href={"/componets/login"}>
          <button className="bg-purple-500 p-1 px-5 rounded-lg border-none hover:bg-purple-700 transition hover:cursor-pointer ">
            Login
          </button>
        </Link>
      )}
      {user && (
        <Link href={"/componets/login"}>
          <button onClick={handelLogout} className="bg-purple-500 p-1 px-5 rounded-lg border-none hover:bg-purple-700 transition hover:cursor-pointer ">
            Logout
          </button>
        </Link>
      )}
    </div>
  );
};

export default Logout;
