export default function UserCard({userName, userAge, userDescription}){
    return(
        <div className="userCard">
            <div className="userInfo">
                <p>Name</p>
                <p>{userName}</p>
            </div>
            <div className="userInfo">
                <p>Age</p>
                <p>{userAge}</p>
            </div>
            <div className="userInfo">
                <p>Description</p>
                <p>{userDescription}</p>
            </div>
        </div>
    )
}