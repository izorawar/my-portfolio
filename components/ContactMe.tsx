import React from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm } from "react-hook-form";
type Props = {};
type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
}
function ContactMe({}: Props) {


  const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
  const onSubmit = (data: Inputs) => {
    window.location.href = `mailto:randhawazora99@gmail.com?subject=${data.subject}&body=Hi, my name is ${data.name}. My message for you: ${data.message}. Feel free to contact me at my email: ${data.email}`;
  };
  return (
    <div className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Contact
      </h3>
      <div className="flex flex-col space-y-10">
        <h4 className="text-4xl font-semibold text-center">
          I have got just what you need.{" "}
          <span className="decoration-[#F7AB0A]/50 underline">Let's talk.</span>
        </h4>

        <div className="space-y-10">
          <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="text-2xl">+1 (647)867-9230</p>
          </div>

          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="text-2xl">randhawazora99@gmail.com</p>
          </div>

          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="text-2xl">L6Y 0X6, Brampton, ON</p>
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-2 w-fit mx-auto">
          <div className="flex space-x-2">
            <input {...register('name')} className="contactInput" type="text" placeholder="Name"/>
            <input {...register('email')} className="contactInput" type="text" placeholder="Email"/>
          </div>

          <input {...register('subject')} className="contactInput" type="text" placeholder="Subject"/>

          <textarea {...register('message')} className="contactInput" placeholder="Message"/>

          <button type="submit" className="bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold text-lg]">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default ContactMe;
