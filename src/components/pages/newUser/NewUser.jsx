import "./Newuser.css"


export default function NewUser() {
  return (
      <div className="newUSer">
          <h2 className="newUserTitle">New User</h2>
          <form action="" className="newUserForm">
              <div className="newUserItem">
                  <label>Username</label>
                  <input type="text" placeholder="John" />
              </div>
              <div className="newUserItem">
                  <label>Full Name</label>
                  <input type="text" placeholder="John Smith" />
              </div>
              <div className="newUserItem">
                  <label>Email</label>
                  <input type="email" placeholder="JohnSmith@gmail.com" />
              </div>
              <div className="newUserItem">
                  <label>Password</label>
                  <input type="password"/>
              </div>
              <div className="newUserItem">
                  <label>Confirm Password</label>
                  <input type="password"/>
              </div>
              <div className="newUserItem">
                  <label>Phone</label>
                  <input type="text" placeholder="0734345342" />
              </div>
              <div className="newUserItem">
                  <label>Address</label>
                  <input type="text" placeholder="Nakuru" />
              </div>
              <div className="newUserItem">
                  <label>Gender</label>
                  <div className="newUserGender">
                  <input type="radio" name="gender" id="male" value="male" />
                  <label for="male">Male</label>
                  <input type="radio" name="gender" id="female" value="female" />
                  <label for="female">Female</label>
                  <input type="radio" name="gender" id="others" value="others" />
                  <label for="others">Other</label>
                  </div>
              </div>
              <div className="newUserItem">
              <label>Active</label>
              <select className="newUserSelect" name="active" id="active">
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
              </select>
              </div>
              <button className="newUserButton">Create</button>
          </form>
      </div>
  )
}


