import { use } from "react";
import User from "./user";

export default function Users({fetchUser}){

    const users = use(fetchUser);
    // console.log(users)


    return(
        <div className="card">
            <h1>
                User:{users.length}

            </h1>
            {
                    users.map(user => <User key={user.id} user={user}></User>)
                }
        </div>
    )

}


