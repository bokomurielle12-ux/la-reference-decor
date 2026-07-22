type BadgeProps = {
  text: string;
};

export default function Badge({
  text,
}: BadgeProps) {
  return (
    <span className="bg-[#ff6600] text-white px-5 py-2 rounded-full text-sm font-medium">
      {text}
    </span>
  );
}