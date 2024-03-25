import { usePathname } from "next/navigation";

export function useActivePath() {
  const pathname = usePathname();

  const checkActivePath = (path) => {
    if (path === "/" && pathname !== path) {
      return false;
    }
    return pathname.startsWith(path);
  };

  return checkActivePath;
}
