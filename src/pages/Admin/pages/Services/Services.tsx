import { Td, Tr, useDisclosure } from '@chakra-ui/react';
import { FormModal, PageHeadline } from 'components/elements';
import { InputField, TextField } from 'components/inputs';
import { Table } from 'components/modules';
import { FormikHelpers } from 'formik';
import { useFetch, usePost } from 'hooks';
import fp from 'lodash/fp';
import { nanoid } from 'nanoid';
import { useCallback, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import {
  IServicePayload,
  IServiceResource,
  ServiceResources,
} from 'services/resources';
import { formatDate, SERVICES_TABLE_HEADERS } from 'utils';
import * as Yup from 'yup';

const ValidationSchema = Yup.object().shape({
  description: Yup.string().required('form.generic.required'),
  name: Yup.string()
    .max(128, 'form.generic.max-length')
    .required('form.generic.required'),
});

export const Services = (): JSX.Element => {
  const { t } = useTranslation('page:admin');

  const { data, isLoading, isRefetching, refetch } =
    useFetch<IServiceResource>(ServiceResources);

  const { isOpen, onClose, onOpen } = useDisclosure();

  const { mutateAsync } = usePost<IServiceResource>(ServiceResources);

  const isEmpty = useMemo(
    () => fp.compose(fp.isEmpty, fp.get('results'))(data),
    [data],
  );

  const onPost = useCallback(
    async (v: IServicePayload, h?: FormikHelpers<IServicePayload>) => {
      await mutateAsync(v);
      onClose();
      await refetch();
      h?.resetForm();
    },
    [mutateAsync],
  );

  return (
    <>
      <Helmet>
        <title>{t('services.helmet')}</title>
      </Helmet>

      <PageHeadline
        mb={6}
        onClick={onOpen}
        quote={t('services.quote')}
        title={t('services.title')}
      />

      <Table
        flex={1}
        headers={SERVICES_TABLE_HEADERS}
        isEmpty={isEmpty}
        isLoading={isLoading || isRefetching}
      >
        {data?.results?.map((item) => (
          <Tr key={nanoid()} position="relative">
            <Td fontSize="sm" fontWeight="medium">
              {item?.id}
            </Td>
            <Td fontSize="sm" fontWeight="medium">
              {item?.name}
            </Td>
            <Td fontSize="sm" fontWeight="medium">
              {item?.description || '-'}
            </Td>
            <Td fontSize="sm" fontWeight="medium">
              {fp.compose(formatDate, fp.get('updated'))(item)}
            </Td>
            <Td fontSize="sm" fontWeight="medium">
              {fp.compose(formatDate, fp.get('created'))(item)}
            </Td>
          </Tr>
        ))}
      </Table>

      <FormModal
        initialValues={{ description: '', name: '' } as IServicePayload}
        isOpen={isOpen}
        onClose={onClose}
        onSubmit={onPost}
        validationSchema={ValidationSchema}
      >
        <InputField
          inputProps={{ bg: 'white' }}
          label={t('form.name.label')}
          mb={4}
          name="name"
          placeholder={t('form.name.placeholder')}
        />

        <TextField
          label={t('form.description.label')}
          name="description"
          placeholder={t('form.description.placeholder')}
          textareaProps={{ bg: 'white' }}
        />
      </FormModal>
    </>
  );
};
