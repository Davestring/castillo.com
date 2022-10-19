import { Text as Base, TextProps } from '@chakra-ui/react';
import styled from '@emotion/styled';

const Text = styled(Base)`
  display: box;
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;

  -webkit-box-orient: vertical;
  -webkit-line-clamp: ${({ clamp }: { clamp: number }) => clamp};
`;

export interface IClampTextProps extends TextProps {
  /**
   * Number of lines until text clamps.
   */
  clamp?: number;
}

export const ClampText: React.FC<IClampTextProps> = (props): JSX.Element => {
  const { children, clamp = 1, ...rest } = props;

  return (
    <Text clamp={clamp} {...rest}>
      {children}
    </Text>
  );
};
