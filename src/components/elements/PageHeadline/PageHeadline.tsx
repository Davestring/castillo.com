import { Box, Flex, FlexProps, IconButton } from '@chakra-ui/react';
import { ClampText } from 'components/typography';
import fp from 'lodash/fp';
import { FaPlus } from 'react-icons/fa';

export interface IPageHeadlineProps extends FlexProps {
  /**
   * On click action for add-resource events.
   */
  onClick?: VoidFunction;
  /**
   * Text that will appear below the title, can be a helper message, a subtitle
   * or `undefined`, in this case, the component will not going to be rendered.
   */
  quote?: string;
  /**
   * Headline title, commonly will be the name of the page which its rendering
   * this components.
   */
  title: string;
}

export const PageHeadline: React.FC<IPageHeadlineProps> = (
  props,
): JSX.Element => {
  const { onClick = () => {}, quote, title, ...rest } = props;

  return (
    <Flex {...rest}>
      <Box>
        <ClampText clamp={2} fontWeight="bold">
          {title}
        </ClampText>
        {!fp.isNil(quote) ? (
          <ClampText clamp={2} color="blackAlpha.500" fontSize="xs">
            {quote}
          </ClampText>
        ) : null}
      </Box>

      <IconButton
        aria-label="add-resource"
        bg="primary.700"
        colorScheme="primary"
        icon={<FaPlus color="white" />}
        onClick={onClick}
        size="sm"
      />
    </Flex>
  );
};

PageHeadline.defaultProps = {
  align: 'center',
  gap: 4,
  justify: 'space-between',
  w: '100%',
};
