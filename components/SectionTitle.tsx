type SectionTitleProps = {
  subtitle: string;
  title: string;
  description: string;
};

export default function SectionTitle({
  subtitle,
  title,
  description,
}: SectionTitleProps) {
  return (
    <div className="text-center max-w-3xl mx-auto mb-16">

      <span className="uppercase tracking-[5px] text-[#ff6600] font-semibold">
        {subtitle}
      </span>

      <h2 className="text-5xl font-bold text-[#006633] mt-4">
        {title}
      </h2>

      <p className="text-gray-600 text-lg mt-6 leading-8">
        {description}
      </p>

    </div>
  );
}