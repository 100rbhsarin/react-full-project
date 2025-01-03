import "./Contact.css"

export const Contact = ()=>{

    const handleFormSubmit = (formData)=>{
        console.log(formData)
        const formInputData = Object.fromEntries(formData.entries())
    console.log(formInputData)
    }

    return(
        <>
        <form action={handleFormSubmit}>
            <input 
            type="text"
             name="FullName"
            id="FullName"
           placeholder="Full Name"
            autoComplete="false"
            required/>

<input 
            type="email"
             name="email"
            id="email"
           placeholder="Enter your Email"
            autoComplete="false"
            required/>

            <textarea 
            className="form-control"
            rows="10"
            placeholder="Enter Your Message"
            name="message"
            required
            autoComplete="false">
</textarea>
<button type="submit" value='send'>SEND</button>
        </form>
        </>
    )
}