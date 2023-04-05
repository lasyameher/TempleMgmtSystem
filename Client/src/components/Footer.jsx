import React from "react";

export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-15 z-20 w-full p-4 bg-orange-100 border-t border-gray-200 shadow md:flex md:items-center md:justify-center md:p-6 dark:bg-gray-800 dark:border-gray-600">
      <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400 text-center">
        Copyright 2023{" "}
        | Omkar Temple. All Rights Reserved
      </span>
    </footer>
  );
}
