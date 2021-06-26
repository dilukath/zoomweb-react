import { useState } from "react";
import Zoom from "./Zoom";
import axios from 'axios';

const initialValues = {
  userName: "",
  userEmail: "",
  meetingNUmber: "",
  password: "",
  signature: ""
};

function Home() {
  const [values, setValues] = useState(initialValues);
  const [showZoom, setShowZoom] = useState(false);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  
  const handleSubmit = (e) => {
    e.preventDefault()
    if (!values.meetingNUmber) {
      alert(`Enter meeting number`)
    } else if (!values.userName) {
      alert(`Enter Username`)
    } else if (!values.password) {
      alert(`Enter password`)
    } else if (!values.userEmail) {
      alert(`Enter user email`)
    } else if (values.userName && values.password && values.meetingNUmber && values.userEmail) {
      axios.get(`http://127.0.0.1:5000/meeting/${values.meetingNUmber}`)
        .then(res => {
          const signa = res.data.sig;
          setValues({ ...values, signature: signa });
          setShowZoom(true);
        }
        )
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="userMeetingInput">Meeting Number:</label>
          <input name="meetingNUmber" value={values.meetingNUmber} type="text" onChange={handleInputChange} />
        </div>
        <div>
          <label htmlFor="usernameInput">Username:</label>
          <input name="userName" value={values.userName} type="text" onChange={handleInputChange} />
        </div>
        <div>
          <label htmlFor="userEmailInput">User Email:</label>
          <input name="userEmail" value={values.userEmail} type="text" onChange={handleInputChange} />
        </div>
        <div>
          <label htmlFor="userPasswordInput">Password:</label>
          <input name="password" value={values.password} type="text" onChange={handleInputChange} />
        </div>
        <button type="submit">Submit</button>
      </form>
      {
        showZoom && <Zoom data={values} />
      }
    </>
  );
}

export default Home;
