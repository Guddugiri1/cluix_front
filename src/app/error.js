"use client";
import Link from "next/link";
import React from "react";

const Error = () => {
  return (
    <div>
      <div className="grid h-screen place-content-center bg-white px-4">
        <div className="text-center">
          <h1 className="text-9xl font-black text-gray-200">404</h1>
          <p className="text-2xl font-bold tracking-tight text-[var(--light-blue)] sm:text-4xl">
            Uh-oh!
          </p>
          <p className="mt-4 text-[var(--light-blue)]">
            We can&apos;t find that page.
          </p>
          <Link
            href="/"
            className="mt-6 inline-block rounded bg-[var(--light-blue)] px-5 py-3 text-[18px] font-medium text-white  focus:outline-none focus:ring"
          >
            Go Back Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Error;
