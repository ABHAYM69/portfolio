import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className="cta">
      <p className="cta-text">
        Let's Create Something Together!
        <br className="sm:block-hidden" />
        <span className="text-xl">Mail me at:</span>{" "}
        <span className="text-xl blue-gradient_text font-semibold drop-shadow">
          {" "}
          mishraabhay@gmail.com
        </span>
      </p>
      <Link to="/contact" className="btn">
        Contact
      </Link>
      <Link
        to="https://drive.google.com/file/d/1ixweU4jr2AfaWQ3YkdQU_LavX2r3BieD/view?usp=sharing"
        target="_blank"
        className="btn"
      >
        View Resume
      </Link>
      <Link
        to="https://www.linkedin.com/in/abhey-mishra-78930b25a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
        target="_blank"
        className="btn"
      >
        LinkedIn
      </Link>
    </section>
  );
};

export default CTA;
