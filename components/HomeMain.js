import React from "react"
import Link from "next/link"
import emailjs from "emailjs-com"

export default function HomeMain(props) {
    const form = React.useRef();

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_cu9t9dx', 'template_1hdaicr', form.current, 'uMOzHGGuFxwXmHefZ')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
    }

    return (
        <main>
            <section className="homeMainAlign">
                <div className="homeMainHero">
                    <div className="homeMainHeaders">
                        <h1>KNP Media.</h1>
                        <p>Helping businesses succeed online</p>
                    </div>
                    <div className="homeMainBlob"></div>
                </div>
                <div className="homeDecorationalMouse">
                    <div></div>
                </div>
            </section> 
            <section className="servicesAlign" id="services">
                <div className="services">
                    <div className="servicesInfo">
                        <p className="servicesSubHeader">Our Services</p>
                        <h2>Google Advertising</h2>
                        <p className="servicesDescription">We only offer one thing at KNP Media and that is Google Ads but we do it extremely well... If you want high performing ads and clear statistics, we are perfect for your business. <br /><br /> Stop wasting your money on ineffective marketing ads, it’s time to join us, scale your business and blow up sales. </p>
                        <Link href="/#contact">
                            <button onMouseEnter={props.cursorEnter} onMouseLeave={props.cursorLeave}>Get In Touch</button>
                        </Link>
                    </div>
                    <i className="fa-brands fa-google aboutGoogleIcon"></i>
                </div>
            </section>  
            <section className="about" id="about">
                <h3>About Us</h3>
                <p>
                    Founded in 2022 by Kai Pereira, KNP Media is your one stop agency for Google Ads. From Fortune 100 companies to startups, KNP Media will ensure the success of your ads through authentic marketing strategies!<br /><br />
                    We partner with our clients to make the most effective ads targeted towards your audience and your company goals while keeping clear communication.
                </p>
                <div className="aboutButtonLayer">
                    <Link href="/#contact">
                        <button onMouseEnter={props.cursorEnter} onMouseLeave={props.cursorLeave}>Get In Touch</button>
                    </Link>
                </div>
            </section>
            <section className="contactAlign" id="contact">
                <div className="contact">
                    <div className="contactText">
                        <p className="contactTextSubHeader">Contact</p>
                        <h1>Let&apos;s Talk!</h1>
                        <p className="contactTextDescription">Send us a message through the form below or even contact us directly at kaipereira2020@gmail.com if you have a general inquiry or interest in our services!</p>
                    </div>
                    <form className="contactForm" onSubmit={sendEmail} ref={form}>
                        <div>
                            <p className="contactFormName">* Name</p>
                            <input type="text" className="contactFormInput" placeholder="John Doe" name="first_name" required/>
                        </div>
                        <div>
                            <p className="contactFormName">* Email</p>
                            <input type="text" className="contactFormInput" placeholder="JohnDoe@service.com" name="email" required/>
                        </div>
                        <div className="contactFormInputSpan2">
                            <p className="contactFormName">* Reason</p>
                            <input type="text" className="contactFormInput" placeholder="Working Together" name="subject" required/>
                        </div>
                        <div className="contactFormInputSpan2">
                            <p className="contactFormName">* Reason</p>
                            <textarea type="text" className="contactFormTextarea" placeholder="Hi KNP Media, we would love to work with you to promote our website and Facebook using Google Ads!" name="message" required/>
                        </div>
                        <div className="contactFormSubmitAlign">
                            <button onMouseEnter={props.cursorEnter} onMouseLeave={props.cursorLeave}>Send Message</button>
                        </div>
                    </form>
                </div>
            </section>
        </main>
    )
}
