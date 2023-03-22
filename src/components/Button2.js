import React from 'react'
import { Link } from "react-router-dom";

function Button2({lroute, title}) {
  return (
    <Link
      to={lroute}
      class="inline-flex shrink-0 items-center gap-2 rounded-full border border-or px-5 py-3 font-medium text-or hover:bg-or hover:text-tex cursor-pointer"
    >
      {title}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-4 w-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M14 5l7 7m0 0l-7 7m7-7H3"
        />
      </svg>
    </Link>
  );
}

export default Button2