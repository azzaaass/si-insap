import React from "react";
import { Link } from "react-router-dom";

const Status = () => {
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-4">List peminjaman</h2>
      <div className="grid grid-cols-1 gap-4 max-w-2xl">
        <Link to="/status/1">
          <div className="flex justify-between w-full border-2 border-primary rounded-md px-4 py-2">
            <p>Jhon doe</p>
            <button className="px-4 py-1 text-sm text-white bg-primary w-fit rounded-lg">In progress</button>
          </div>
        </Link>
        <Link to="/status/2">
          <div className="flex justify-between w-full border-2 border-primary rounded-md px-4 py-2">
            <p>Alex</p>
            <button className="px-4 py-1 text-sm text-white bg-primary w-fit rounded-lg">In progress</button>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default Status;
