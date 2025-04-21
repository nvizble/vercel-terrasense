import { useSidebar } from "../../contexts/SidebarContext";
import { FormField } from "../forms/forms";
import "./sidebar.css";
import { useState } from "react";
import { useAuth } from "../../contexts/AuthProvider";

const Sidebar = () => {
  const { isOpen, toggleSidebar, isSignIn, toggleSignIn, toggleSignUp } = useSidebar();
  const { login, register } = useAuth();
  const [signUpFormData, setSignUpFormData] = useState({
    nome: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [signInFormData, setSignInFormData] = useState({
    email: '',
    password: ''
  });

  const handleSignInChange = (id, value) => {
    setSignInFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSignUpChange = (id, value) => {
    setSignUpFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSignIn) {
      await login(signInFormData.email, signInFormData.password);
    } else {
      await register(signUpFormData.nome, signUpFormData.email, signUpFormData.password);
    }
    toggleSidebar();
  };

  return (
    <>
      {isOpen && (
        <div 
          className="sidebar-overlay" 
          onClick={toggleSidebar}
        />
      )}
      
      <div className={`sidebar ${isOpen && 'open'}`}>
        <div className="sidebar-header">
          <button className="close-btn" onClick={toggleSidebar}>
            <img src="/images/icons/chevron-icon.svg" alt="Icone de chevron" />
          </button>
        </div>
        <div className="sidebar-content">
          <img
            src="/images/terrasense/terrasense_logovertical_branca.svg"
            alt="Terra Sense AI Logo Vertical Branca"
            id="hero-logo"
          />
          {isSignIn && (
          <>
            <h2>Bem-vindo de volta!</h2>
            <form className="signup-form" onSubmit={handleSubmit}>
              <FormField 
                id="email" 
                label="E-mail" 
                placeholder="Digite o seu e-mail"
                value={signInFormData.email}
                onChange={handleSignInChange}
                error=""
              />
              <FormField 
                id="password" 
                label="Senha" 
                type="password"
                placeholder="********"
                value={signInFormData.password}
                onChange={handleSignInChange}
                error=""
              />
              <button type="submit" className="submit-btn">Entrar</button>
            </form>
            
            <div className="separator">ou</div>
            
            <p className="signup-link" onClick={toggleSignUp}>Não possui uma conta? <b>Cadastre-se</b></p>
          </>
          )}
          {!isSignIn && (
          <>
            <h2>Bem-vindo!</h2>
            <form className="signup-form" onSubmit={handleSubmit}>
              <FormField 
                id="nome" 
                label="Nome" 
                placeholder="Digite o seu nome completo"
                value={signUpFormData.nome}
                onChange={handleSignUpChange}
                error=""
              />
              <FormField 
                id="email" 
                label="E-mail" 
                placeholder="Digite o seu e-mail"
                value={signUpFormData.email}
                onChange={handleSignUpChange}
                error=""
              />
              <FormField 
                id="password" 
                label="Senha"
                type="password" 
                placeholder="********"
                value={signUpFormData.password}
                onChange={handleSignUpChange}
                error=""
              />
              <FormField 
                id="confirmPassword" 
                label="Confirmar Senha"
                type="password" 
                placeholder="********"
                value={signUpFormData.confirmPassword}
                onChange={handleSignUpChange}
                error=""
              />
              <button type="submit" className="submit-btn">Cadastrar</button>
            </form>
            
            <div className="separator">ou</div>
            
            <p className="signin-link" onClick={toggleSignIn}>Voltar para o login</p>
          </>
          )}
        </div>
      </div>
    </>
  );
};

export { Sidebar };
