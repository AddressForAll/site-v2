import { useTranslation } from "next-export-i18n";
import Test from "../components/test";

export default function Home() {
  const { t } = useTranslation();
  return (
    <>
      <Test />
      <h2>{t("title")}</h2>
    </>
  );
}
