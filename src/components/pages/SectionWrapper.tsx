type Props = {
  children: React.ReactNode;
  className?: string;
  dark?: boolean;
  id?: string;
};

export default function SectionWrapper({
  children,
  className = "",
  dark = false,
  id,
}: Props) {
  return (
    <section
      id={id}
      className={`py-24 lg:py-32 ${dark ? "bg-[#0a0a0a]" : "bg-white"} ${className}`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">{children}</div>
    </section>
  );
}
