import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

function Navbar() {
  const [isNavbarTrans, setIsNavbarTrans] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsNavbarTrans(true);
      } else {
        setIsNavbarTrans(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav
        className={`navbar navbar-expand-lg navbar-dark py-0 fixed-top bg-secondary ${
          isNavbarTrans ? "bg-secondary opacity-75" : ""
        }`}
      >
        <div className="container d-flex justify-content-between">
          <a className="navbar-brand" href="#">
            <Link href="/">
              <Image src="/favicon.ico" alt="" width={50} height={50} />
            </Link>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setIsNavbarTrans(true)}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={`collapse navbar-collapse text-center`}
            id="navbarNavDropdown"
          >
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="no-dec" href="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="no-dec" href="/services">
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link className="no-dec" href="/products">
                  Products
                </Link>
              </li>
              <li className="nav-item">
                <Link className="no-dec" href="/contact">
                  Contact
                </Link>
              </li>
              <li className="nav-item">
                <Link className="no-dec" href="/gallery">
                  Gallery
                </Link>
              </li>
            </ul>
            <div className="d-flex align-items-center justify-content-center mx-2 d-none d-md-block">
              {" "}
              <div className="form-check form-switch d-none">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="flexSwitchCheckDefault"
                />
                <label
                  className="form-check-label"
                  htmlFor="flexSwitchCheckDefault"
                ></label>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <h1 className="spacer"></h1>
    </>
  );
}

export default Navbar;
