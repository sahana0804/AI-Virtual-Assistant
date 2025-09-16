import React, { useContext, useState, useEffect } from 'react'
import { userDataContext } from '../context/UserContext'
import { useNavigate } from 'react-router-dom'
import { IoEye, IoEyeOff } from "react-icons/io5";

function SignIn() {
  const { serverUrl, setUserData } = useContext(userDataContext)
  const navigate = useNavigate()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const [err, setErr] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [typedText, setTypedText] = useState("")
  const fullText = "Hello, welcome back!"

  const handleSignIn = async (e) => {
    e.preventDefault()
    setErr("")
    setLoading(true)
    try {
      let result = await fetch(`${serverUrl}/api/auth/signin`, {
        method: 'POST',
        credentials: 'include',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      })
      const data = await result.json()
      if (result.ok) {
        setUserData(data)
        setLoading(false)
        navigate("/customize")
      } else {
        setErr(data.message || "Sign in failed")
        setLoading(false)
      }
    } catch (error) {
      setErr("Network error")
      setLoading(false)
    }
  }

  // Typing effect
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < fullText.length) {
        setTypedText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 100);
    return () => clearInterval(interval);
  }, [fullText]);

  // Custom cursor effect
  useEffect(() => {
    const cursor = document.createElement('div');
    cursor.style.width = '15px';
    cursor.style.height = '15px';
    cursor.style.borderRadius = '50%';
    cursor.style.backgroundColor = 'white';
    cursor.style.position = 'fixed';
    cursor.style.pointerEvents = 'none';
    cursor.style.zIndex = '9999';
    cursor.style.transition = 'transform 0.1s ease';
    document.body.appendChild(cursor);

    const moveCursor = (e) => {
      cursor.style.transform = `translate3d(${e.clientX - 7.5}px, ${e.clientY - 7.5}px, 0)`;
    };

    window.addEventListener('mousemove', moveCursor);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      document.body.removeChild(cursor);
    };
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-700 via-purple-700 to-indigo-700 px-4">
      <div className="max-w-4xl w-full bg-white bg-opacity-10 backdrop-blur-md rounded-xl shadow-lg flex flex-col md:flex-row overflow-hidden">
        {/* Left side */}
        <div className="flex flex-col justify-center p-12 w-full md:w-1/2 bg-gradient-to-br from-blue-500 to-purple-600 text-white">
          <h1 className="text-4xl font-bold mb-4">Your AI VA</h1>
          <h2 className="text-3xl font-semibold mb-6">{typedText}<span className="animate-pulse">|</span></h2>
          <p className="text-lg opacity-90">
            connect to AI world through virtual assistant
          </p>
        </div>

        {/* Right side - form */}
        <div className="w-full md:w-1/2 p-10 flex flex-col justify-center bg-white rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Register here for the new world</h2>
          <form onSubmit={handleSignIn} className="space-y-6">
            <input
              type="email"
              placeholder="Email ID"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-3 rounded border border-black placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-4 py-3 rounded border border-black placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
              <div
                className="absolute top-3 right-3 cursor-pointer text-gray-700"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <IoEyeOff size={24} /> : <IoEye size={24} />}
              </div>
            </div>
            {err && <p className="text-red-500 text-sm">{err}</p>}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 rounded bg-purple-700 text-white font-bold hover:bg-purple-800 transition disabled:opacity-50"
            >
              {loading ? "Loading..." : "Sign In"}
            </button>
          </form>
          <p className="mt-6 text-gray-700 text-center">
            Want to create a new account?{" "}
            <span
              onClick={() => navigate("/signup")}
              className="text-purple-600 cursor-pointer hover:underline"
            >
              Sign Up
            </span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default SignIn
