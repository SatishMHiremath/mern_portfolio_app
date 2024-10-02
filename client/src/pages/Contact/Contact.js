import React, { useState } from 'react';
import axios from "axios";
import "./contact.css";
import Rotate from "react-reveal/Rotate";
import LightSpeed from "react-reveal/LightSpeed";
import { BsFacebook, BsGithub, BsLinkedin } from "react-icons/bs";

const Contact = () => {
  const [name, setname] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const [error, setError] = useState({name:"", email:"", msg:""});

  //handle submit button
  const handleSubmit = async (e) => {
    e.preventDefault();

    setError({name:"",email:"",msg:""});
    
    let hasError = false;
    if(!name) {
        setError((prev) => ({...prev, name: "Name is required"}));
        hasError = true;
    }
    if(!email) {
        setError((prev) => ({...prev, email: "Email is required"}));
        hasError = true;
    }    
    if(!msg) {
        setError((prev) => ({...prev, msg: "Message is required"}));
        hasError = true;
    }

    if(hasError) {
        return;
    }
    try {
    
      const res = await axios.post("http://localhost:8081/api/v1/portfolio/sendEmail", {
        name,
        email,
        msg,
      });
      //validation success
      if (res.data.success) {
        console.log(res.data.message);
        setname("");
        setEmail("");
        setMsg("");
      } else {
        console.log(res.data.message);
        alert("Error: " + res.data.message);
      }
    } catch (error) {
      console.log(error);
      alert("Error : "+error);
    }
  };

  return (
    <>
      <div className=" contact" id="contact">
        <div className="card card0 border-0">
          <div className="row">
            <div className="col-md-6 col-lg-6 col-xl-6 col-sm-12">
              <div className="card1">
                <div className="row border-line">
                  <LightSpeed>
                    <img
                      src="https://img.freepik.com/free-photo/hot-line-contact-us-call-center-search-interface_53876-124009.jpg?w=2000"
                      alt="ocontact"
                      className="image"
                    />
                  </LightSpeed>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <Rotate>
                <div className="card2 d-flex card border-0 px-4 py-5">
                  <div className="row">
                    <div className="row">
                      <h6>
                        Contact With
                        <BsLinkedin color="blue" size={30} className="ms-2" />
                        <BsGithub color="black" size={30} className="ms-2" />
                        <BsFacebook color="blue" size={30} className="ms-2" />
                      </h6>
                    </div>

                    <div className="row px-3 mb-4">
                      <div className="line" />
                      <small className="or text-center">OR</small>
                      <div className="line" />
                    </div>
                    <div className="row px-3">
                      <input
                        type="text"
                        name="name"
                        placeholder="Enter your Name"
                        className="mb-3"
                        value={name}
                        onChange={(e) => setname(e.target.value)}
                        required 
                      />
                      {error.name && <p className='error-message'>{error.name}</p>}
                    </div>
                    <div className="row px-3">
                      <input
                        type="email"
                        name="email"
                        placeholder="Enter Your Email Address"
                        className="mb-3"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required 
                      />
                      {error.email && <p className='error-message'>{error.email}</p>}
                    </div>
                    <div className="row px-3">
                      <textarea
                        type="text"
                        name="msg"
                        placeholder="Write your message"
                        className="mb-3"
                        value={msg}
                        onChange={(e) => setMsg(e.target.value)}
                        required 
                      />
                      {error.msg && <p className='error-message'>{error.msg}</p>}
                    </div>
                    <div className="row px-3">
                      <button className="button" onClick={handleSubmit}>
                        SEND MESSAGE
                      </button>
                    </div>
                  </div>
                </div>
              </Rotate>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;