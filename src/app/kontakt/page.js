"use client"

import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

let FormFields = {
    email: "",
    name: ""
  }

export default function Kontakt(){
    

const formFields = useForm();
const {register, handleSubmit} = formFields;

const onSubmit = (data) => {
    console.log(data);
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
                    </div>
                    <div className="w-full ">
                            <form className="flex flex-col gap-10 w-full" onSubmit={handleSubmit(onSubmit)}>
                                <input {...register("name")} type="text" placeholder="name" />
                                <input {...register("email")}type="email" placeholder="email" />
                                <textarea type="textarea"/>
                                <button className="w-3/6 border-solid border-2 p-7 bg-portfolio-primary-blue" type="submit"/>
                            </form>
                </div>
           </div>
        </div>
    )
}