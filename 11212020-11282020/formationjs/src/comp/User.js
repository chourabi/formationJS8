
function User(props) {
    console.log(props);
    const name = props.name;
    const email = props.email;
    const phone = props.phone != null ? props.phone : "No phone number";
    
  return (
    <div >
      <h1>{ name }</h1>
      <p>{phone}</p>
      <p>{email}</p>
    </div>
  );
}

export default User;
