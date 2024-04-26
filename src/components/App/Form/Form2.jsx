import { useState } from "react";
import CodeBox from "../../../Shared/CodeBox/CodeBox";

const Form2 = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
  
    const handleUsernameChange = (e) => {
      setUsername(e.target.value);
    };
  
    const handlePasswordChange = (e) => {
      setPassword(e.target.value);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
    };
  
    return (
     <CodeBox stringCode={`
     const [username, setUsername] = useState('');
     const [password, setPassword] = useState('');
   
     const handleUsernameChange = (e) => {
       setUsername(e.target.value);
     };
   
     const handlePasswordChange = (e) => {
       setPassword(e.target.value);
     };
   
     const handleSubmit = (e) => {
       e.preventDefault();
     };
     
     return( <div className="bg-gray-900 min-h-screen flex justify-center items-center">
     <form onSubmit={handleSubmit} className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md">
       <h2 className="text-2xl font-bold text-white mb-8">Login</h2>
       <div className="mb-4">
         <label htmlFor="username" className="block text-white mb-2">Username</label>
         <input
           type="text"
           id="username"
           className="w-full bg-gray-700 rounded-lg px-4 py-2 outline-none focus:ring focus:ring-blue-400"
           value={username}
           onChange={handleUsernameChange}
         />
       </div>
       <div className="mb-4">
         <label htmlFor="password" className="block text-white mb-2">Password</label>
         <input
           type="password"
           id="password"
           className="w-full bg-gray-700 rounded-lg px-4 py-2 outline-none focus:ring focus:ring-blue-400"
           value={password}
           onChange={handlePasswordChange}
         />
       </div>
       <div className="mb-4 flex justify-between items-center">
         <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-400">Login</button>
         <button className="text-gray-400 hover:underline focus:outline-none">Sign Up</button>
       </div>
       <button className="text-gray-400 hover:underline focus:outline-none">Forgot Password</button>
     </form>
   </div>)`}>
         <div className="bg-gray-900 min-h-screen flex justify-center items-center">
        <form onSubmit={handleSubmit} className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-2xl font-bold text-white mb-8">Login</h2>
          <div className="mb-4">
            <label htmlFor="username" className="block text-white mb-2">Username</label>
            <input
              type="text"
              id="username"
              className="w-full bg-gray-700 rounded-lg px-4 py-2 outline-none focus:ring focus:ring-blue-400"
              value={username}
              onChange={handleUsernameChange}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-white mb-2">Password</label>
            <input
              type="password"
              id="password"
              className="w-full bg-gray-700 rounded-lg px-4 py-2 outline-none focus:ring focus:ring-blue-400"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          <div className="mb-4 flex justify-between items-center">
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-400">Login</button>
            <button className="text-gray-400 hover:underline focus:outline-none">Sign Up</button>
          </div>
          <button className="text-gray-400 hover:underline focus:outline-none">Forgot Password</button>
        </form>
      </div>
     </CodeBox>
    );
  };
  

export default Form2;
