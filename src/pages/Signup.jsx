import { useState } from "react";
import { auth } from "../firebase";
import {
  createUserWithEmailAndPassword,
} from "firebase/auth";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] =
    useState("");
  const [message, setMessage] =
    useState("");

  const handleSignup = async () => {
    try {
      await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      setMessage(
        "Account created successfully ✅"
      );
    } catch (error) {
      setMessage(error.message);
    }
  };

  return (
    <div className="p-6">
      <div className="bg-white p-6 rounded-xl shadow max-w-md">
        <h1 className="text-2xl font-bold mb-4">
          Sign Up
        </h1>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
          className="border p-2 w-full mb-3"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
          className="border p-2 w-full mb-3"
        />

        <button
          onClick={handleSignup}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Create Account
        </button>

        {message && (
          <p className="mt-3">
            {message}
          </p>
        )}
        <p className="mt-4">
  Already have an account?{" "}
  <a
    href="#/login"
    className="text-blue-600"
  >
    Login
  </a>
</p>
      </div>
    </div>
  );
}

export default Signup;