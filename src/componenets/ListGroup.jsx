import React, { useContext } from "react";
import ListItems from "./ListItems";
import ResumeContext from "../context/ResumeContext";

const ListGroup = () => {
  const { user } = useContext(ResumeContext);
  return (
    <div>
      <ul className=" w-full h-auto flex flex-col justify-center items-center px-4">
        {user.map((users) => (
          <ListItems key={users.id} users={users} />
        ))}
      </ul>
    </div>
  );
};

export default ListGroup;
