/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link'
import React from 'react'
import styles from "@/styles/Home.module.css";
import LetsTalkButton from '@/components/buttons/headerBtn';


const Header = () => {
  return (
    <div className="w-100 position-absolute top-0 left-0" style={{ zIndex: "999", height: '150px' }}>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Navbar</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" href="#">Home</Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link active" aria-current="page" href="#">About Us</Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link active" aria-current="page" href="#">Services</Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link active" aria-current="page" href="#">Products</Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link active" aria-current="page" href="#">Our Works</Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link active" aria-current="page" href="#">Contact Us</Link>
              </li>
            </ul>
            <LetsTalkButton />
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Header