const DEFAULT_PAGE_TITLE = "VizSchool | Learn Beyond the Classroom";

type PageMetaDataProps = {
  title?: string;
  description?: string;
};

const PageMetaData = ({ title, description }: PageMetaDataProps) => {
  const defaultTitle = DEFAULT_PAGE_TITLE;
  const defaultDescription =
    "VizSchool is an online learning platform for K-12 students offering virtual classrooms, interactive courses, and certifications.";

  return (
    <>
      <title>{title ? `${title} | VizSchool` : defaultTitle}</title>
      <meta name="description" content={description || defaultDescription} />
    </>
  );
};

export default PageMetaData;
