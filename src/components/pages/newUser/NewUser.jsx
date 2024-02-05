import "./newUser.scss";

export default function NewUser() {
  return (
    <div className="newUser">
      <h1 className="newUserTitle">New User</h1>
      <form action="submit" className="newUserForm">
        <div>
          <div className="newUserItem">
            <label>User Name</label>
            <input
              type="text"
              placeholder="anhtt751"
              className="newUserInput"
            />
          </div>
          <div className="newUserItem">
            <label>Full Name</label>
            <input
              type="text"
              placeholder="Anh Tran"
              className="newUserInput"
            />
          </div>
          <div className="newUserItem">
            <label>Email</label>
            <input
              type="text"
              placeholder="abc@gmail.com"
              className="newUserInput"
            />
          </div>
          <div className="newUserItem">
            <label>Password</label>
            <input
              type="text"
              placeholder="password"
              className="newUserInput"
            />
          </div>
          <div className="newUserItem">
            <label>Phone Number</label>
            <input
              type="text"
              placeholder="0123456789"
              className="newUserInput"
            />
          </div>
          <div className="newUserItem">
            <label>Address</label>
            <input
              type="text"
              placeholder="Hanoi | Vietnam"
              className="newUserInput"
            />
          </div>
          <div className="newUserItem">
            <label htmlFor="">Gender</label>
            <div className="newUserGender">
              <input type="radio" name="gender" id="male" value="male" />
              <label for="male">Male</label>
              <input type="radio" name="gender" id="female" value="female" />
              <label for="female">Female</label>
              <input type="radio" name="gender" id="other" value="other" />
              <label for="other">Other</label>
            </div>
          </div>
          <div className="newUserItem">
            <label htmlFor="">Active</label>
            <select name="active" id="active" className="newUserSelect">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <button className="newUserButton">Create</button>
        </div>
      </form>
    </div>
  );
}
