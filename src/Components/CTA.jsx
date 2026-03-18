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
          singh.harsh0447@gmail.com
        </span>
      </p>
      <Link to="/contact" className="btn">
        Contact
      </Link>
      <Link
        to="https://drive.google.com/file/d/1qclGaAxeEX2K5VXHFnWzhH15o4sE8QHy/view?usp=sharing"
        target="_blank"
        className="btn"
      >
        View Resume
      </Link>
      <Link
        to="https://www.linkedin.com/in/harshdeep-singh-3607b81ba/"
        target="_blank"
        className="btn"
      >
        LinkedIn
      </Link>
    </section>
  );
};

export default CTA;
