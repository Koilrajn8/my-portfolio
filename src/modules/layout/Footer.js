import { FaTwitter, FaInstagram, FaLinkedinIn, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <p>© 2025 Koilraj | Developer Portfolio</p>

      <div className="flex justify-center space-x-4 mt-3">
        <a
          href="https://x.com/koilraj5?t=fMaSnAN-38AEuy1xx-jvYw&s=08"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-full bg-gray-800 hover:opacity-80 transition"
          style={{ color: "#1DA1F2" }} // Twitter Blue
        >
          <FaTwitter size={18} />
        </a>
        <a
          href="https://www.instagram.com/koilraj_031?igsh=b2M3N3h5eW1ldGhj"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-full bg-gray-800 hover:opacity-80 transition"
          style={{ color: "#E1306C" }} // Instagram Pink
        >
          <FaInstagram size={18} />
        </a>
        <a
          href="https://www.linkedin.com/in/koilraj-m-045447139/"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-full bg-gray-800 hover:opacity-80 transition"
          style={{ color: "#0A66C2" }} // LinkedIn Blue
        >
          <FaLinkedinIn size={18} />
        </a>
        <a
          href="https://github.com/Koilrajn8"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-full bg-gray-800 hover:opacity-80 transition"
          style={{ color: "#ffffff" }} // GitHub White
        >
          <FaGithub size={18} />
        </a>
      </div>
    </footer>
  );
}
