import PropTypes from 'prop-types';

function OpenGraphMeta(props) {
  const { cover, description, title } = props;

  return (
    <>
      <meta property="fb:app_id" content="" />

      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://castillocasa.com/" />
      <meta property="og:image:alt" content="casa-castillo-cover" />
      <meta property="og:image:type" content="image/jpg" />

      {cover && <meta property="og:image" content={cover} />}
      {title && <meta property="og:site_name" content={title} />}
      {title && <meta property="og:title" content={title} />}
      {description && <meta property="og:description" content={description} />}
    </>
  );
}

OpenGraphMeta.propTypes = {
  cover: PropTypes.string,
  description: PropTypes.string,
  title: PropTypes.string,
};

export default OpenGraphMeta;
