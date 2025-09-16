import React, { useContext, useState, useEffect } from 'react'
import { userDataContext } from '../context/UserContext'
import { useNavigate } from 'react-router-dom'
import { IoEye, IoEyeOff } from "react-icons/io5";

function SignUp() {
  const { serverUrl, setUserData } = useContext(userDataContext)
  const navigate = useNavigate()
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const [err, setErr] = useState("")
  const [showPassword, setShowPassword] = useState(false)

  const handleSignUp = async (e) => {
    e.preventDefault()
    setErr("")
    setLoading(true)
    try {
      let result = await fetch(`${serverUrl}/api/auth/signup`, {
        method: 'POST',
        credentials: 'include',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password }),
      })
      const data = await result.json()
      if (result.ok) {
        setUserData(data)
        setLoading(false)
        navigate("/customize")
      } else {
        setErr(data.message || "Signup failed")
        setLoading(false)
      }
    } catch (error) {
      setErr("Network error")
      setLoading(false)
    }
  }

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
      <div className="max-w-4xl w-full bg-white bg-opacity-10 backdrop-blur-md rounded-xl shadow-lg flex overflow-hidden">
        {/* Left side */}
        <div className="hidden md:flex flex-col justify-center p-12 w-1/2 bg-gradient-to-br from-blue-500 to-purple-600 text-white">
          <h1 className="text-4xl font-bold mb-4">Your AI VA</h1>
          <h2 className="text-3xl font-semibold mb-6">Hello, <span className="font-extrabold">welcome!</span></h2>
          <p className="text-lg opacity-90">
            connect yourself with AI world in a customisable options
          </p>
          <button
            onClick={() => alert("View more clicked")}
            className="mt-8 bg-white bg-opacity-20 hover:bg-opacity-30 text-white font-semibold py-2 px-6 rounded-full w-max transition"
          >
            View more
          </button>
        </div>

        {/* Right side - form */}
        <div className="w-full md:w-1/2 p-10 flex flex-col justify-center">
          <form onSubmit={handleSignUp} className="space-y-6">
            <input
              type="text"
              placeholder="Username"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-20 placeholder-white placeholder-opacity-70 text-white focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
            <input
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-20 placeholder-white placeholder-opacity-70 text-white focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-20 placeholder-white placeholder-opacity-70 text-white focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
              <div
                className="absolute top-3 right-3 cursor-pointer text-white"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <IoEyeOff size={24} /> : <IoEye size={24} />}
              </div>
            </div>
            {err && <p className="text-red-400 text-sm">{err}</p>}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 rounded-full bg-white text-purple-700 font-bold hover:bg-purple-100 transition disabled:opacity-50"
            >
              {loading ? "Loading..." : "Sign Up"}
            </button>
          </form>
          <p className="mt-6 text-white text-center">
            Already have an account?{" "}
            <span
              onClick={() => navigate("/signin")}
              className="text-purple-300 cursor-pointer hover:underline"
            >
              Sign In
            </span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default SignUp
