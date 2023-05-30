// function User(props) {
//     return <h1>{props.name} {props.surName} {props.age} </h1>
// }


function User({ name, surName, age }) {
    return <h1>{name} {surName} {age} </h1>
}

export default User;