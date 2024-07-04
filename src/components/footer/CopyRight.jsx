import { useTranslation } from "next-i18next";
import React from "react";

const CopyRight = () => {
  const { t } = useTranslation("common");

  return <div className="lg-text">{t("Copy_Right")} </div>;
};

export default CopyRight;
