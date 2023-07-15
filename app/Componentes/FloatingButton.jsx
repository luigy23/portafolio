"use client"
import React, { useState, useEffect } from 'react';

function FloatingButton() {
  const [message, setMessage] = useState('Hola!');

  useEffect(() => {
    const interval = setInterval(() => {
      setMessage(getRandomMessage());
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const getRandomMessage = () => {
    const messages = [
      "Visibilidad online",
      "Más clientes potenciales",
      "Contacto directo",
      "Mejora imagen",
      "Información actualizada",
      "Vitrina productos y servicios",
      "Genera confianza",
      "Posiciona como experto",
      "Conoce tus clientes",
      "Genera oportunidades"
      ];
    return messages[Math.floor(Math.random() * messages.length)]; 
  }

  return (
    <button className="fixed bottom-5 right-5 bg-blue-500 text-white font-bold py-2 px-4 rounded-2xl rounded-br-none">
      {message}
    </button>
  );
}

export default FloatingButton;