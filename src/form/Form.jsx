import  React, {useState} from 'react';
import "./form.css";
function Form() {
    const [name, setName] =useState ("");
    const [password, setPassword] =useState ("");
    const [email, setEmail] =useState ("");
    const[self, setSelf] =useState("");
    const [image, setImage]=useState("null");
    console.log(name);
    
  function handleSubmit(e)  {
    e.preventDefault();
    console.log(name, password, email, self, image);
};
 return (
 <form className="form_container" onSubmit={handleSubmit}>
        <div className = "form_body">
            <label>Name</label>
            <input
            type="text"
            className="input_color"
            value={name}
            onChange={(e) => setName(e.target.value)}
       />
     </div>
    <div className="form_body">
       <label>Password</label>
       <input 
          type="password" 
          className="input_color"
          value={password}
          onChange={(e) =>{setPassword(e.target.value)}
 }
 />        
</div>
  <div className="form_body">
    <label>Email</label>
    <input 
       type="email" 
       className="input_color"
       value={email}
       onChange={(e)=>setEmail(e.target.value)}
    />
    </div>
    <div className="form_body">
    <label>About My self</label>
    <textarea className= "input_textarea" value={self}onChange={(e)=>setSelf(e.target.value)}/>
    </div>
     <div className="form_body">
    <label>Profile Picture</label>
    <input
    type="file"
    acept="image/*"
    onChange={(e) => setImage(e.target.files[0])}
    />
    </div>
    
    <input type="submit" value="Submit" className="form_btn"/>
    </form>
  );
}
export default Form;