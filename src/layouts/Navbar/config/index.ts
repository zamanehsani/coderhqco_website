export const navLinks = [
  { href: "#features", label: "Core Value" },
  { href: "#work", label: "Work" },
  { href: "#process", label: "Process" },
] as const;

export const mobileMenuAnimationConfig = {
  initial: { opacity: 0, height: 0 },
  animate: { opacity: 1, height: "auto" },
  exit: { opacity: 0, height: 0 },
};
