import { SimpleGrid } from '@chakra-ui/react';
import Container from 'components/elements/Container';
import H2 from 'components/elements/H2';
import _ from 'lodash';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

import LoadMore from './components/LoadMore';
import Review from './components/Review';

function Reviews(props) {
  const { comments, title, ...rest } = props;

  if (_.isEmpty(comments)) return null;

  return (
    <Container {...rest}>
      {title && <H2>{title}</H2>}
      <SimpleGrid columns={[1, 1, 2, 2]} mb={4} spacing={20}>
        {comments.map((item) => (
          <Review key={nanoid()} comment={item}></Review>
        ))}
      </SimpleGrid>
      <LoadMore></LoadMore>
    </Container>
  );
}

Reviews.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      lastname: PropTypes.string,
      comment: PropTypes.string,
      created: PropTypes.string,
    }),
  ),
  title: PropTypes.string,
};

Reviews.defaultProps = {
  comments: [],
};

export default Reviews;
