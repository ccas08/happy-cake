function Contact() {
    return (
      <div className="container">
        <h1>Cuéntanos, ¿en qué te podemos ayudar?</h1>
        <div className="form-group">
          <label htmlFor="email">Correo:</label>
          <input type="email" id="email" placeholder="name@example.com" />
        </div>
        <div className="form-group">
          <label htmlFor="description">Descripción</label>
          <textarea id="description" rows="4"></textarea>
        </div>
        <button type="submit">Enviar</button>
      </div>
    );
  }
  
  export default Contact;
  