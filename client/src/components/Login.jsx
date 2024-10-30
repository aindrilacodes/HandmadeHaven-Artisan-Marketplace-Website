import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const [formData, setFormData] = useState({});
    const navigate = useNavigate();
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevState) => ({
        ...prevState,
        [name]: value
      }));
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const res = await fetch("http://localhost:8001/api/auth/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: formData.email,
            password: formData.password
          }),
        });
  
        const data = await res.json();
        console.log(data);
  
        if (data.success === false) {
          alert(data.message); 
        } else {
          alert("login successful");
          navigate('/'); 
        }
  
      } catch (error) {
        console.error("Fetch error:", error);
        alert("An error occurred while trying to login.");
      }
    };
  

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-md rounded-lg">
        <h2 className="text-center text-2xl font-bold text-gray-800 font-dynapuff">Log In</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 font-dynapuff">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 font-dynapuff"
              placeholder="your@email.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 font-dynapuff">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className=" w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 font-dynapuff"
              placeholder="Enter Password"
            />
          </div>

          <div>
            <button
              type="submit"
              className=" font-dynapuff w-full bg-orange-500 text-white p-2 rounded-md hover:bg-orange-600 transition duration-200"
            >
              Log In
            </button>
          </div>
        </form>

        <p className=" font-dynapuff text-center text-sm text-gray-600">
          Dont have an account? <Link to="/signup" className="text-orange-500 hover:underline">Sign Up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
