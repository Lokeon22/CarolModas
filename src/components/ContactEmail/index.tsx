import { useRef } from "react";
import emailjs from "@emailjs/browser";

import { Form } from "./style";

export function ContactEmail() {
  const form = useRef(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form) {
      emailjs
        .sendForm(
          "gmailMessage",
          "template_jhia2yj",
          e.currentTarget,
          "yRt5zgHhFs5cHJs2e"
        )
        .then(
          (result) => {
            alert("Mensagem enviada com sucesso!");
          },
          (error) => {
            alert(error.message);
          }
        );
      e.currentTarget.reset();
    }
  };
  return (
    <Form ref={form} onSubmit={sendEmail}>
      <div>
        <input type="text" placeholder="Nome" name="name" />
        <input type="email" placeholder="Email" name="email" required />
      </div>
      <input type="text" placeholder="Assunto" name="assunto" />
      <textarea placeholder="Mensagem" name="message" required />
      <button type="submit">Enviar</button>
    </Form>
  );
}
