import './styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
function Footer() {

  const linkedin = 'https://www.linkedin.com/in/marianacousseiro/';
  const landingPage = 'https://limatainer.vercel.app/';

  return (
    <footer className="text-center text-lg-start bg-primary footer">
      <section className="d-flex justify-content-center p-4 border-bottom">
        <div className="me-5 d-none d-lg-block">
          <span>Get connected with Mariana:</span>
        </div>
        <div>
          <a href={linkedin} className="me-4 text-reset">
            <FontAwesomeIcon icon={faLinkedin} className="icone-awesome" />
          </a>
          <a href={landingPage} className="me-4 text-reset">
            <FontAwesomeIcon icon={faSpinner} className="icone-awesome" />
          </a>
        </div>
      </section>
      <div className="text-center p-4 copyrighty">
        © 2022
        <a className="text-reset fw-bold" href="https://github.com/limatainer"> limatainer</a>
      </div>

    </footer>
  )
};

export default Footer;