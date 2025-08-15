import React, { useState } from 'react';
import '../Contato/Contato.css'

//FORMATAÇÂO NUMERO
import ReactInputMask from 'react-input-mask';

// ICONES E FIGURAS
import { FaWhatsapp } from 'react-icons/fa';
import { FaMap } from 'react-icons/fa';
import { FaRocketchat } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';



function Contato() {
  // Estado para controlar se o campo de upload aparece
  const [mostrarUpload, setMostrarUpload] = useState(false);

  // Função que atualiza o estado conforme a opção selecionada
  function handleRadioChange(event) {
    const valor = event.target.value;
    if (valor === 'Parcerias') {
      setMostrarUpload(true);
    } else {
      setMostrarUpload(false);
    }
  }

  return (
    <div>

      <main className="content">
        <section className="content-section ">
          {/* TÍTULO */}
          <div className="title-main">
            <h1 className="title-h1">Contate-nos</h1>
            <address className="sub-title">
              Estamos esperando por você!!
            </address>
          </div>

          {/* SEÇÃO DIVIDIDA */}
          <div className="content-base z-10" >
            {/* LADO DIREITO */}
            <div className="left-informations ">
              <div className="container-left ">
                {/* TÍTULO DAS INFORMAÇÕES */}
                <div className="title-information">
                  <h2>Informações de Contato</h2>
                  <h3>Entre em contato Conosco</h3>
                </div>

                {/* INFORMAÇÕES DE CONTATO */}
                <div className="contact-information">
                  <div className="iterative-information">
                    <FaRocketchat className="fa-solid fa-phone icon-information"/>
                    <a href="tel:+551833334444">(18) 3333-4444</a><br />
                    <FaWhatsapp className="fa-brands fa-whatsapp icon-information"/>
                    <a href="tel:+5518999998888">(18) 99999-8888</a>
                  </div>

                  <div className="iterative-information">
                    <FaEnvelope className="fa-solid fa-envelope icon-information"/>
                    <address>
                      <a href="mailto:Memoriasdevo@outlook.com">Memoriasdevo@outlook.com</a>
                    </address>
                  </div>

                  <div className="iterative-information">
                    <FaMap className="fa-solid fa-map-location-dot icon-information"/>
                    <address className="location-text">
                      <a href='https://maps.app.goo.gl/uppUhjQS9aAbDeJr6' target='_blank'>Av. Manoel Goulart Nº 2881, <br /> Vila Santa Helena, <br />Presidente Prudente - SP</a>
                    </address>
                  </div>

                  
                </div>
              </div>
            </div>

            {/* LADO ESQUERDO -- FORMULARIO */}
            <div className="right-information ">
              <div className="form-container">
                <form action="https://formsubmit.co/lucasmartines0803@gmail.com" method="POST" encType="multipart/form-data">
                  <div className="form-group">
                    <input type="text" name="name" placeholder="Nome" required />
                  </div>

                  <div className="form-group">
                    <input type="text" name="last-name" placeholder="Sobrenome" required />
                  </div>

                  <div className="form-group">
                    <input type="email" name="email" placeholder="Endereço de Email" required />
                  </div>

                  <div className="form-group">
                    <input type="tel" name="telephone" placeholder="Número de Telefone" required />
                  </div>

                  <div className="form-group">
                    <label className="radio-label">Assunto</label>
                    <div className="radio-group" onChange={handleRadioChange}>
                      <label>
                        <input type="radio" name="Input" value="Elogios" /> Elogios!
                      </label>
                      <label>
                        <input type="radio" name="Input" value="Reclamações" /> Reclamações!
                      </label>
                      <label>
                        <input type="radio" name="Input" value="Parcerias" /> Parcerias!
                      </label>
                    </div>
                  </div>

                  {/* Campo de upload aparece só se mostrar Upload se for true */}
                  <div className={`form-group ${mostrarUpload ? '' : 'hidden'}`} id="uploadArquivo">
                    <label>Envie um anexo:</label>
                    <input type="file" name="arquivo" />
                  </div>

                  <div className="form-group">
                    <textarea name="message" rows="6" placeholder="Escreva sua mensagem..." required></textarea>
                  </div>

                  <button type="submit">Enviar</button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Contato;
