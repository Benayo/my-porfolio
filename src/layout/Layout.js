const Layout = (props) => {
  return (
    <div className="w-[100%] h-[100%] m-0 p-0 overflow-hidden">
      {props.children}
    </div>
  );
};

export default Layout;
 