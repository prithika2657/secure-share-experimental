import { useState } from "react";
import { auth } from "../firebase";
import {
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] =
    useState("");
  const [message, setMessage] =
    useState("");

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      
  console.log("UID:", auth.currentUser.uid);
console.log("EMAIL:", auth.currentUser.email);
      setMessage("Login successful ✅");
      navigate("/");
    } catch (error) {
      setMessage(error.message);
    }
  };
  const navigate = useNavigate();

  return (
    <div className="p-6">
      <div className="bg-white p-6 rounded-xl shadow max-w-md">
        <h1 className="text-2xl font-bold mb-4">
          Login
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
          onClick={handleLogin}
          className="bg-green-600 text-white px-4 py-2 rounded"
        >
          Login
        </button>

        {message && (
          <p className="mt-3">{message}</p>
        )}
      </div>
    </div>
  );
}

export default Login;