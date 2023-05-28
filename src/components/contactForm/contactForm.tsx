import styles from "./contactForm.module.scss";

export default function ContactForm () {
  return(
    <div className={styles.container}>
      <form name="contact" action="/" method="POST" data-netlify="true" netlify-honeypot="bot-field">
        <input type="hidden" name="wh-contact-form" value="contact" />
        <div className={styles.hidden}>
          <label>
            Don’t fill this out if you’re human: <input name="bot-field" />
          </label>
        </div>
        <h2>Get in Touch</h2>
        <fieldset>
          <label htmlFor="name">
            Name:
            <input id="name" name="name" type="text" required />
          </label>
          <label htmlFor="email">
            Email:
            <input id="email" name="email" type="email" required />
          </label>
          <label htmlFor="phone">
            Phone Number:
            <input id="phone" name="phone" type="tel" />
          </label>
          <label htmlFor="info">
            How can we help you?
            <textarea id="info" name="info"></textarea>
          </label>
          <button type="submit">Submit</button>
        </fieldset>
      </form>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3262.134651108401!2d-89.73150218407818!3d35.15326248032069!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x887f9f19e3ed0a4b%3A0x4c7c2f7f3bd6eb23!2sWoodland%20Hills%20Chuch%20of%20Christ!5e0!3m2!1sen!2sus!4v1674850971348!5m2!1sen!2sus"
        width="800"
        height="450"
        loading="lazy"
      ></iframe>
    </div>
  )
}