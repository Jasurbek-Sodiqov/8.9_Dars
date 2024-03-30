import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
const SignUp = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
    passwordConfirm: "",
  });

  const handleChange = (e: any) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const { email, password } = values;

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (email == "") {
      alert("enter email");
      return;
    }

    if (password !== values.passwordConfirm) {
      alert("password should match");
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((user) => {
        console.log(user);
      })
      .catch((error) => {
        console.log(error.massage);
      });
  };
  return (
    <div>
      <h3>Sign Up</h3>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          name="email"
          type="email"
          placeholder="your email"
        />
        <br />
        <br />
        <input
          onChange={handleChange}
          name="password"
          id="pass"
          type="password"
          placeholder="password"
        />
        <br />
        <br />
        <input
          onChange={handleChange}
          name="passwordConfirm"
          id="pass2"
          type="password"
          placeholder="confirm"
        />
        <br />
        <br />
        <button>sign up</button>
      </form>
    </div>
  );
};
export default SignUp;
