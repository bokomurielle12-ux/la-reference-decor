type ButtonProps = {
  children: React.ReactNode;
};

export default function Button({ children }: ButtonProps) {
  return (
    <button className="bg-[#006633] hover:bg-green-800 text-white px-8 py-4 rounded-full duration-300">

      {children}

    </button>
  );
}