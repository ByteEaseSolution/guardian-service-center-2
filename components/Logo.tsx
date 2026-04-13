import Image from "next/image";

export default function Logo({
  size = 40,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <span
      className={`grid place-items-center rounded-full bg-white shadow-sm ring-1 ring-brand-yellow/30 ${className}`}
      style={{ width: size, height: size }}
    >
      <Image
        src="/logo.svg"
        alt="Guardian Service Center logo"
        width={Math.round(size * 0.7)}
        height={Math.round(size * 0.7)}
        priority
      />
    </span>
  );
}
