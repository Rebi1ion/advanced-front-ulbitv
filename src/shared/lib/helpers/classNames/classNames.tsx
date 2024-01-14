type Mods = Record<string, boolean | undefined>;

const classNames = (
  className: string,
  mods?: Mods,
  additional?: string[]
): string => {
  return [
    className,
    ...(additional ?? []),
    Object.entries(mods ?? {})
      .filter((cls) => cls[1])
      .map((cls) => cls[0])
      .join(" "),
  ]
    .join(" ")
    .trim();
};

export default classNames;
