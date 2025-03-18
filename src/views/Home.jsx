import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";

function Home() {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t("pages.home")}</title>
        {/* <title>Home Page</title> */}
      </Helmet>
      <div className="h-[85vh] text-5xl bg-gray-50 p-5">{t("pages.home")}</div>
      {/* <div className="h-[85vh] text-5xl bg-gray-50 p-5">Home Page</div> */}
    </>
  );
}

export default Home;
