import React from 'react';
import Image from 'next/image';

// chakra
import {
	Box,
	Heading,
	Container,
	Spacer,
	Button,
	Flex,
	IconButton,
	Separator,
	Text,
	Link,
	Card,
	Input,
	createListCollection,
	Stack,
	Tabs,
	Avatar,
} from '@chakra-ui/react';

const Navbar = () => {
	return (
		<Box
			position="sticky"
			top="0"
			zIndex="sticky"
			background="gray.900"
			width="100%"
			py="4"
		>
			<Container maxWidth="5xl">
				<Flex align="center">
					<Image
						src="/logo_white.svg"
						alt="Mugen Logo"
						width={60}
						height={16}
						priority
					/>
					<Heading
						ml="2"
						size="xl"
						display={{ base: 'none', md: 'block' }}
					>
						bounty_super_staker
					</Heading>
					<Spacer />
					<Button
						variant="surface"
						size="lg"
					>
						Connect Wallet
					</Button>
				</Flex>
			</Container>
		</Box>
	);
};

export default Navbar;
