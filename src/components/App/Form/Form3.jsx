import { useState } from "react";
import CodeBox from "../../../Shared/CodeBox/CodeBox";


const Form3 = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleMessageChange = (e) => {
        setMessage(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <CodeBox stringCode={`
        const [email, setEmail] = useState('');
        const [message, setMessage] = useState('');
    
        const handleEmailChange = (e) => {
            setEmail(e.target.value);
        };
    
        const handleMessageChange = (e) => {
            setMessage(e.target.value);
        };
    
        const handleSubmit = (e) => {
            e.preventDefault();
        };
        return(<div className="bg-gray-900 min-h-screen flex justify-center items-center">
        <form onSubmit={handleSubmit} className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md">
            <h2 className="text-2xl font-bold text-white mb-8">Contact Us</h2>
            <div className="mb-4">
                <label htmlFor="email" className="block text-white mb-2">Company Email</label>
                <input
                    type="email"
                    id="email"
                    className="w-full bg-gray-700 rounded-lg px-4 py-2 outline-none focus:ring focus:ring-purple-400"
                    value={email}
                    onChange={handleEmailChange}
                />
            </div>
            <div className="mb-4">
                <label htmlFor="message" className="block text-white mb-2">How Can We Help You?</label>
                <textarea
                    id="message"
                    className="w-full bg-gray-700 rounded-lg px-4 py-2 outline-none focus:ring focus:ring-purple-400"
                    rows="4"
                    value={message}
                    onChange={handleMessageChange}
                ></textarea>
            </div>
            <button type="submit" className="bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600 focus:outline-none focus:ring focus:ring-purple-400">Submit</button>
        </form>
    </div>)`}>
            <div className="bg-gray-900 min-h-screen flex justify-center items-center">
                <form onSubmit={handleSubmit} className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md">
                    <h2 className="text-2xl font-bold text-white mb-8">Contact Us</h2>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-white mb-2">Company Email</label>
                        <input
                            type="email"
                            id="email"
                            className="w-full bg-gray-700 rounded-lg px-4 py-2 outline-none focus:ring focus:ring-purple-400"
                            value={email}
                            onChange={handleEmailChange}
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="message" className="block text-white mb-2">How Can We Help You?</label>
                        <textarea
                            id="message"
                            className="w-full bg-gray-700 rounded-lg px-4 py-2 outline-none focus:ring focus:ring-purple-400"
                            rows="4"
                            value={message}
                            onChange={handleMessageChange}
                        ></textarea>
                    </div>
                    <button type="submit" className="bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600 focus:outline-none focus:ring focus:ring-purple-400">Submit</button>
                </form>
            </div>
        </CodeBox>
    );
};

export default Form3;