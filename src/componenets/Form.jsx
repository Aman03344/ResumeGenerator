import React, { useContext, useState } from "react";
import ResumeContext from "../context/ResumeContext";

const Form = () => {
  const { addUser } = useContext(ResumeContext);

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [mobilenum, setMobilenum] = useState("");
  const [email, setEmail] = useState("");
  const [skillsLevel, setSkillsLevel] = useState("");
  const [aboutYou, setAboutYou] = useState("");

  const handleSub = (e) => {
    e.preventDefault();

    addUser(
      firstname,
      lastname,
      address,
      city,
      state,
      zipcode,
      mobilenum,
      email,
      skillsLevel,
      aboutYou
    );

    setFirstname("");
    setLastname("");
    setAddress("");
    setCity("");
    setState("");
    setZipcode("");
    setMobilenum("");
    setEmail("");
    setSkillsLevel("");
    setAboutYou("");
  };

  return (
    <>
      <div className="w-full h-auto flex justify-center items-center py-5">
        <form
          onSubmit={(e) => handleSub(e)}
          className="border border-gray-400 w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%] xl:w-[80%] h-auto p-3"
        >
          <label className="ml-2 py-3">Full name</label>
          <div className="w-full h-auto flex flex-col sm:flex-row gap-3">
            <input
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
              className="border border-gray-400 w-full sm:w-[48%] mx-1  px-2 py-3 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-300 outline-none transition-all"
              type="text"
              placeholder="Enter your Firstname"
              required
            />
            <input
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
              className="border border-gray-400 w-full sm:w-[48%] mx-1 px-2 py-3 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-300 outline-none transition-all"
              type="text"
              placeholder="Enter your Lastname"
              required
            />
          </div>

          <div className="w-full h-auto flex flex-col">
            <label className="my-1 ml-2">Address</label>
            <input
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="border border-gray-400 px-2 py-3 rounded-lg w-full focus:border-blue-500 focus:ring-2 focus:ring-blue-300 outline-none transition-all"
              type="text"
              placeholder="Street Address"
              required
            />
          </div>

          <div className="w-full sm:flex sm:justify-between">
            <input
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="border border-gray-400 w-full sm:w-[48%] my-3 mx-1 px-2 py-3 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-300 outline-none transition-all"
              type="text"
              placeholder="City"
              required
            />
            <input
              value={state}
              onChange={(e) => setState(e.target.value)}
              className="border border-gray-400 w-full sm:w-[48%] my-3 mx-1 px-2 py-3 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-300 outline-none transition-all"
              type="text"
              placeholder="State / Province"
              required
            />
          </div>

          <input
            onChange={(e) => setZipcode(e.target.value)}
            value={zipcode}
            className="block border border-gray-400 w-full px-2 py-3 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-300 outline-none transition-all"
            type="text"
            placeholder="Postal / Zip Code"
            required
          />

          <div className="w-full">
            <h1 className="mt-2 ml-2">Contact</h1>
            <div className="sm:flex sm:justify-between">
              <input
                onChange={(e) => setMobilenum(e.target.value)}
                value={mobilenum}
                className="border border-gray-400 w-full sm:w-[48%] my-2 mx-1 px-2 py-3 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-300 outline-none transition-all"
                type="text"
                placeholder="Enter Mobile number"
                required
              />
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                className="border border-gray-400 w-full sm:w-[48%] my-2 mx-1 px-2 py-3 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-300 outline-none transition-all"
                type="text"
                placeholder="Enter Email"
                required
              />
            </div>
          </div>

          <div className="w-full ml-2 mt-2">
            <h1 className="my-2 ml-1">Skill Level:</h1>
            <select
              required
              onChange={(e) => setSkillsLevel(e.target.value)}
              value={skillsLevel}
              className="border border-gray-400 p-3 rounded-lg w-full sm:w-[48%] focus:border-blue-500 focus:ring-2 focus:ring-blue-300 outline-none transition-all"
            >
              <option value="Select">Select</option>
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
            </select>
          </div>

          <div className="mt-5">
            <h1>Cover Letter:</h1>
            <textarea
              required
              onChange={(e) => setAboutYou(e.target.value)}
              value={aboutYou}
              className="border border-gray-400 w-full rounded-lg h-[200px] p-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-300 outline-none transition-all"
              placeholder="Type here..."
            ></textarea>
          </div>

          <button className="w-full mt-4 bg-green-500 text-white font-bold py-3 rounded-xl hover:bg-green-400 text-xl transition-all ease-in">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Form;
