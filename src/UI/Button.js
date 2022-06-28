const Button = (props) => {
  return (
    <div className=" cursor-pointer m-8 bg-primary px-4 py-3 rounded-md">
      <a href="/" className="  no-underline text-white uppercase  ">
        {props.children}
      </a>
    </div>
  );
};

export default Button;
