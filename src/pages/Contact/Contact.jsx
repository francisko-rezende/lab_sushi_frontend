import React, { useState } from "react";

export const Contact = () => {
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, contact, message });
  };

  return (
    <>
      <h1>Entre em contato</h1>
      <form onSubmit={handleSubmit}>
        <div style={{ display: "grid" }}>
          <label htmlFor="email">Email</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            name="email"
            id="email"
          />
        </div>

        <div style={{ display: "grid" }}>
          <label htmlFor="contact">Contato</label>
          <input
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            type="text"
            name="contact"
            id="contact"
          />
        </div>

        <div style={{ display: "grid" }}>
          <label htmlFor="message">Mensagem</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            name="message"
            id="message"
            cols="30"
            rows="10"
          ></textarea>
        </div>
        <button>Enviar</button>
      </form>
    </>
  );
};
