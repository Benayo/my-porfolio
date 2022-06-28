const Layout = (props) => {
  return (
    <div className="max-h-screen relative font-primary  mx-[6.25rem] ">
      {props.children}
    </div>
  );
};

export default Layout;
