const Navbar = () => {
    return (
      <nav className="flex justify-between items-center p-4 shadow-md">
        <h1 className="text-xl font-bold">Chuly</h1>
        <div className="flex gap-4">
          <input
            type="text"
            placeholder="Search"
            className="border px-3 py-1 rounded-md"
          />
          <button className="border px-4 py-1 rounded-md">Filter</button>
        </div>
      </nav>
    );
  };
  export default Navbar;