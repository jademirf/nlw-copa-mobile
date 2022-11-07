import { Center, Icon, Text } from 'native-base'
import { Fontisto } from '@expo/vector-icons'
import { useAuth } from '../hooks/useAuth'

import Logo from '../assets/logo.svg'
import { Button } from '../components/Button'


export function Signin() {
  const { signIn, isUserLoading} = useAuth()
  const googleIcon = <Icon as={Fontisto} name="google" color="white" size="md" />
  return (
    <Center flex="1" bgColor="gray.900" p={7}>
      <Logo width={212} height={40} />
      <Button
        title="ENTRAR COM GOOGLE"
        type="SECONDARY"
        leftIcon={googleIcon}
        mt={12}
        onPress={signIn}
        isLoading={isUserLoading}
        _loading={{
          _spinner: { color: 'white'}
        }}
      />
      <Text color="white" textAlign="center" mt={4}>
        Não utilizamos nenhuma informação sua além {'\n'} do e-mail para a criação de sua conta.
      </Text>
    </Center>
  )
}