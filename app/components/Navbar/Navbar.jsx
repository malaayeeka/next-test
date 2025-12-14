
"use client";

import { useState } from "react";
import Link from "next/link";
import './Nav.css'
export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <h2 className="logo">MySite</h2>

      {/* Hamburger */}
      <div className="hamburger" onClick={() => setOpen(!open)}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul className={`nav-links ${open ? "active" : ""}`}>
        <li><Link href="/" onClick={() => setOpen(false)}>Home</Link></li>
        <li><Link href="/about" onClick={() => setOpen(false)}>About</Link></li>
        <li><Link href="/contact" onClick={() => setOpen(false)}>Contact</Link></li>
      </ul>
    </nav>
  );
}
