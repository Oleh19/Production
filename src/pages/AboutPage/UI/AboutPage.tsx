import { ReactNode } from "react";
import { useTranslation } from "react-i18next";

const AboutPage = () => {
const {t} = useTranslation('about')

  return <div>
    {t("Про нас") as ReactNode}
  </div>;
};

export default AboutPage;
