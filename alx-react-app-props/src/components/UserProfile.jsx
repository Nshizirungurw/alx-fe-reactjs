import UserContext from "./UserContext"
import {useContext} from 'react-dom'
function UserProfile({userData}){
    return (
        
        <UserContext.Provider>
            <div>
                <h2>{userData.name}</h2>
                <p>Age: {userData.age}</p>
                <p>Bio: {userData.bio}</p>
            </div>
        </UserContext.Provider>
    )
}
export default UserProfile