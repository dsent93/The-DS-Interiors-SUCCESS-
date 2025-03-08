import React, { useState } from "react";
import { motion } from "framer-motion";

const QuotationMaker = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [furnitureType, setFurnitureType] = useState("");
    const [length, setLength] = useState("");
    const [width, setWidth] = useState("");
    const [height, setHeight] = useState("");
    const [rate, setRate] = useState("");
    const [gstRate, setGstRate] = useState(18);
    const [quotation, setQuotation] = useState(null);

    const validateLogin = () => {
        if (email === "dhajare94@gmail.com" && password === "Sbr00216@") {
            setIsLoggedIn(true);
        } else {
            alert("Invalid email or password");
        }
    };

    const generateQuotation = () => {
        if (!furnitureType || !length || !width || !height || !rate || isNaN(gstRate)) {
            alert("Please enter all values");
            return;
        }
        
        const totalCost = length * width * height * rate;
        const gst = totalCost * (gstRate / 100);
        const finalAmount = totalCost + gst;
        
        setQuotation
        (
            `<h3>TheDSInteriors</h3>
            <p>Shop No 3 Kalamboli</p>
            <p>Mobile Number: 9372823338</p>
            <p>Email: dsenterprises24.in@gmail.com</p>
            <hr>
            <b>Furniture:</b> ${furnitureType}<br>
            <b>Dimensions:</b> ${length} x ${width} x ${height}<br>
            <b>Rate:</b> ${rate} per unit<br>
            <b>Total Cost:</b> $${totalCost.toFixed(2)}<br>
            <b>GST (${gstRate}%):</b> $${gst.toFixed(2)}<br>
            <b>Final Amount:</b> $${finalAmount.toFixed(2)}`
        );
    };

    return (
        <div className="pt-24 pb-16">
            <nav className="fixed top-0 left-0 w-full bg-white shadow-md p-4 flex justify-between items-center z-50">
                <h2 className="text-xl font-semibold">TheDSInteriors</h2>
                {!isLoggedIn ? (
                    <div className="flex gap-2">
                        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="p-2 border rounded" />
                        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="p-2 border rounded" />
                        <button onClick={validateLogin} className="bg-primary text-white px-4 py-2 rounded">Login</button>
                    </div>
                ) : (
                    <button onClick={() => setIsLoggedIn(false)} className="bg-red-500 text-white px-4 py-2 rounded">Logout</button>
                )}
            </nav>
            
            {!isLoggedIn ? (
                <motion.div 
                    initial={{ opacity: 0, y: 20 }} 
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mt-32"
                >
                    <p className="text-gray-600 text-lg">Please log in to access the quotation maker.</p>
                </motion.div>
            ) : (
                <div className="container mx-auto px-4 mt-20">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }} 
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-white p-6 rounded-lg shadow-lg max-w-3xl mx-auto"
                    >
                        <h2 className="text-2xl font-semibold text-center mb-4">Furniture Quotation Maker</h2>
                        <div className="grid grid-cols-2 gap-4">
                            <label className="block">Furniture Type: <input type="text" value={furnitureType} onChange={(e) => setFurnitureType(e.target.value)} className="border p-2 w-full" /></label>
                            <label className="block">Rate per unit: <input type="number" value={rate} onChange={(e) => setRate(Number(e.target.value))} className="border p-2 w-full" /></label>
                            <label className="block">Length: <input type="number" value={length} onChange={(e) => setLength(Number(e.target.value))} className="border p-2 w-full" /></label>
                            <label className="block">Width: <input type="number" value={width} onChange={(e) => setWidth(Number(e.target.value))} className="border p-2 w-full" /></label>
                            <label className="block">Height: <input type="number" value={height} onChange={(e) => setHeight(Number(e.target.value))} className="border p-2 w-full" /></label>
                            <label className="block">GST Percentage: <input type="number" value={gstRate} onChange={(e) => setGstRate(Number(e.target.value))} className="border p-2 w-full" /></label>
                        </div>
                        <button onClick={generateQuotation} className="mt-4 bg-primary text-white px-4 py-2 rounded w-full">Generate Quotation</button>
                        {quotation && <div className="mt-6 p-4 border rounded bg-gray-100" dangerouslySetInnerHTML={{ __html: quotation }} />}
                    </motion.div>
                </div>
            )}
        </div>
    );
};

export default QuotationMaker;
