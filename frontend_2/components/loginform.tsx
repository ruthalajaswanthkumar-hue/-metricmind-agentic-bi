"use client";

import { useState } from "react";
import Input from "./Input";
import Button from "./Button";


export default function LoginForm() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");


  function handleLogin() {

    setError("");

    if (!email) {
      setError("Email Required");
      return;
    }


    if (!email.includes("@")) {
      setError("Invalid Email");
      return;
    }


    if (!password) {
      setError("Password Required");
      return;
    }


    alert("Login Successful");

  }



  return (

    <div>

      <h1 className="text-3xl font-bold text-center mb-6 text-black">
        Login
      </h1>


      <Input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
      />


      <div className="mt-4">

        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
        />

      </div>



      <div className="flex justify-between items-center mt-4">


        <label className="flex items-center gap-2 text-black">

  <input 
    type="checkbox"
  />

  Remember Me

</label>


<a 
 href="#"
 className="text-blue-600"
>
  Forgot Password?
</a>


      </div>



      {
        error && (

          <p className="text-red-500 mt-4">
            {error}
          </p>

        )
      }



      <div className="mt-5">

        <Button
          text="Login"
          onClick={handleLogin}
        />

      </div>


    </div>

  );
}