// import { createContext, useContext,useEffect, useState } from "react";

// export const UserDetails = createContext()

// export const DataProvider = ({children}) =>{
//     const [details, setDetails] = useState(() => {
//         const saved = localStorage.getItem("userDetails")
//         return saved ? JSON.parse(saved) :   [{
//             name:"Hema",
//             lname:"r",
//             email:"h@gmail.com",
//             number:1223456789,
//             photo:"s.jpg",
//         }
//     ]
//     })

//     useEffect(() => {
//         localStorage.setItem("userDetails", JSON.stringify(details));

//     },[details])
        
      
//     return(
//         <UserDetails.Provider value ={{details,setDetails}}>
//             {children}
//         </UserDetails.Provider>
//     )
// }