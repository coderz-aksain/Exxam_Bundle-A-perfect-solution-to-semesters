import React from "react";
import Exambundle from "../bundle image.avif";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <div>

      <div className="border-8 w-[800px] h-[700px] ml-96">
        <img className="ml-52 mt-2 w-96 rounded-full" src={Exambundle} alt="" />
        <br />
        <p className="text-white ml-[350px] text-cyan-400 ">EXAM BUNDLE</p> <div className="border-y-2 w-28 ml-[347px] border-cyan-300"></div> <br />
        <p className="text-white ml-[30px] text-green-500">"A web app to assist the candidates and students appearing for semeters and pertaining exams.Excelling semester exams is really an onerous piece of work initself.There are numerous facests that is required to accomplish to triumph the end semester exams, some of them are incorporated in this web app. <br />PYQs, Syllabus, Subjects and Previous Year Sessionals  papers are all incorporated here. <br />What you need to do is? JUST REGISTER! and LOGIN!.And make this web app lucrative and fruitfull <br />This web app comprises of Previous Year Questions (pyq), Syllabus of respective semester, and Sybject list and Reffered books for the same." <br /><br />    </p>
        <span className="text-white ml-[200px] text-2xl text-cyan-400">LETS BOOM THE SEMESTER TOGETHER !</span>

        <Link to="/login ">
        <button className="hover:-translate-y-3 border-gray-500 text-black text-1xl border-4 ml-3 bg-green-600 hover:tracking-widest duration-700">LOG IN</button>
        </Link>
      </div>

    

      
    </div>
  );
};

export default About;
