import { Avatar, Box, Stack, Text } from '@chakra-ui/react';
import moment from 'moment';
import PropTypes from 'prop-types';

function Review(props) {
  const { comment, ...rest } = props;
  return (
    <Box {...rest}>
      <Stack isInline align="center" spacing={4} mb={2}>
        <Avatar name={`${comment?.name} ${comment?.lastname}`}></Avatar>
        <Box>
          <Text fontSize="sm" fontWeight={700}>
            {comment?.name} {comment?.lastname}
          </Text>
          <Text color="blackAlpha.500" fontSize="xs" fontWeight={700}>
            {moment(comment?.created).format('DD/MM/yyyy hh:mm:ss')}
          </Text>
        </Box>
      </Stack>
      <Text fontSize="sm">{comment?.comment}</Text>
    </Box>
  );
}

Review.propTypes = {
  comment: PropTypes.shape({
    name: PropTypes.string,
    lastname: PropTypes.string,
    comment: PropTypes.string,
    created: PropTypes.string,
  }),
};

Review.defaultProps = {
  mb: 2,
};

export default Review;
