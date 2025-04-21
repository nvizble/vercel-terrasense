import "./forms.css";
import Container from 'react-bootstrap/Container';
import React, { useState, memo, useEffect } from 'react';

export const FormField = memo(({ 
  id, 
  label, 
  type = 'text', 
  placeholder, 
  maxLength, 
  rows,
  value,
  onChange,
  error,
  validated,
  formatInput
}) => {
  const fieldStatus = validated ? (error ? 'error' : 'success') : '';
  
  const handleChange = (e) => {
    let newValue = e.target.value;
    
    if (formatInput) {
      newValue = formatInput(newValue);
    }
    
    onChange(id, newValue);
  };
  
  return (
    <div className={`input-contact-form controle-formulario ${fieldStatus}`}>
      <label htmlFor={id}>{label}</label>
      {type === 'textarea' ? (
        <textarea
          id={id}
          rows={rows || 4}
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
        />
      ) : (
        <input
          type={type}
          id={id}
          placeholder={placeholder}
          maxLength={maxLength}
          value={value}
          onChange={handleChange}
        />
      )}
      {error && (
        <div>
          <i className="fa-exclamation-circle"></i>
          <small>{error}</small>
        </div>
      )}
      {!error && validated && (
        <div>
          <i className="fa-check-circle"></i>
        </div>
      )}
    </div>
  );
});

const ContactUs = () => {
  const initialFormState = {
    nome: '',
    email: '',
    whatsapp: '',
    customMessage: ''
  };

  const [formData, setFormData] = useState(initialFormState);
  const [formErrors, setFormErrors] = useState({});
  const [formMessage, setFormMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [fieldsValidated, setFieldsValidated] = useState(false);

  const handleChange = (id, value) => {
    setFormData(prevData => ({
      ...prevData,
      [id]: value
    }));
    
    if (fieldsValidated) {
      const fieldError = validateField(id, value);
      setFormErrors(prevErrors => ({
        ...prevErrors,
        [id]: fieldError
      }));
    }

    else if (formErrors[id]) {
      setFormErrors(prevErrors => ({
        ...prevErrors,
        [id]: ''
      }));
    }
  };

  // Format phone number as user types: (99) 99999-9999
  const formatPhoneNumber = (value) => {
    const digits = value.replace(/\D/g, '');
    
    if (digits.length <= 2) {
      return `(${digits}`;
    } else if (digits.length <= 7) {
      return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
    } else if (digits.length <= 11) {
      return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
    } else {
      return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7, 11)}`;
    }
  };

  const isValidPhoneNumber = (phone) => {
    const digits = phone.replace(/\D/g, '');
    
    if (digits.length < 10 || digits.length > 11) {
      return false;
    }
    
    const areaCode = parseInt(digits.slice(0, 2));
    if (areaCode < 11 || areaCode > 99) {
      return false;
    }
    
    const allSameDigit = /^(\d)\1+$/.test(digits);
    if (allSameDigit) {
      return false;
    }
    
    return true;
  };

  const validateField = (id, value) => {
    switch(id) {
      case 'nome':
        if (!value.trim()) return 'O nome é obrigatório';
        if (!isFullName(value)) return 'Por favor, insira seu nome completo (ex.: João Silva).';
        return '';
      
      case 'email':
        if (!value.trim()) return 'O e-mail é obrigatório.';
        if (!isValidEmail(value)) return 'Por favor, insira um email válido.';
        return '';
      
      case 'whatsapp':
        if (!value.trim()) return 'O whatsapp é obrigatório.';
        if (!isValidPhoneNumber(value)) return 'Por favor, digite um número de whatsapp válido.';
        return '';
      
      case 'customMessage':
        if (!value.trim()) return 'A mensagem é obrigatória.';
        if (value.length < 30) return 'A mensagem deve ter no mínimo 30 caracteres.';
        if (value.length > 500) return 'A mensagem não pode ter mais de 500 caracteres.';
        return '';
      
      default:
        return '';
    }
  };

  const validateForm = () => {
    const errors = {};
    
    Object.keys(formData).forEach(fieldId => {
      const error = validateField(fieldId, formData[fieldId]);
      if (error) {
        errors[fieldId] = error;
      }
    });

    return errors;
  };

  const isFullName = (name) => {
    const nameParts = name.trim().split(' ').filter(part => part.length > 1);
    return nameParts.length >= 2;
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    setFormErrors(errors);
    setIsSubmitted(true);
    setFieldsValidated(true);

    if (Object.keys(errors).length === 0) {
      setFormMessage('O formulário foi enviado com sucesso!');
      
      console.log('Form submitted:', formData);
      
      // Optional: Reset form after successful submission
      // setFormData(initialFormState);
      // setFieldsValidated(false);
    } else {
      setFormMessage('Por favor, preencha todos os campos corretamente antes de enviar.');
    }
  };

  useEffect(() => {
    if (formData.whatsapp) {
      setFormData(prev => ({
        ...prev,
        whatsapp: formatPhoneNumber(prev.whatsapp)
      }));
    }
  }, []);

  return (
    <Container fluid
      id="contato"
      style={{ backgroundImage: 'url(./images/background-images/background_pattern.svg)', backgroundRepeat: 'no-repeat', backgroundPosition: 'top center' }}
    >
      <Container className="container-fale-conosco">
        <div className="img-fale-conosco">
          <img src="./images/terrasense/terrasense_logovertical_branca.svg" alt="Terra Sense AI Logo Vertical Branca" />
        </div>
        <div className="container-formulario-contato">
          <div className="forms-title">
            <h2>Fale Conosco</h2>
          </div>
          <div className="formulario-contato">
            <form className="contact-form" onSubmit={handleSubmit} id="contact-form">
              <FormField 
                id="nome" 
                label="Nome" 
                placeholder="Digite o seu nome completo"
                value={formData.nome}
                onChange={handleChange}
                error={formErrors.nome}
                validated={fieldsValidated}
              />
              
              <FormField 
                id="email" 
                label="E-mail" 
                type="email" 
                placeholder="Digite o seu e-mail"
                value={formData.email}
                onChange={handleChange}
                error={formErrors.email}
                validated={fieldsValidated}
              />
              
              <FormField 
                id="whatsapp" 
                label="WhatsApp" 
                placeholder="Digite o número do seu whatsapp" 
                maxLength="16" 
                value={formData.whatsapp}
                onChange={handleChange}
                error={formErrors.whatsapp}
                validated={fieldsValidated}
                formatInput={formatPhoneNumber}
              />
              
              <FormField 
                id="customMessage" 
                label="Mensagem" 
                type="textarea" 
                placeholder="Envie-nos uma mensagem" 
                rows={4}
                value={formData.customMessage}
                onChange={handleChange}
                error={formErrors.customMessage}
                validated={fieldsValidated}
              />
              
              <div className={`input-contact-form validation-form ${isSubmitted ? 'visible' : ''}`}>
                <small>{formMessage}</small>
              </div>
              
              <button type="submit" className="btn-filled" style={{ width: '100%' }}>
                Enviar
              </button>
            </form>
          </div>
        </div>
      </Container>
    </Container>
  );
};

export { ContactUs };