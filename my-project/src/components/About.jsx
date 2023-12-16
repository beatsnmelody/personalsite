import { NavBar } from "./NavBar";

import alex from "../assets/Me.jpeg"

export default function About() {
    return (
      <>
        <NavBar />
        <div className="base-100 m-auto w-auto min-h-screen place-content">
        <p className="">Let Me Introduce Myself!</p>
        <p className="">Alexandra Labaisse</p>
        <p className="">
          Hey there! I'm a 22 year old artist and programmer with big projects coming up and even bigger dreams! I recently graduated from a coding bootcamp and I'm currently looking for work. I was trained to be a Fullstack developer at Fullstack Academy, and I learned so much from there. I can do both frontend and backend, and I'm working on sharpening my frontend skills a little more.</p>
        <p className="">I'm also really into art, to the point it has become my main passion. I have created seven series, and six of them are developed enough to list on my website. My projects are in various levels of development, and it would be my dream if I could get one of them published in comic or video game form. So, I hope you'll follow me along in my art and tech journey!</p>
        <img className="" alt="An image of Alexandra Labaisse." src={alex}></img>
      </div>
      </>
    );
  }