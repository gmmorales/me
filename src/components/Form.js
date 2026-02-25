import React, { useState } from "react";
import { validateEmail } from "../utils/utils.js";
import "./styles/Form.css";
import swal from "sweetalert";

// const urlApi = "https://portfolio-contact-form-api.vercel.app/api/data";
const urlApi  = 'https://formsubmit.co/gustavom.morales@gmail.com'

const Form = () => {
  const [data, setData] = useState({
    fullname: "",
    email: "",
    message: "",
  });
  const [error, setError] = useState(false);
  const [required, setRequired] = useState({});

  // ==========================================
  // INICIO CÓDIGO AGREGADO: Lógica PGP
  // ==========================================
  const [copied, setCopied] = useState(false);

  const PGP_KEY = `-----BEGIN PGP PUBLIC KEY BLOCK-----
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
SoT2BPLMzs0kKWrTo8ZFxwkQFPWfANOuhw==
=GO7f
-----END PGP PUBLIC KEY BLOCK-----`;

  const handleCopy = () => {
    navigator.clipboard.writeText(PGP_KEY);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  // ==========================================
  // FIN CÓDIGO AGREGADO: Lógica PGP
  // ==========================================

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
    setRequired(
      validate({
        ...data,
        [e.target.name]: e.target.value,
      })
    );
  };

  const validate = (data) => {
    let errors = {};
    if (!data.fullname) errors.fullname = "Fullname is Required";
    if (!data.email || !validateEmail(data.email))
      errors.email = "Email isRequired";
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(true);
    if (
      data.email.length === 0 ||
      data.fullname.length === 0 ||
      required.hasOwnProperty("fullname") ||
      required.hasOwnProperty("email")
    ) {
      return swal({
        title: "Error",
        text: "Debe completar el formulario correctamente antes de enviarlo.",
        icon: "error",
      }).then(() => setError(false));
    }
    const values = JSON.stringify(data);
    fetch(urlApi, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: values,
    })
      .then(() => {
        swal({
          title: "Formulario Enviado",
          text: "Gracias por tus comentarios, me comunicare con usted en la brevedad posible.",
          icon: "success",
        }).then(() => {
          setData({
            fullname: "",
            email: "",
            message: "",
          });
          setError(false);
        });
      })
      .catch(() => {
        swal({
          title: "Error",
          text: "Ha ocurrido un error inesperado, por favor intenta nuevamente.",
          icon: "error",
        }).then(() => setError(false));
      });
  };

  return (
    <> {/* Fragmento necesario para envolver el form y la llave */}
      <form id="valid-form" onSubmit={handleSubmit}>
        <div className="inputs-container">
          <div className="input-div">
            <label className="form-paceholder">Nombre Completo</label>
            <input
              type="text"
              name="fullname"
              value={data.fullname}
              placeholder="Nombre Completo"
              onChange={handleChange}
              className={required.hasOwnProperty("fullname") ? "error" : null}
            />
          </div>
          <div className="input-div">
            <label className="form-paceholder">Email</label>
            <input
              name="email"
              type="email"
              value={data.email}
              placeholder="Email"
              onChange={handleChange}
              className={required.hasOwnProperty("email") ? "error" : null}
            />
          </div>
        </div>
        <div className="textarea-container">
          <textarea
            placeholder="Mensaje"
            maxLength="5000"
            name="message"
            value={data.message}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="btn-form-container">
          <button
            type="submit"
            className="btn btn-primary send"
            id="input"
            disabled={error}
          >
            Enviar
          </button>
        </div>
      </form>

      {/* ========================================== */}
      {/* INICIO CÓDIGO AGREGADO: Bloque Visual PGP  */}
      {/* ========================================== */}
      <div className="pgp-container">
        <div className="pgp-header">
          <span>PGP Public Key</span>
          <button 
            type="button" 
            className="btn-copy" 
            onClick={handleCopy}
          >
            {copied ? "¡Copiado!" : "Copiar llave"}
          </button>
        </div>
        <pre className="pgp-content">
          {PGP_KEY}
        </pre>
      </div>
      {/* ========================================== */}
      {/* FIN CÓDIGO AGREGADO: Bloque Visual PGP     */}
      {/* ========================================== */}
    </>
  );
};

export default Form;