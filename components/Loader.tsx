"use client";

import { useEffect, useState } from "react";

export default function Loader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 bg-white z-[9999] flex items-center justify-center">

      <div className="text-center">

        <div className="w-24 h-24 border-[8px] border-[#006633] border-t-[#ff6600] rounded-full animate-spin mx-auto"></div>

        <h2 className="mt-8 text-3xl font-bold text-[#006633]">
          LA RÉFÉRENCE
        </h2>

        <p className="text-[#ff6600]">
          COIFFURE & DÉCOR
        </p>

      </div>

    </div>
  );
}