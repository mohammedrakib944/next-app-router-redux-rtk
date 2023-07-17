import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div>
      <div className="flex items-center gap-4 py-10">
        <Link href="/">Home</Link>
        <Link href="/profile">Profile</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/dashboard">Dashboard</Link>
      </div>
    </div>
  );
};

export default Navbar;
