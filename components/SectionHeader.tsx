type SectionHeaderProps = {
  subtitle: string;
  title: string;
  description?: string;
};

export default function SectionHeader({
  subtitle,
  title,
  description,
}: SectionHeaderProps) {
  return (
    <div className="text-center max-w-3xl mx-auto mb-16">

      <span className="uppercase tracking-[5px] text-[#ff6600] font-semibold">
        {subtitle}
      </span>

      <h2 className="text-5xl font-bold text-[#006633] mt-5">
        {title}
      </h2>

      {description && (
        <p className="text-gray-600 text-lg leading-8 mt-6">
          {description}
        </p>
      )}

    </div>
  );
}