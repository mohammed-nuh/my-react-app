import { useState } from "react";

function Contact() {
    const [firstname, setFirstName] = useState("");
    const [lastname, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [age, setAge] = useState(0);
    const [message, setMessage] = useState("");
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState<string | null>(null);


    let isEmailValid = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    async function sendMessage() {
        setError(null);
        setSuccess(null);

        if (!firstname) {
            setError("Full name is required!");
            return;
        }
        if (!lastname) {
            setError("Last name is required!");
            return;
        }
        if (!email) {
            setError("Email is required!");
            return;
        }
        if (!isEmailValid(email)) {
            setError("Invalid Email Id");
            return;
        }
        if (!(age >= 13 && age <= 120)) {
            setError("Invalid age. Please enter a number between 13 and 120.");
            return;
        }
        if (!message) {
            setError("Message is required!");
            return;
        }
        if (message.length < 10) {
            setError("Message too short...");
            return;
        }
        if (message.length > 200) {
            setError("Message too long...");
            return;
        }

        let messageObject = { firstname, lastname, email, age, message };

        await fetch("https://6835b8aecd78db2058c2d6cc.mockapi.io/messages", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(messageObject)
        })

        setSuccess("Message Sent");
        setFirstName("");
        setLastName("");
        setEmail("");
        setAge(0);
        setMessage("");
    }

    return (
        <section className="py-5 bg-dark">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="contact-form p-5 shadow-sm bg-white">
                            <h2 className="text-center mb-4 text-dark">Get in Touch</h2>
                            {error && <div className="alert alert-danger">{error}</div>}
                            {success && <div className="alert alert-success">{success}</div>}
                            <form>
                                <div className="row g-3">
                                    <div className="col-md-6">
                                        <input type="text" className="form-control custom-input" placeholder="First Name" value={firstname} onChange={(e) => setFirstName(e.target.value)} />
                                    </div>
                                    <div className="col-md-6">
                                        <input type="text" className="form-control custom-input" placeholder="Last Name" value={lastname} onChange={(e) => setLastName(e.target.value)} />
                                    </div>
                                    <div className="col-12">
                                        <input type="email" className="form-control custom-input" placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} />
                                    </div>
                                    <div className="form-group d-flex align-items-center justify-content-center">
                                        <label htmlFor="age" className="me-3 mb-0">Age:</label>
                                        <input
                                            type="number"
                                            id="age"
                                            className="form-control w-auto"
                                            placeholder="Age"
                                            value={age}
                                            onChange={(e) => setAge(Number(e.target.value))}
                                        />
                                    </div>
                                    <div className="col-12">
                                        <textarea className="form-control custom-input" rows={5} placeholder="Your Message" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
                                    </div>
                                    <div className="col-12">
                                        <button type="button" className="btn btn-primary w-100 py-3" onClick={() => sendMessage()}>Send Message</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Contact;