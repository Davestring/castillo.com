import Head from 'next/head';
import PropTypes from 'prop-types';

import OpenGraphMeta from './components/OpenGraphMeta';
import TwitterMeta from './components/TwitterMeta';

function Shareability(props) {
  const { cover, description, title } = props;

  return (
    <Head>
      <title>{title}</title>
      <OpenGraphMeta {...{ cover, description, title }}></OpenGraphMeta>
      <TwitterMeta {...{ cover, description, title }}></TwitterMeta>
    </Head>
  );
}

Shareability.propTypes = {
  cover: PropTypes.string,
  description: PropTypes.string,
  title: PropTypes.string,
};

Shareability.defaultProps = {
  cover: `${process.env.NEXT_PUBLIC_AWS_S3_URL}/images/cover.jpg`,
};

export default Shareability;
