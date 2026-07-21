// "use client";

// export default function WhatsappButton() {
//   const phone = "2290196368779";

//   return (
//     <a
//       href={`https://wa.me/${phone}`}
//       target="_blank"
//       rel="noopener noreferrer"
//       className="fixed bottom-6 right-6 z-50"
//     >
//       <div className="w-16 h-16 rounded-full bg-[#25D366] shadow-2xl flex items-center justify-center hover:scale-110 duration-300">

//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           width="34"
//           height="34"
//           viewBox="0 0 32 32"
//           fill="white"
//         >
//           <path d="M19.11 17.39c-.29-.14-1.71-.84-1.97-.94-.26-.1-.45-.14-.64.15-.19.29-.74.94-.91 1.13-.17.19-.33.22-.62.07-.29-.14-1.21-.44-2.31-1.4-.85-.76-1.43-1.69-1.6-1.98-.17-.29-.02-.45.13-.59.13-.13.29-.33.43-.5.14-.17.19-.29.29-.48.1-.19.05-.36-.02-.5-.07-.14-.64-1.54-.88-2.11-.23-.55-.47-.48-.64-.49h-.55c-.19 0-.5.07-.76.36-.26.29-1 1-.99 2.43.02 1.43 1.03 2.81 1.18 3 .14.19 2.02 3.08 4.89 4.32.68.29 1.21.46 1.62.59.68.22 1.29.19 1.78.12.54-.08 1.71-.7 1.95-1.37.24-.67.24-1.24.17-1.36-.07-.12-.26-.19-.55-.33z"/>
//           <path d="M16.03 3C8.84 3 3 8.84 3 16.03c0 2.29.6 4.52 1.74 6.49L3 29l6.68-1.72a13 13 0 006.35 1.62C23.16 28.9 29 23.16 29 15.97 29 8.84 23.16 3 16.03 3zm0 23.54c-2.02 0-4-.54-5.73-1.56l-.41-.24-3.97 1.02 1.06-3.87-.27-.4a10.48 10.48 0 01-1.64-5.53c0-5.83 4.74-10.57 10.57-10.57S26.6 10.14 26.6 15.97s-4.74 10.57-10.57 10.57z"/>
//         </svg>

//       </div>
//     </a>
//   );
// }
"use client";

import { FaWhatsapp } from "react-icons/fa";

export default function WhatsappButton() {
  return (
    <a
      href="https://wa.me/2290166022249?text=Bonjour%20La%20Référence%20Coiffure%20%26%20Décor,%20je%20souhaite%20obtenir%20des%20informations."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full bg-[#25D366] flex items-center justify-center shadow-2xl hover:scale-110 duration-300"
    >
      <FaWhatsapp className="text-white text-4xl" />
    </a>
  );
}