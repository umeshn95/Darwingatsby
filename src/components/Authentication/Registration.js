import React, { useState } from 'react';
import axios from 'axios';
import {
  Box,
  Button,
  Container,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Progress,
  Select,
  VStack,
  extendTheme,
  ChakraProvider
} from '@chakra-ui/react';


const customTheme = extendTheme({
    styles: {
      global: {
        body: {
          bg: 'gray.100',
          color: 'gray.800',
        },
      },
    },
    components: {
      Input: {
        defaultProps: {
          focusBorderColor: 'blue.500',
        },
        baseStyle: {
          field: {
            borderRadius: '15px', // rounder corners for input fields
            _hover: {
              borderColor: 'blue.300', // lighter blue on hover
            },
            _focus: {
              boxShadow: `0 0 0 1px #001AEF`, // custom blue focus border
            },
          },
        },
      },
      Button: {
        baseStyle: {
          fontWeight: 'bold',
          borderRadius: 'full',
          _focus: {
            boxShadow: 'none', // remove default focus shadow
          },
        },
        variants: {
          solid: {
            bg: '#001AEF', // custom button color
            color: 'white',
            _hover: {
              bg: 'blue.700', // darker blue on hover
            },
            _active: {
              bg: 'blue.800', // even darker blue on active
            },
          },
        },
      },
    },
  });
  
  

function RegistrationPage() {
  return (
   <ChakraProvider theme={customTheme}>
     <Container maxW="container.md" mt={10}>
      <RegistrationForm />
    </Container>
   </ChakraProvider>
  );
}

function RegistrationForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    iam: '',
    state: '',
    municipalType: '',
    schoolType: '',
    organizationType: '',
    role: '',
    firstname: '',
    lastname: '',
    email: '',
    password: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const response = await axios.post('https://contactapi-for-darwin.onrender.com/api/register', formData);
        console.log(formData);
        console.log(response.data);
        // Handle success (e.g., show success message, redirect, etc.)
      } catch (error) {
        console.error('Error submitting form:', error);
        // Handle error (e.g., show error message)
      }
  };

  const renderStepContent = () => {
    switch (step) {
      case 1:
        return (
          <FormControl isRequired>
            <FormLabel>I am</FormLabel>
            <Select
              placeholder="Select option"
              name="iam"
              value={formData.iam}
              onChange={handleInputChange}
            >
              <option value="municipalAgent">Municipal Agent</option>
              <option value="schoolAgent">School Agent</option>
              <option value="serviceProvider">Service Provider</option>
            </Select>
          </FormControl>
        );
      case 2:
        return (
          <>
            <FormControl isRequired>
              <FormLabel>State</FormLabel>
              <Input
                type="text"
                name="state"
                value={formData.state}
                onChange={handleInputChange}
              />
            </FormControl>
            {formData.iam === 'municipalAgent' && (
              <FormControl>
                <FormLabel>Municipal Type</FormLabel>
                <Input
                  type="text"
                  name="municipalType"
                  value={formData.municipalType}
                  onChange={handleInputChange}
                />
              </FormControl>
            )}
            {/* Repeat for schoolAgent and serviceProvider */}
          </>
        );
      case 3:
        return (
          <>
            <FormControl isRequired>
              <FormLabel>First Name</FormLabel>
              <Input
                type="text"
                name="firstname"
                value={formData.firstname}
                onChange={handleInputChange}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Last Name</FormLabel>
              <Input
                type="text"
                name="lastname"
                value={formData.lastname}
                onChange={handleInputChange}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
              />
            </FormControl>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <VStack spacing={4} as="form" onSubmit={handleSubmit}>
      <Heading as="h1" size="xl" textAlign="center">Registration</Heading>
      <Progress value={(step / 3) * 100} size="sm" width="full" colorScheme="blue" />
      {renderStepContent()}
      <Box pt={4} width="full" display="flex" justifyContent="space-between">
        {step > 1 && (
          <Button onClick={() => setStep(step - 1)}>Previous</Button>
        )}
        {step < 3 ? (
          <Button  colorScheme="teal" onClick={() => setStep(step + 1)}>Next</Button>
        ) : (
          <Button colorScheme="green" type="submit">Register</Button>
        )}
      </Box>
    </VStack>
  );
}

export default RegistrationPage;
