import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const stored = localStorage.getItem("user");
    if (stored) {
      setUser(JSON.parse(stored));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    navigate("/login");
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50 border-b">
      <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">
        
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img
            src="https://s3.us-west-2.amazonaws.com/royoorders2.0-assets/prods/LTzBW4fQ9xXK2iG1SjWatbp9TWoTtzQNhZzAQkN2.png"
            alt="Tareeqk Logo"
            className="h-6 xs:h-5 sm:h-7 md:h-8 w-auto max-w-[120px]"
          />
          {/* <span className="text-blue-700 font-bold text-lg hidden sm:inline">Tareeqk</span> */}
        </Link>

        {/* User info or login */}
        {user ? (
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 w-full sm:w-auto">
            <span className="text-gray-700 text-sm sm:text-base">
              👋 Hello, <span className="font-semibold text-blue-600">{user.name}</span>
            </span>
            <button
              onClick={handleLogout}
              className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 text-sm sm:text-base w-full sm:w-auto"
            >
              Log Out
            </button>
          </div>
        ) : (
          <Link
            to="/login"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 text-sm sm:text-base w-full sm:w-auto text-center"
          >
            Log In
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
