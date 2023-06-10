import { useRouter } from "next/router";
import { Locale } from "../interfaces/locale";

export default function useLocale(): Locale {
  const { locale } = useRouter();
  return (locale ?? "pl") as Locale;
}
