
"use client";
import { useState } from "react";

export default function User() {
    const[name,setName] = useState("No name")
    return (
        <>
        <a href={"../../"}><h1>User Profile({name})</h1></a>
        <button onClick={() => setName("Prasant")}>Set Name to Prasant</button>
        </>
    );
}