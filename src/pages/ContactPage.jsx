import { useEffect, useState } from "react";
export default function ContactPage() {
    const [missingFields, setMissingFields] = useState([]);
    const [emailError, setEmailError] = useState(true);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !email || !message || emailError) {
            console.log('here');
            return;
        }
        setName('');
        setEmail('');
        setMessage('');
    };
    const handleBlur = (e) => {
        e.preventDefault();
        if (e.target.value == "") {
            if (!missingFields.includes(e.target.id)) { setMissingFields([...missingFields, e.target.id]); }
        }
        else if (missingFields.includes(e.target.id)) {
            setMissingFields(missingFields.filter((id) => id != e.target.id));
        }
        console.log('blurred');
    };
    const handleChange = (e) => {
        switch (e.target.id) {
            case 'name':
                setName(e.target.value)
                break;
            case 'email':
                setEmail(e.target.value)
                break;
            case 'message':
                setMessage(e.target.value)
                break;
            default:
                break;
        }
    }
    useEffect(
        () => setEmailError(email.match(/^([\w\+~-]+)@([\w]+)\.([a-z]{2,63})$/))
    )
    return (
        <div>
            <form className="" onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" onBlur={handleBlur} onChange={handleChange} value={name} />
                <label htmlFor="email">Email Address:</label>
                <input type="email" id="email" onBlur={handleBlur} onChange={handleChange} value={email} />
                <label htmlFor="message">Message:</label>
                <textarea name="email-body" id="message" cols="30" rows="10" onBlur={handleBlur} onChange={handleChange} value={message}></textarea>
                {missingFields.length ? (<p>Fields {missingFields.join(', ')} must be filled in.</p>) : (<></>)}
                {!emailError ? (<p>Please enter a valid email!</p>) : (<></>)}
                <button>Submit</button>
            </form>
        </div>
    );
}