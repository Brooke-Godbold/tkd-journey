import { useState } from "react";

import "./call-to-action.styles.css";

export default function CallToAction() {
  const [heardFrom, setHeardFrom] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmit, setIsSubmit] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    setIsSubmit(true);

    setHeardFrom("");
    setFullName("");
    setEmail("");
  }

  return (
    <section className="section-cta" id="cta">
      <div className="container">
        <h2 className="heading-secondary margin-bottom-md">
          Start Your Journey Now!
        </h2>
        <div className="grid">
          <div className="cta-form-container">
            <div className="cta-text-box">
              {isSubmit ? (
                <div className="cta-submitted">
                  <h2 className="heading-secondary">Thank You</h2>
                  <p className="cta-text">We'll be in touch shortly!</p>
                </div>
              ) : (
                <>
                  <h2 className="heading-secondary">
                    Your first session is free!
                  </h2>
                  <p className="cta-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc sagittis ut nisi sed convallis. Aliquam sed arcu
                    convallis ipsum consectetur placerat.
                  </p>
                  <form className="cta-form" onSubmit={handleSubmit}>
                    <div>
                      <label for="full-name">Full Name</label>
                      <input
                        id="full-name"
                        type="text"
                        placeholder="John Smith"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        required
                      />
                    </div>

                    <div>
                      <label for="email">Email Address</label>
                      <input
                        id="email"
                        type="email"
                        placeholder="my.name@gmail.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>

                    <div>
                      <label for="select-where">
                        Where did you hear about us?
                      </label>
                      <select
                        value={heardFrom}
                        onChange={(e) => setHeardFrom(e.target.value)}
                        id="select-where"
                        required
                      >
                        <option value="">Please select...</option>
                        <option value="friends">Friends & Family</option>
                        <option value="youtube">YouTube Video</option>
                        <option value="social">Social Media</option>
                        <option value="podcast">Podcast</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <button className="btn btn--outline">Sign up now</button>
                  </form>
                </>
              )}
            </div>
            <div className="cta-img"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
