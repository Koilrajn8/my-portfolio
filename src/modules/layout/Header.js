import { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X, Home, FolderKanban, Info, Phone, Mail, MapPin } from "lucide-react";

const links = [
  { name: "Home", path: "/", icon: Home },
  { name: "Projects", path: "/projects", icon: FolderKanban },
  { name: "About", path: "#", icon: Info },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [aboutDesktopOpen, setAboutDesktopOpen] = useState(false);
  const [aboutMobileOpen, setAboutMobileOpen] = useState(false);

  const mobileMenuRef = useRef(null);
  const mobileAboutRef = useRef(null);
  const desktopAboutRef = useRef(null);
  const mobileButtonRef = useRef(null);

  // Close menus when clicking outside
  useEffect(() => {
    function handleClickOutside(e) {
      // Mobile menu
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(e.target) &&
        mobileButtonRef.current &&
        !mobileButtonRef.current.contains(e.target)
      ) {
        setMobileOpen(false);
        setAboutMobileOpen(false);
      }

      // Desktop About
      if (desktopAboutRef.current && !desktopAboutRef.current.contains(e.target)) {
        setAboutDesktopOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* Brand */}
        <h1 className="text-lg font-bold">
          Koilraj <span className="font-light">| Developer Portfolio</span>
        </h1>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-2">
          {links.map(({ name, path, icon: Icon }) => (
            <div
              key={name}
              ref={name === "About" ? desktopAboutRef : null}
              className="relative group"
              onMouseEnter={() => name === "About" && setAboutDesktopOpen(true)}
              onMouseLeave={() => name === "About" && setAboutDesktopOpen(false)}
            >
              {name === "About" ? (
                <button
                  type="button"
                  className="inline-flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                >
                  <Icon className="h-4 w-4 opacity-70 group-hover:opacity-100" />
                  {name}
                </button>
              ) : (
                <NavLink
                  to={path}
                  className={({ isActive }) =>
                    `inline-flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-medium transition relative ${
                      isActive
                        ? "bg-indigo-600 text-white"
                        : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                    }`
                  }
                >
                  <Icon className="h-4 w-4 opacity-70 group-hover:opacity-100" />
                  {name}
                </NavLink>
              )}

              {/* Desktop About Dropdown */}
              {name === "About" && aboutDesktopOpen && (
                <div className="absolute top-full mt-2 flex flex-col items-start rounded-md bg-white shadow-md border px-3 py-2 text-sm space-y-2">
                  <a href="tel:+919632995691" className="flex items-center gap-2 text-gray-700 hover:text-indigo-600">
                    <Phone className="h-4 w-4" /> +91 9632995691
                  </a>
                  <a href="mailto:koilrajn8@gmail.com" className="flex items-center gap-2 text-gray-700 hover:text-indigo-600">
                    <Mail className="h-4 w-4" /> koilrajn8@gmail.com
                  </a>
                  <a
                    href="https://maps.google.com/?q=Bangalore,India"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-gray-700 hover:text-indigo-600"
                  >
                    <MapPin className="h-4 w-4" /> Bangalore, India
                  </a>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Mobile Hamburger */}
        <button
          ref={mobileButtonRef}
          onClick={() => setMobileOpen((prev) => !prev)}
          className="md:hidden inline-flex items-center justify-center rounded-xl p-2 text-gray-700 hover:bg-gray-100 focus:outline-none"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      <div
        ref={mobileMenuRef}
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="border-t bg-white shadow-lg">
          <ul className="flex flex-col p-2 space-y-1">
            {links.map(({ name, path, icon: Icon }) => (
              <li key={name} className="relative">
                {name === "About" ? (
                  <>
                    <button
                      ref={mobileAboutRef}
                      onClick={() => setAboutMobileOpen((prev) => !prev)}
                      className="flex items-center gap-3 rounded-xl px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full text-left"
                    >
                      <Icon className="h-4 w-4 opacity-70" />
                      {name}
                    </button>
                    {aboutMobileOpen && (
                      <div className="ml-6 mt-1 flex flex-col gap-2 text-sm bg-white border rounded-md shadow px-3 py-2">
                        <a href="tel:+919632995691" className="flex items-center gap-2 text-gray-700 hover:text-indigo-600">
                          <Phone className="h-4 w-4" /> +91 9632995691
                        </a>
                        <a href="mailto:koilrajn8@gmail.com" className="flex items-center gap-2 text-gray-700 hover:text-indigo-600">
                          <Mail className="h-4 w-4" /> koilrajn8@gmail.com
                        </a>
                        <a
                          href="https://maps.google.com/?q=Bangalore,India"
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center gap-2 text-gray-700 hover:text-indigo-600"
                        >
                          <MapPin className="h-4 w-4" /> Bangalore, India
                        </a>
                      </div>
                    )}
                  </>
                ) : (
                  <NavLink
                    to={path}
                    onClick={() => setMobileOpen(false)}
                    className={({ isActive }) =>
                      `flex items-center gap-3 rounded-xl px-3 py-2 text-sm font-medium transition ${
                        isActive ? "bg-indigo-600 text-white" : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                      }`
                    }
                  >
                    <Icon className="h-4 w-4 opacity-70" />
                    {name}
                  </NavLink>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
