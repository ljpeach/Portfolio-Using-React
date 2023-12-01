import { useEffect, useState } from "react";
export default function ContactPage() {
    const [missingFields, setMissingFields] = useState([]);
    const [emailError, setEmailError] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !email || !message || emailError) {
            console.log(name, email, message, emailError);
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
        () => {
            if (email) {
                setEmailError(!(/^([\w\+~-]+)@([\w]+)\.([a-z]{2,63})$/.test(email)))
            }
        },
        [email]
    )
    return (
        <div id="contact" className="d-flex align-items-center flex-column text-white">
            <h2 className="m-2">Contact Me</h2>
            <form className="p-3 col-md-6 col-12 " onSubmit={handleSubmit}>
                <label className="form-label" htmlFor="name">Name:</label>
                <input type="text" id="name" className="form-control" onBlur={handleBlur} onChange={handleChange} value={name} />
                <label className="form-label" htmlFor="email">Email Address:</label>
                <input type="email" id="email" className="form-control" onBlur={handleBlur} onChange={handleChange} value={email} />
                <label className="form-label" htmlFor="message">Message:</label>
                <textarea name="email-body" id="message" cols="30" rows="10" className="form-control mb-2" onBlur={handleBlur} onChange={handleChange} value={message}></textarea>
                {missingFields.length ? (<p className="text-warning">Fields {missingFields.join(', ')} must be filled in.</p>) : (<></>)}
                {emailError ? (<p className="text-warning">Please enter a valid email!</p>) : (<></>)}
                <button>Submit</button>
            </form>
        </div>
    );
}