import { Helmet } from "react-helmet-async";
import PostsList from "../components/pages/posts/PostsList";
import { useTranslation } from "react-i18next";

function Posts() {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t("pages.post")}</title>
      </Helmet>
      <PostsList t={t} />
    </>
  );
}

export default Posts;
