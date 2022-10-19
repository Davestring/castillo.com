import { Flex, FlexProps } from '@chakra-ui/react';
import { ClampText } from 'components/typography';
import fp from 'lodash/fp';

export interface IPageHeadlineProps extends FlexProps {
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
  const { quote, title, ...rest } = props;

  return (
    <Flex {...rest}>
      <ClampText clamp={2} fontWeight="bold">
        {title}
      </ClampText>
      {!fp.isNil(quote) ? (
        <ClampText clamp={2} color="blackAlpha.500" fontSize="xs">
          {quote}
        </ClampText>
      ) : null}
    </Flex>
  );
};

PageHeadline.defaultProps = {
  direction: 'column',
  justify: 'center',
  w: '100%',
};
