import { FlexProps, Tr } from '@chakra-ui/react';
import { TdEvents } from 'components/elements';
import { Td } from 'components/lib';
import { Table } from 'components/modules';
import { useCrudContext } from 'contexts';
import fp from 'lodash/fp';
import { nanoid } from 'nanoid';
import { useMemo } from 'react';
import { IServiceResource } from 'services/resources';
import { formatDate, SERVICES_TABLE_HEADERS } from 'utils';

export type IListingProps = FlexProps;

export const Listing: React.FC<IListingProps> = (props): JSX.Element => {
  const { data, isFetching, preparePatch } = useCrudContext<IServiceResource>();

  const isEmpty = useMemo(
    () => fp.compose(fp.isEmpty, fp.get('results'))(data),
    [data],
  );

  return (
    <Table
      headers={SERVICES_TABLE_HEADERS}
      isEmpty={isEmpty}
      isLoading={isFetching}
      {...props}
    >
      {data?.results?.map((item) => (
        <Tr key={nanoid()} position="relative">
          <Td>{item?.id}</Td>
          <Td>{item?.name}</Td>
          <Td>{item?.description || '-'}</Td>
          <Td>{fp.compose(formatDate, fp.get('updated'))(item)}</Td>
          <Td>{fp.compose(formatDate, fp.get('created'))(item)}</Td>
          <TdEvents onDelete={() => {}} onPatch={() => preparePatch(item)} />
        </Tr>
      ))}
    </Table>
  );
};
