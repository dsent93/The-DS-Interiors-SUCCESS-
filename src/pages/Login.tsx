import React, { useState } from "react";

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
        
        setQuotation(
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
        <div>
            <nav>
                <h2>TheDSInteriors</h2>
                {!isLoggedIn ? (
                    <div>
                        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        <button onClick={validateLogin}>Login</button>
                    </div>
                ) : (
                    <button onClick={() => setIsLoggedIn(false)}>Logout</button>
                )}
            </nav>
            {!isLoggedIn ? (
                <p>Please log in to access the quotation maker.</p>
            ) : (
                <section>
                    <h2>Furniture Quotation Maker</h2>
                    <label>Furniture Type: <input type="text" value={furnitureType} onChange={(e) => setFurnitureType(e.target.value)} /></label><br /><br />
                    <label>Length: <input type="number" value={length} onChange={(e) => setLength(Number(e.target.value))} /></label>
                    <label>Width: <input type="number" value={width} onChange={(e) => setWidth(Number(e.target.value))} /></label>
                    <label>Height: <input type="number" value={height} onChange={(e) => setHeight(Number(e.target.value))} /></label><br /><br />
                    <label>Rate per unit: <input type="number" value={rate} onChange={(e) => setRate(Number(e.target.value))} /></label><br /><br />
                    <label>GST Percentage: <input type="number" value={gstRate} onChange={(e) => setGstRate(Number(e.target.value))} /></label><br /><br />
                    <button onClick={generateQuotation}>Generate Quotation</button>
                    {quotation && <div dangerouslySetInnerHTML={{ __html: quotation }} />}
                </section>
            )}
        </div>
    );
};

export default QuotationMaker;
