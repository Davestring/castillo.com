import { FormModal } from 'components/elements';
import { InputField } from 'components/inputs';
import { useCrudContext } from 'contexts';
import { useTranslation } from 'react-i18next';
import { IUserPayload, IUserResource } from 'services/resources';
import * as Yup from 'yup';

const ValidationSchema = Yup.object().shape({
  email: Yup.string()
    .email('form.generic.email')
    .required('form.generic.required'),

  first_surname: Yup.string()
    .max(150, 'form.generic.max-length')
    .required('form.generic.required'),

  last_surname: Yup.string().max(150, 'form.generic.max-length').nullable(),

  name: Yup.string()
    .max(150, 'form.generic.max-length')
    .required('form.generic.required'),
});

const ExtendedValidationSchema = ValidationSchema.shape({
  password: Yup.string()
    .min(8, 'form.generic.min-length')
    .required('form.generic.required'),
});

export const Form: React.FC = (): JSX.Element => {
  const { isOpen, onClose, onPatch, onPost, registry, type } =
    useCrudContext<IUserResource>();

  const { t } = useTranslation('page:admin');

  return (
    <FormModal
      initialValues={registry as IUserPayload}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={type === 'post' ? onPost : onPatch}
      title={t(type === 'post' ? 'users.add-new' : 'users.edit')}
      validationSchema={
        type === 'post' ? ExtendedValidationSchema : ValidationSchema
      }
    >
      <InputField
        inputProps={{ bg: 'white', rounded: 'full' }}
        name="name"
        placeholder={t('form.name.label')}
        size="md"
      />

      <InputField
        inputProps={{ bg: 'white', rounded: 'full' }}
        name="first_surname"
        placeholder={t('form.first-surname.label')}
        size="md"
      />

      <InputField
        inputProps={{ bg: 'white', rounded: 'full' }}
        name="last_surname"
        placeholder={t('form.last-surname.label')}
        size="md"
      />

      <InputField
        inputProps={{ bg: 'white', rounded: 'full' }}
        name="email"
        placeholder={t('form.email.label')}
        size="md"
        type="email"
      />

      {type === 'post' ? (
        <InputField
          inputProps={{ bg: 'white', rounded: 'full' }}
          name="password"
          placeholder={t('form.password.label')}
          size="md"
          type="password"
        />
      ) : null}
    </FormModal>
  );
};
