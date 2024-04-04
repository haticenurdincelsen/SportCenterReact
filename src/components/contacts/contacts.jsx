import React, { useState } from 'react';
import '../contacts/contact.css'

function ContactUs() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Burada formun gönderilme işlemlerini gerçekleştirebilirsiniz
        console.log("Gönderilen İsim: ", name);
        console.log("Gönderilen Email: ", email);
        console.log("Gönderilen Mesaj: ", message);
    };

    return (
        <div id="contact" className="contact-us">
            <div className="contactus">
                <h2>CONTACT US</h2>
                <div className="line"></div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor nihil ipsa aut. In voluptate cum, corporis possimus obcaecati eveniet suscipit?sit amet consectetur.</p>
            </div>
            <div className="form-map">
                <div className="information">
                    <div className="email-phone">
                        <div>
                            <h2>Mobile Phone</h2>
                            <h5 className="information-space">+908548754512</h5>
                        </div>
                        <div>
                            <h2>Email Address</h2>
                            <h5 className="information-space">haticenur_dincel@hotmail.com</h5>
                        </div>
                    </div>
                    <div className="information-form">
                        <h2>Make An Appointment</h2>
                        <input type="text" id="firstName" name="firstName" placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} required />
                        <br />
                        <input type="text" id="email" name="email" placeholder="Your Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                        <br />
                        <textarea id="txt-area" name="txt-area" rows="6" cols="50" placeholder="Your Message" value={message} onChange={(e) => setMessage(e.target.value)} required></textarea>
                        <br />
                        <button type="submit">Submit</button>
                    </div>
                </div>
                <div className="googleMap">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3059.7376636004387!2d32.83450367640909!3d39.924886585427224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d34f190a9cea8f%3A0xd3862ea8248d08a0!2sAn%C4%B1tkabir!5e0!3m2!1str!2str!4v1706960797587!5m2!1str!2str" width="450" height="300" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </div>
    );
}

export default ContactUs;
