import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className="_Navbar">
        <Link className="links" href="/">
          Home
        </Link>
        <Link className="links" href="/About">
          About
        </Link>
      </div>
      <div className="_Header">
        <h1>International Techtack-Technologies</h1>
        <p>Technologies For Everyone.</p>
      </div>
      <div className="_hero-img">
        <h3>Community Developer</h3>
      </div>
      <div className="footer">
        <p>Copyright &copy; 2023 International Techtack-Technologies</p>
      </div>
    </div>
  );
}
