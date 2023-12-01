import Link from "next/link";

export default function About() {
  return (
    <div>
      <div className="_Navbar">
        <Link className="links" href="/">
          Home
        </Link>
        <Link className="links" href="/about">
          About
        </Link>
      </div>
      <div className="_Header">
        <h1>International Techtack-Technologies</h1>
      </div>
      <h1>About Page</h1>
    </div>
  );
}
