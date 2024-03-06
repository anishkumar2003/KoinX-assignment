function Nav() {
  return (
    <div className=" flex px-4 nav w-full md:flex md justify-between md:px-20 items-center">
      <div className="log">
        <img
          src="https://www.koinx.com/_next/static/media/Logo.5f2ad8d5.svg"
          alt="logo"
        />
      </div>
      <div className="md:hidden">
        <h1>&#9776;</h1>
      </div>
      <div className="hidden navitems md:flex items-center gap-4">
        <ul className="md:flex md:gap-5 text-sm font-bold">
          <li>Crypto Taxes</li>
          <li>Free Tools</li>
          <li> Resource center</li>
        </ul>
        <button
          className="text-white px-3 py-1 rounded-lg"
          style={{ backgroundColor: "blue" }}
        >
          {" "}
          Get Started
        </button>
      </div>
    </div>
  );
}
export default Nav;
