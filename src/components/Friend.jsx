/* eslint-disable react/prop-types */
export default function Friend ({friend}){
    return(
        <li>
            <img src={friend.image} alt={friend.name} />
            <h3>{friend.name}</h3>

        </li>
    )
}