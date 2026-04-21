import Header from "../components/Header";
import Footer from "../components/Footer";
import SectionTitle from "../components/SectionTitle";
import Button from "../components/Button";
import "./Contact.css";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message envoyé ! Nous vous contacterons rapidement.");
  };

  return (
    <div>
      <Header />
      <section className="contact-page">
        <div className="container">
          <SectionTitle>Contactez-nous</SectionTitle>
          
          <div className="contact-content">
            <div className="contact-info">
              <h3>Nos coordonnées</h3>
              <div className="info-item">
                <span className="info-icon">📧</span>
                <p>contact@kumar-construction.com</p>
              </div>
              <div className="info-item">
                <span className="info-icon">📱</span>
                <p>+XXX XXX XXX</p>
              </div>
              <div className="info-item">
                <span className="info-icon">📍</span>
                <p>À compléter</p>
              </div>
              <p className="contact-text">
                Contactez-nous pour discuter de votre projet et obtenir un devis personnalisé.
              </p>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Nom complet</label>
                <input type="text" id="name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" required />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Téléphone</label>
                <input type="tel" id="phone" />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" rows="5" required></textarea>
              </div>
              <Button type="submit">Envoyer le message</Button>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Contact;