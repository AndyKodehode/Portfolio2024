"use client"

import { useState } from "react";

export default function Kontakt(){
    const [email, setEmail] = useState('');
    const [name, setName] = useState('')
    const [message, setMessage] = useState('')

    const handleSubmit = (event) => {
      event.preventDefault(); // Prevent the default form submission
      // Handle form submission here (e.g., send data to an API or server)
      console.log('Form submitted with email:', email);
    };



    return(
        <div className="w-full p-12" >
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                <label htmlFor="navn">Navn</label>
                <input 
                name="navn" 
                placeholder="skriv navn her" 
                className="w-52 border-solid border-2 rounded-lg p-2"
                onChange={(e) => setName(e.target.value)}
                />
                <label htmlFor="email">Email</label>
                <input 
                name="email" 
                placeholder="skriv email her" 
                className="w-52 border-solid border-2 rounded-lg p-2"
                onChange={(e) => setEmail(e.target.value)}
                />
                <label htmlFor="melding">Email</label>
                <textarea 
                name="melding" 
                placeholder="skriv melding her" 
                className="w-52 h-52 border-solid border-2 rounded-lg p-2"
                onChange={(e) => setMessage(e.target.value)}
                />
                <button
                type="submit"
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md"
                    >
                        Submit
                </button>
           </form>
        </div>
    )
}