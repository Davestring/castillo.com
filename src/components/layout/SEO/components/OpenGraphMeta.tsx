export interface IOpenGraphMetaProps {
  /**
   * SEO cover image.
   */
  cover?: string;
  /**
   * SEO description.
   */
  description: string;
  /**
   * SEO title.
   */
  title: string;
}

export const OpenGraphMeta: React.FC<IOpenGraphMetaProps> = (
  props,
): JSX.Element => {
  const { cover, description, title } = props;

  return (
    <>
      <meta content="" property="fb:app_id" />

      <meta content="website" property="og:type" />
      {/* TODO: update with domain URL */}
      <meta content="" property="og:url" />
      <meta content="casa-castillo" property="og:image:alt" />
      <meta content="image/jpg" property="og:image:type" />

      {cover && <meta content={cover} property="og:image" />}
      {title && <meta content={title} property="og:site_name" />}
      {title && <meta content={title} property="og:title" />}
      {description && <meta content={description} property="og:description" />}
    </>
  );
};
