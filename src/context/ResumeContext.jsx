import { Children, createContext, useState } from "react";

const ResumeContext =createContext()

export const ResumeProvider = ({children}) => {

    
  const [user, setUser] = useState([

  ])

  const addUser = (firstname, lastname, address, city, state, zipcode, mobilenum, email, skillsLevel, aboutYou) => {
    setUser([{ 
        id: crypto.randomUUID(),
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
    }, ...user]);

    
};

    return(

        <ResumeContext.Provider value={{user, addUser}}>
            {children}
        </ResumeContext.Provider>
    )
}



export default ResumeContext