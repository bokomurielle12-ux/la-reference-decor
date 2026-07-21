type CardProps = {
  image: string;
  title: string;
  description: string;
};

export default function Card({
  image,
  title,
  description,
}: CardProps) {
  return (
    <div className="bg-white rounded-3xl shadow-xl overflow-hidden hover:-translate-y-2 duration-300">

      <img
        src={image}
        alt={title}
        className="w-full h-72 object-cover"
      />

      <div className="p-8">

        <h3 className="text-2xl font-bold text-[#006633]">
          {title}
        </h3>

        <p className="text-gray-600 mt-4 leading-7">
          {description}
        </p>

      </div>

    </div>
  );
}