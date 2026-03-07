import { Link, useLocation, useNavigate } from "react-router";
import { Button } from "./ui/button";
import { Heart, Menu, X, LogOut } from "lucide-react";
import { useState } from "react";
import { useAuth } from "../../context/AuthContext";

export function Navigation() {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, isAuthenticated, logout } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  const handleLogout = () => {
    logout();
    navigate("/");
    setMobileMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img src="/logo.jpeg" alt="Logo" className="w-15 h-15" />
            <span className="text-xl font-semibold text-gray-900"><b>योगVAHIN</b></span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <Link 
              to="/" 
              className={`text-sm hover:text-indigo-600 transition-colors ${
                isActive('/') ? 'text-indigo-600 font-medium' : 'text-gray-600'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/dashboard" 
              className={`text-sm hover:text-indigo-600 transition-colors ${
                isActive('/dashboard') ? 'text-indigo-600 font-medium' : 'text-gray-600'
              }`}
            >
              Dashboard
            </Link>
            <Link 
              to="/education-hub" 
              className={`text-sm hover:text-indigo-600 transition-colors ${
                isActive('/education-hub') ? 'text-indigo-600 font-medium' : 'text-gray-600'
              }`}
            >
              Education
            </Link>
          </div>

          {/* Desktop Auth Section */}
          <div className="hidden md:flex items-center gap-3">
            {isAuthenticated && user ? (
              <>
                <div className="text-sm text-gray-700">
                  <span className="font-medium">{user.firstName} {user.lastName}</span>
                </div>
                <Button 
                  size="sm" 
                  variant="outline"
                  onClick={handleLogout}
                  className="flex items-center gap-2"
                >
                  <LogOut className="w-4 h-4" />
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Link to="/signin">
                  <Button variant="ghost" size="sm">Sign In</Button>
                </Link>
                <Link to="/signup">
                  <Button size="sm" className="bg-indigo-600 hover:bg-indigo-700">Sign Up</Button>
                </Link>
              </>
            )}
            <Button size="sm" variant="destructive" className="bg-red-500 hover:bg-red-600">
              Emergency Help
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <div className="px-4 py-4 space-y-3">
            <Link 
              to="/" 
              className={`block text-sm hover:text-indigo-600 transition-colors ${
                isActive('/') ? 'text-indigo-600 font-medium' : 'text-gray-600'
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/dashboard" 
              className={`block text-sm hover:text-indigo-600 transition-colors ${
                isActive('/dashboard') ? 'text-indigo-600 font-medium' : 'text-gray-600'
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Dashboard
            </Link>
            <Link 
              to="/education-hub" 
              className={`block text-sm hover:text-indigo-600 transition-colors ${
                isActive('/education-hub') ? 'text-indigo-600 font-medium' : 'text-gray-600'
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Education
            </Link>
            <div className="pt-3 space-y-2">
              {isAuthenticated && user ? (
                <>
                  <div className="px-3 py-2 bg-indigo-50 rounded-md">
                    <p className="text-sm font-medium text-gray-900">{user.firstName} {user.lastName}</p>
                    <p className="text-xs text-gray-600">{user.email}</p>
                  </div>
                  <Button 
                    size="sm" 
                    className="w-full flex items-center justify-center gap-2"
                    onClick={handleLogout}
                  >
                    <LogOut className="w-4 h-4" />
                    Logout
                  </Button>
                </>
              ) : (
                <>
                  <Link to="/signin" onClick={() => setMobileMenuOpen(false)}>
                    <Button variant="outline" size="sm" className="w-full">Sign In</Button>
                  </Link>
                  <Link to="/signup" onClick={() => setMobileMenuOpen(false)}>
                    <Button size="sm" className="w-full bg-indigo-600 hover:bg-indigo-700">Sign Up</Button>
                  </Link>
                </>
              )}
              <Button size="sm" variant="destructive" className="w-full bg-red-500 hover:bg-red-600">
                Emergency Help
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
