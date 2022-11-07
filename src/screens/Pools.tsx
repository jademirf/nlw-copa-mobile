import { VStack, Divider, Icon } from "native-base";
import { Octicons } from "@expo/vector-icons"
import { Button } from "../components/Button";
import { Header } from "../components/Header";
import { useNavigation } from "@react-navigation/native";


export function Pools() {
  const navigation = useNavigation()

  return(
    <VStack flex={1} bgColor="gray.900">
      <Header title="Meus bolões" />
      <VStack mx={5}>
        <Button
          title="BUSCAR BOLÃO POR CÓDIGO"
          mt={8}
          leftIcon={<Icon as={Octicons} name="search" color="black" size="md" />}
          onPress={() => navigation.navigate('find')}
        />
        <Divider 
          my="4" 
          _light={{
            bg: "muted.700"
          }} _dark={{
            bg: "muted.50"
          }} 
        />
      </VStack>
    </VStack>
  )
}