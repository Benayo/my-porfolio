import { HashLink as Link } from "react-router-hash-link";

const ThankYou = () => {
  return (
    <div id="thankyou" className="bg-primart items-center p-4 font-body">
      <h1 className="font-bold text-4xl text-secondary-100">Thanks!</h1>
      <p className="text-secondary-200">
        The form was submitted successfully. Return{" "}
        <Link
          className="text-tertairy-100 font-semibold cursor-pointer"
          href="#home"
        >
          home.
        </Link>
      </p>
    </div>
  );
};

export default ThankYou;
