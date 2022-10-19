import { Button, Link, Stack, StackProps, Text } from '@chakra-ui/react';
import { InputField } from 'components/inputs';
import { Form as ReachForm, Formik, FormikHelpers } from 'formik';
import { Trans, useTranslation } from 'react-i18next';
import { Link as ReachLink } from 'react-router-dom';
import { IBaseAuthentication } from 'services/resources';
import * as Yup from 'yup';

const INITIAL_VALUES = { email: '', password: '' };

const VALIDATION_SCHEMA = Yup.object().shape({
  email: Yup.string()
    .email('form.generic.email')
    .required('form.generic.required'),

  password: Yup.string()
    .min(8, 'form.generic.min-length')
    .required('form.generic.required'),
});

export interface IFormProps extends Omit<StackProps, 'onSubmit'> {
  /**
   * Form initial values, a IBaseAuthentication object.
   */
  initialValues?: IBaseAuthentication;
  /**
   * Action that will be triggered when the user submits the form.
   */
  onSubmit: (
    v: IBaseAuthentication,
    h?: FormikHelpers<IBaseAuthentication>,
  ) => Promise<void>;
}

export const Form: React.FC<IFormProps> = (props): JSX.Element => {
  const { initialValues = INITIAL_VALUES, onSubmit, ...rest } = props;

  const { t } = useTranslation('page:login');

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={VALIDATION_SCHEMA}
    >
      {({ isValid, isSubmitting }) => (
        <Stack as={ReachForm} {...rest}>
          <InputField
            name="email"
            placeholder={t('form.email.placeholder')}
            size="md"
          />

          <InputField
            name="password"
            placeholder={t('form.password.placeholder')}
            size="md"
            type="password"
          />

          <Button
            colorScheme="primary"
            isDisabled={isSubmitting || !isValid}
            isLoading={isSubmitting}
            size="md"
            type="submit"
          >
            {t('button.continue', { ns: 'common' })}
          </Button>

          <Text align="center">
            <Trans i18nKey="notice" ns="page:login">
              <Text
                as="span"
                color="blackAlpha.500"
                fontSize="xs"
                fontWeight="medium"
              />
              <Link
                as={ReachLink}
                color="primary.600"
                fontSize="xs"
                fontWeight="bold"
                mt={0}
                to="/booking"
              />
            </Trans>
          </Text>
        </Stack>
      )}
    </Formik>
  );
};

Form.defaultProps = {
  gap: 4,
};
