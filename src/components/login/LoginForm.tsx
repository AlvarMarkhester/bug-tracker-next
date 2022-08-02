import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Link,
    Button,
    Heading,
    Text,
    useColorModeValue,
    Image
  } from '@chakra-ui/react';
import { signIn } from 'next-auth/react';
  export default function LoginForm() {

    const handleSignIn = async () => {
      await signIn('github', {
        callbackUrl: 'http://localhost:3000/home'
      })
    }
    
    return (
      <Flex
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'}>Sign in</Heading>
            <Text fontSize={'lg'} color={'gray.600'}>
              to enjoy simplifying your dev progress✌️
            </Text>
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input type="email" />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input type="password" />
              </FormControl>
              <Stack spacing={10}>
                <Button
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}>
                  Sign in
                </Button>
              </Stack>
              <Button 
              backgroundImage={'github_signin.png'} 
              backgroundSize={'cover'}
              onClick={handleSignIn}
              opacity={0.9}
              _hover={{opacity: 1}}/>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    );
  }