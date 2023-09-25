import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useState } from 'react';
import './Contact.css';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const Contact = (props) => {
  const navigate = useNavigate();
  const { style } = props;
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [messageError, setMessageError] = useState('');

  const validateForm = () => {
    let isValid = true;

    // Validate name
    if (!name.trim()) {
      setNameError('Name is required');
      isValid = false;
    } else {
      setNameError('');
    }

    // Validate email
    if (!email.trim()) {
      setEmailError('Email is required');
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError('Invalid email format');
      isValid = false;
    } else {
      setEmailError('');
    }

    // Validate message
    if (message.length < 15) {
      setMessageError('Message should be at least 15 characters long');
      isValid = false;
    } else {
      setMessageError('');
    }

    return isValid;
  };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    if (validateForm()) {
        emailjs.
        sendForm('service_4oj1jfh', 'template_fdccufu', form.current, 'pHlf1MseO9mIByVr6')
        .then((result) => {
          console.log(result.text);
          navigate('/success');
        })
        .catch((error) => {
          console.log(error.text);
        });
    }
  };

  return (
    <div className="container Contact" style={style} id='contact'>
      <div className="row">
        <div className="col-8 mx-auto my-5">
          <h1>Contact Me</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-8 mx-auto">
          <form ref={form} onSubmit={sendEmail}>
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                name="from_name"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              {nameError && <p className="error-message">{nameError}</p>}
            </div>
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                name="user_email"
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {emailError && <p className="error-message">{emailError}</p>}
            </div>
            <div className="mb-3">
              <label htmlFor="exampleFormControlTextarea1" className="form-label">
                Message
              </label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                name="message"
                rows="3"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
              {messageError && <p className="error-message">{messageError}</p>}
            </div>
            <div className="mb-3">
              <button type="submit" value="Send" className="btn btn-primary mb-3">
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
