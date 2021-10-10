import axios from './axios';
import { useEffect , useState} from 'react';
import './App.css';
import Video from './render';
function App() {
  const [videos, setvideos] = useState([]);
  useEffect(()=>{
    fetchPost();
  },[]);
  async function fetchPost(){
    const response = await axios.get('get_all_users');
    setvideos(response.data);
    return response;
  }
  console.log(videos);
  var [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    event.preventDefault();
    event.stopPropagation();
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    console.log(inputs);
  }
  const submitClicked = async (e) =>{
    e.preventDefault();
    var res = await axios.post('add_new_user',{
      email:inputs.Email,
      fist_name:inputs.First,
      last_name:inputs.Last,
      pwd: inputs.Password,
      username: inputs.username
    });
    if(res.data.status === "Error")
    {
      alert(res.data.message);
    }
    else {
      alert(res.data.message);
    }    
    setInputs({});
    fetchPost();
  }
  return (
    <div className="container-2" >
    <div className="flex-box-container-2">
     {
      videos.map(({email, username})=>
       (
         <Video key={email} email={email} username={username}></Video>
      ))
     }
     </div>
     <div className="flex-box-container-1">
       <br/>
      <label className="formlable">Add User:</label>
      <br/>
     <form className="flex-form-1" onSubmit={handleSubmit}>
      <label>First Name<br/>
      <input 
        type="text" 
        name="First"
        placeholder="Enter Your First Name"
        value={inputs.First || ""} 
        onChange={handleChange} noValidate
      />
      </label><br/>
      <label>Last Name<br/>
        <input 
          type="text" 
          name="Last"
          placeholder="Enter Your Last Name"
          value={inputs.Last || ""} 
          onChange={handleChange} noValidate
        />
        </label><br/>
        <label>UserName<br/>
      <input 
        type="text" 
        name="username"
        placeholder="Enter User Name"
        value={inputs.username || ""} 
        onChange={handleChange}
      />
      </label><br/>
      <label>Email Address<br/>
        <input 
          type="text" 
          name="Email" 
          placeholder="Enter Email Address"
          value={inputs.Email || ""} 
          onChange={handleChange}
        />
        </label><br/>
        <label>Password<br/>
        <input 
          type="text" 
          name="Password" 
          placeholder="Enter Password"
          value={inputs.Password || ""} 
          onChange={handleChange}
        />
        </label><br/>
        <input type="submit" class="button" value="ADD" onClick={submitClicked}/>
    </form>
    </div>
    </div>
  );
}

export default App;
