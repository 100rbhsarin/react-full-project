// import "./Contact.css"

// export const Contact = ()=>{

//     const handleFormSubmit = (formData)=>{
//         console.log(formData)
//         const formInputData = Object.fromEntries(formData.entries())
//     console.log(formInputData)
//     }

//     return(
//         <>
//         <form action={handleFormSubmit}>
//             <input 
//             type="text"
//              name="FullName"
//             id="FullName"
//            placeholder="Full Name"
//             autoComplete="false"
//             required/>

// <input 
//             type="email"
//              name="email"
//             id="email"
//            placeholder="Enter your Email"
//             autoComplete="false"
//             required/>

//             <textarea 
//             className="form-control"
//             rows="10"
//             placeholder="Enter Your Message"
//             name="message"
//             required
//             autoComplete="false">
// </textarea>
// <button type="submit" value='send'>SEND</button>
//         </form>
//         </>
//     )
// }


import "./Contact.css";

export const Contact = () => {
    
  const handleFormSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission
    const formData = new FormData(event.target);
    const formInputData = Object.fromEntries(formData.entries());
    console.log(formInputData);
  };

  return (
    <>
      <form className="contact-form" onSubmit={handleFormSubmit}>
        <input
          type="text"
          name="FullName"
          id="FullName"
          className="contact-input"
          placeholder="Full Name"
          autoComplete="off"
          required
        />
        <input
          type="email"
          name="email"
          id="email"
          className="contact-input"
          placeholder="Enter your Email"
          autoComplete="off"
          required
        />
        <textarea
          className="contact-textarea"
          rows="10"
          placeholder="Enter Your Message"
          name="message"
          required
          autoComplete="off"
        ></textarea>
        <button className="contact-button" type="submit" value="send">
          SEND
        </button>
      </form>
    </>
  );
};


