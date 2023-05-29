import Link from 'next/link';
import React from 'react';

export default function MyNavbar() {
  return (
    <nav className="bg-olive">
      <div className="container mx-auto px-4 lg:px-[100px]">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link className="text-white font-bold text-lg" href="/">
              Adventure Coffee ☕
            </Link>
          </div>
          <div>
            <ul className="flex items-center">
              <li>
                <Link
                  className="text-white hover:text-gray-300 px-3 py-2 transition-all duration-100"
                  href="/cups"
                >
                  Cups
                </Link>
              </li>
              <li>
                <Link
                  className="text-white hover:text-gray-300 px-3 py-2 transition-all duration-100"
                  href="/origins"
                >
                  Origins
                </Link>
              </li>
              <li>
                <Link
                  className="text-white hover:text-gray-300 px-3 py-2 transition-all duration-100"
                  href="/beans"
                >
                  Beans
                </Link>
              </li>
              <li>
                <Link
                  className="text-white hover:text-gray-300 px-3 py-2 transition-all duration-100"
                  href="/map"
                >
                  Map
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
