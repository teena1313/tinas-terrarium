"use client";
import { useState, useEffect } from "react";

export default function DogFact() {
    const [fact, setFact] = useState("");
    //const [success, setSuccess] = useState(false);

    async function getFact(){
        const res = await fetch("https://dog-api.kinduff.com/api/facts")
    
        if (!res.ok) {
            return Error("did not work");
        }
        
        const data = await res.json();
        console.log(data);

        setFact(data.facts[0]);
    }

    useEffect(() => {
        getFact();
    }, [])

    return (
        <>
            <p>Dog Fact: {fact}</p>
            <hr className= "my-4"></hr>
        </>
    )
}

