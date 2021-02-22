import React from 'react';

function Contact() {
  return (
    <div className='view'>
      <h1 className='view-title'>Contact Me</h1>
      <div className='view-description'>
        <h2>Address:Germany,Herten</h2>
        <h2>Phone:004915213000229</h2>
        <h2>Email:samuel.teklay2001@gmail.com</h2>
      </div>

      <div>
        <div>
          <a href='https://github.com/samiti123'>github</a> <br />
        </div>
        <div>
          <a href='https://www.linkedin.com/in/samuel-teklay-743a32155/'>
            linkedin
          </a>{' '}
          <br />
        </div>
        <div>
          <a href='https://www.xing.com/profile/samuel_teklay'>xing</a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
