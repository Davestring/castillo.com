import { IconButton, Stack, StackProps } from '@chakra-ui/react';
import { Td } from 'components/lib';
import { FaEdit, FaTrash } from 'react-icons/fa';

export interface ITdEventsProps extends StackProps {
  /**
   * Action triggered on [DELETE] events.
   */
  onDelete: VoidFunction;
  /**
   * Action triggered on [PATCH] events.
   */
  onPatch: VoidFunction;
}

export const TdEvents: React.FC<ITdEventsProps> = (props): JSX.Element => {
  const { onDelete, onPatch, ...rest } = props;

  return (
    <Stack as={Td} {...rest}>
      <IconButton
        aria-label="edit"
        bg="primary.700"
        colorScheme="primary"
        icon={<FaEdit color="white" />}
        onClick={onPatch}
        size="sm"
      />
      <IconButton
        aria-label="delete"
        bg="red.700"
        colorScheme="red"
        icon={<FaTrash color="white" />}
        isDisabled
        onClick={onDelete}
        size="sm"
      />
    </Stack>
  );
};

TdEvents.defaultProps = {
  bg: 'inherit',
  borderLeft: '1px',
  borderLeftColor: 'blackAlpha.100',
  h: '100%',
  isInline: true,
  position: { base: 'static', md: 'sticky' },
  right: 0,
  spacing: 2,
  top: 0,
};
