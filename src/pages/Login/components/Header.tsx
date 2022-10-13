import { Flex, FlexProps, Image, Text } from '@chakra-ui/react';
import Logo from 'assets/img/logo.dark.png';
import { useTranslation } from 'react-i18next';

export type IHeaderProps = FlexProps;

export const Header: React.FC<IHeaderProps> = (props): JSX.Element => {
  const { t } = useTranslation('page:login');

  return (
    <Flex as="header" {...props}>
      <Image src={Logo} w={256} />

      <Text
        display={{ base: 'none', md: 'block' }}
        fontSize="sm"
        fontWeight="thin"
        mt={2}
      >
        {t('slogan', { ns: 'common' })}
      </Text>
    </Flex>
  );
};

Header.defaultProps = {
  align: 'center',
  direction: 'column',
};
