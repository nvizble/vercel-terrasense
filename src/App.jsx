import './App.css';
import { Hero } from './components/hero/hero';
import { CustomNavbar } from './components/navbar/navbar';
import { About } from './components/about/about';
import { AgroAI } from './components/agro-ai/agro-ai';
import { Faq } from './components/faq/faq';
import { ContactUs } from './components/forms/forms';
import { Footer } from './components/footer/footer';
import { News } from './components/news/news';
import { Sidebar } from './components/sidebar/sidebar';
import SidebarProvider from './contexts/SidebarContext';
import AuthProvider from './contexts/AuthProvider';
function App() {
  return (
    <AuthProvider>
      <SidebarProvider>
        <div className="App">
          <CustomNavbar />
          <Sidebar />
          <Hero />
          <About />
          <AgroAI />
          <News />
          <Faq />
          <ContactUs />
          <Footer />
        </div>
      </SidebarProvider>
    </AuthProvider>
  );
}

export default App;

