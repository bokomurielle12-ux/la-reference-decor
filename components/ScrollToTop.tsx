"use client";

import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

export default function ScrollToTop() {

  const [visible, setVisible] = useState(false);

  useEffect(() => {

    const handleScroll = () => {

      setVisible(window.scrollY > 300);

    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);

  }, []);

  const scrollTop = () => {

    window.scrollTo({

      top: 0,

      behavior: "smooth",

    });

  };

  return (

    visible && (

      <button

        onClick={scrollTop}

        className="fixed bottom-28 right-6 w-14 h-14 rounded-full bg-[#006633] text-white shadow-xl hover:bg-green-800 duration-300 z-50"

      >

        <FaArrowUp className="mx-auto" />

      </button>

    )

  );

}