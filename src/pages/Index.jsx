import { Box, Container, Input, Button, Text, VStack, Heading, Flex, FormControl, FormLabel } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container maxW="container.xl" py={10}>
      <VStack spacing={10}>
        <Heading as="h1" size="xl">CRM Dashboard</Heading>
        
        <Box w="full" p={5} borderWidth="1px" borderRadius="lg">
          <Heading as="h2" size="lg" mb={4}>Search Customer Records</Heading>
          <FormControl>
            <FormLabel htmlFor="search">Customer Name or ID</FormLabel>
            <Flex>
              <Input id="search" placeholder="Enter name or ID" />
              <Button ml={2} colorScheme="blue">Search</Button>
            </Flex>
          </FormControl>
        </Box>

        <Box w="full" p={5} borderWidth="1px" borderRadius="lg">
          <Heading as="h2" size="lg" mb={4}>Process Refunds</Heading>
          <FormControl>
            <FormLabel htmlFor="refund-id">Order ID</FormLabel>
            <Flex>
              <Input id="refund-id" placeholder="Enter order ID" />
              <Button ml={2} colorScheme="red">Process Refund</Button>
            </Flex>
          </FormControl>
        </Box>

        <Box w="full" p={5} borderWidth="1px" borderRadius="lg">
          <Heading as="h2" size="lg" mb={4}>Update Customer Information</Heading>
          <FormControl>
            <FormLabel htmlFor="customer-id">Customer ID</FormLabel>
            <Input id="customer-id" placeholder="Enter customer ID" mb={4} />
            <FormLabel htmlFor="customer-info">New Information</FormLabel>
            <Input id="customer-info" placeholder="Enter new information" mb={4} />
            <Button colorScheme="green">Update Info</Button>
          </FormControl>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;