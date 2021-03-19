import PropTypes from 'prop-types';

function TwitterMeta(props) {
  const { cover, description, title } = props;

  return (
    <>
      <meta name="twitter:card" content="summary" />
      {cover && <meta name="twitter:image" content={cover} />}
      {title && <meta name="twitter:title" content={title} />}
      {description && <meta name="twitter:description" content={description} />}
    </>
  );
}

TwitterMeta.propTypes = {
  cover: PropTypes.string,
  description: PropTypes.string,
  title: PropTypes.string,
};

export default TwitterMeta;
