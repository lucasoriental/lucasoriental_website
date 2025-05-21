"use client";

import React from "react";
import Link from "next/link";

const HiringSection = () => {
  return (
    <div>
      <h1>Welcome to the Hiring Page</h1>
      <Link href="/freelance">Freelance</Link>
      <Link href="/">Home</Link>
    </div>
  );
};

export default HiringSection;
