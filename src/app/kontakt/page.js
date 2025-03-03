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
        <div className="w-full p-12 flex flex-col items-center gap-16" >
            <div className="w-5/6">
                <h1>Kontakt</h1>
             </div>
            <div className="w-5/6 flex flex-row">
                    <div className="w-full flex flex-col gap-10">
                        <div>
                        <h3>Adresse</h3>
                        <p>Ekregaten 16 5036 Bergen</p>
                        </div>
                        <div>
                            <h3>Mail</h3>
                            <p>hausvikanders@gmail.com</p>
                        </div>

                        <div>
                            <h3>Tlf</h3>
                            <p>93814254</p>
                        </div>
                    </div>

            

           </div>
        </div>
    )
}


/*
<div className="w-full">
<form className="flex flex-col gap-4 w-full" onSubmit={handleSubmit} 
//      action={async (formData:FormData) => {
//     "use server"
//     console.log(formData.get("email"))
//     // add server logic here
//   }}>
>
    <label htmlFor="navn">Navn</label>
    <input 
    name="navn" 
    placeholder="skriv navn her" 
    className="w-full border-solid border-2 rounded-lg p-2"
    onChange={(e) => setName(e.target.value)}
    />
    <label htmlFor="email">Email</label>
    <input 
    name="email" 
    placeholder="skriv Email adresse her" 
    className="w-full border-solid border-2 rounded-lg p-2"
    onChange={(e) => setEmail(e.target.value)}
    />
    <label htmlFor="melding">Melding</label>
    <textarea 
    name="melding" 
    placeholder="skriv melding her" 
    className="w-full h-52 border-solid border-2 rounded-lg p-2"
    onChange={(e) => setMessage(e.target.value)}
    />
    <button
    type="submit"
    className="mt-4 px-4 py-2 bg-portfolio-primary-blue text-black rounded-3xl w-3/6 h-12"
        >
            Submit
    </button>
</form>
</div> */