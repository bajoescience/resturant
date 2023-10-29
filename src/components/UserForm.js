// Render the form to save user details
const UserForm = () => {

    return (
        <>
          <div>
            Username: <input name="username" placeholder="username" type="text" />
          </div>
          <div>
            Firstname: <input name="firstname" placeholder="firstname" type="text"/>
          </div>
          <div>
            Lastname: <input name="lastname" placeholder="lastname" type="text"/>
          </div>
          <div>
            Address: <input name="address" placeholder="address" type="text"/>
          </div>
          <div>
            Phonenumber: <input name="phonenumber" placeholder="phonenumber" type="phonenumber"/>
          </div>
          <div>
            Email: <input name="email" placeholder="email" type="email"/>
          </div>
        </>
    )
}

export default UserForm