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
import {
	SelectContent,
	SelectItem,
	SelectLabel,
	SelectRoot,
	SelectTrigger,
	SelectValueText,
} from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { FaXTwitter, FaLock, FaUnlock, FaGithub } from 'react-icons/fa6';
import { LuFolder, LuSquareCheck, LuUser } from 'react-icons/lu';

const Footer = () => {
	return (
		<Box
			width="100%"
			py="4"
		>
			<Container maxWidth="5xl">
				<Flex
					direction="column"
					width="100%"
					gap="4"
				>
					<Separator />
					<Flex align="center">
						<Image
							src="/logo_white.svg"
							alt="Mugen Logo"
							width={60}
							height={16}
						/>
						<Spacer />
						<IconButton
							aria-label="X Link"
							variant="ghost"
							mr={4}
						>
							<FaXTwitter />
						</IconButton>
						<IconButton
							aria-label="X Link"
							variant="ghost"
						>
							<FaGithub />
						</IconButton>
					</Flex>
					<Flex
						direction={{ base: 'column', md: 'row' }}
						align="center"
						justify="center"
						gap="4"
					>
						<Link variant="underline">Privacy Policy</Link>
						<Link variant="underline">Terms of Service</Link>
						<Text>&copy; 2025 Realm Labs</Text>
					</Flex>
				</Flex>
			</Container>
		</Box>
	);
};

export default Footer;
