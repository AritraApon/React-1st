export default function User({user}){
    const {name ,email,phone} = user;
    return(
        <div className="card2">
            <h4> Name: {name}</h4>
            <p>Email address:{email}</p>
            <p>Phone Number {phone} </p>
        </div>
    )
}