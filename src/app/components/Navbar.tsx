import Link from "next/link";
import Image from "next/image";
import Logo from "../../../public/logo.webp";

interface NavLink {
  label: string;
  url: string;
}

const NavLinks = [
  { label: "Home", url: "/" },
  { label: "SDP", url: "/sdp" },
  { label: "Services", url: "/services" },
];

const Navbar: React.FC = () => {
  return (
    <nav className="bg-[#243887] header-area ">
      <div className="container mx-auto flex items-center justify-between">
        <div>
          <Image
            style={{
              maxWidth: "200px",
              width: "100%",
              height: "auto",
            }}
            src={Logo}
            alt="Logo"
            priority
          />
        </div>
        <ul className="flex text-white">
          {NavLinks.map((link, index) => (
            <li key={index} className="px-5">
              <Link href={link.url}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
