import { useContext } from "react"
function UserProfile({userData}){
    return (
        
        <useContext.Provider>
            <div>
                <h2>{userData.name}</h2>
                <p>Age: {userData.age}</p>
                <p>Bio: {userData.bio}</p>
            </div>
        </useContext.Provider>
    )
}
export default UserProfile