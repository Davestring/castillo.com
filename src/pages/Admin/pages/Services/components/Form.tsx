import { FormModal } from 'components/elements';
import { InputField, TextField } from 'components/inputs';
import { useCrudContext } from 'contexts';
import { useTranslation } from 'react-i18next';
import { IServicePayload, IServiceResource } from 'services/resources';
import * as Yup from 'yup';

const ValidationSchema = Yup.object().shape({
  description: Yup.string().required('form.generic.required'),
  name: Yup.string()
    .max(128, 'form.generic.max-length')
    .required('form.generic.required'),
});

export const Form: React.FC = (): JSX.Element => {
  const { isOpen, onClose, onPatch, onPost, resource, type } =
    useCrudContext<IServiceResource>();

  const { t } = useTranslation('page:admin');

  return (
    <FormModal
      initialValues={resource as IServicePayload}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={type === 'post' ? onPost : onPatch}
      title={t(type === 'post' ? 'services.add-new' : 'services.edit')}
      validationSchema={ValidationSchema}
    >
      <InputField
        inputProps={{ bg: 'white', rounded: 'full' }}
        name="name"
        placeholder={t('form.name.label')}
        size="md"
      />

      <TextField
        display="flex"
        flex={1}
        flexDir="column"
        name="description"
        placeholder={t('form.description.label')}
        size="md"
        textareaProps={{ bg: 'white', flex: 1, rounded: 'xl' }}
      />
    </FormModal>
  );
};
