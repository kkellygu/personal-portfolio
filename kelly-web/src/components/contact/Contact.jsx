import "./contact.css"
import contactImg from '/Users/kellygu/workspace/personal-portfolio/kelly-web/src/assets/images/contactme3.PNG'
import { useState } from 'react'

export default function Contact(){
    const [message, setMessage] = useState('');
    const [email, setEmail] = useState('');
    const [ errorMessage, setErrorMessage] = useState('');
    const [ successMessage, setSuccessMessage] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault(); 
      
    
        if(!email || !message || !name){
            setErrorMessage('please fill in all required fields.');
            return;
        }

        setEmail('');
        setMessage('');
        setName('');
        setErrorMessage('');
        setSuccessMessage('thanks! I will get back to you as soon as possible! :)');
    }

    return(
        <div className="contact" id="contact">
            <div className="contactLeft">
                <img src={contactImg} alt=""/>
            </div>
            <div className="contactRight">
                <h2>contact me</h2>
                <form onSubmit={handleSubmit}>
                    <div className="inputContainer">
                        <p>name:</p>
                        <input type="text" placeholder="ie: kelly gu" value={name} onChange={(e) => setName(e.target.value)}/>
                    </div>
                    <div className="inputContainer">
                        <p>email:</p>
                        <input type="text" placeholder="ie: kkellygu1006@gmail.com" value={email} onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                    <div className="inputContainer">
                        <p>message:</p>
                        <textarea placeholder="let's chat!" value={message} onChange={(e) => setMessage(e.target.value)}/>
                    </div>
                    <button type="submit">send</button>
                    {errorMessage && <span>{errorMessage}</span>}
                    {successMessage && <span>{successMessage} </span>}
                </form>
            </div>
        </div>
    )
}