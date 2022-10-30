import { FormModal } from 'components/elements';
import { InputField, PhoneField } from 'components/inputs';
import { useCrudContext } from 'contexts';
import { useTranslation } from 'react-i18next';
import { IBookingPayload, IBookingResource } from 'services/resources';
import * as Yup from 'yup';

const ValidationSchema = Yup.object().shape({
  check_in: Yup.string().required('form.generic.required'),
  check_out: Yup.string().required('form.generic.required'),
  email: Yup.string()
    .email('form.generic.email')
    .required('form.generic.required'),
  first_surname: Yup.string().required('form.generic.required'),
  last_surname: Yup.string().nullable(),
  name: Yup.string()
    .max(128, 'form.generic.max-length')
    .required('form.generic.required'),
  phone: Yup.string()
    .matches(/^\([0-9]{2}\) [0-9]{4}-[0-9]{4}$/, 'form.generic.phone')
    .required('form.generic.required'),
});

export const Form: React.FC = (): JSX.Element => {
  const { isOpen, onClose, onPatch, onPost, registry, type } =
    useCrudContext<IBookingResource>();

  const { t } = useTranslation('page:admin');

  return (
    <FormModal
      initialValues={registry as IBookingPayload}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={type === 'post' ? onPost : onPatch}
      title={t(type === 'post' ? 'bookings.add-new' : 'bookings.edit')}
      validationSchema={ValidationSchema}
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

      <PhoneField
        inputProps={{ background: 'white', borderRadius: '9999px' }}
        name="phone"
        placeholder={t('form.phone.label')}
        size="md"
      />

      <InputField
        helper={t('form.check-in.helper')}
        inputProps={{ bg: 'white', rounded: 'full' }}
        name="check_in"
        size="md"
        type="date"
      />

      <InputField
        helper={t('form.check-out.helper')}
        inputProps={{ bg: 'white', rounded: 'full' }}
        name="check_out"
        size="md"
        type="date"
      />
    </FormModal>
  );
};
