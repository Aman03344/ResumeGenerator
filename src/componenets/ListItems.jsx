import React from "react";

const ListItems = ({ users }) => {
  return (
    <div className="w-full sm:w-[90%] md:w-[70%] lg:w-[60%] xl:w-[50%] h-auto border border-gray-300 p-6 bg-white shadow-lg font-sans mx-auto my-4">
      <div className="text-center border-b pb-4 mb-4">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">{users.firstname} {users.lastname}</h1>
        <p className="text-gray-700 text-base sm:text-lg mt-1">{users.address}, {users.city}, {users.state} - {users.zipcode}</p>
      </div>
      
      <div className="mb-6">
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 border-b pb-2">Contact Information</h2>
        <p className="text-gray-700 text-base sm:text-lg mt-2"><i className="ri-phone-line"></i> {users.mobilenum}</p>
        <p className="text-gray-700 text-base sm:text-lg"><i className="ri-mail-line"></i> {users.email}</p>
      </div>
      
      <div className="mb-6">
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 border-b pb-2">Skills & Experience</h2>
        <p className="text-gray-700 text-base sm:text-lg mt-2">Skill Level: {users.skillsLevel}</p>
      </div>
      
      <div className="mb-6">
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 border-b pb-2">Cover Letter</h2>
        <p className="text-gray-700 text-base sm:text-lg mt-2 italic">{users.aboutYou}</p>
      </div>
    </div>
  );
};

export default ListItems;
