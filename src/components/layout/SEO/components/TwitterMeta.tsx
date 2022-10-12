export interface ITwitterMetaProps {
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

export const TwitterMeta: React.FC<ITwitterMetaProps> = (
  props,
): JSX.Element => {
  const { cover, description, title } = props;

  return (
    <>
      <meta content="summary" name="twitter:card" />
      {cover && <meta content={cover} name="twitter:image" />}
      {title && <meta content={title} name="twitter:title" />}
      {description && <meta content={description} name="twitter:description" />}
    </>
  );
};
