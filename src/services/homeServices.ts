import axios from "axios";

export const HomeAPI = {
    getUser : async () =>{
        const resonse = await axios.get(
            "https://jsonplaceholder.typicode.com/users"
        );
        return resonse;
    },
};

// getUser : async (address:string) =>{
//     const resonse = await axios.get(
//         "https://betrasua.onrender.com/api/v1/user?address=${}"
//     );
//     return resonse;
// },