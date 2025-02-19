'use client';

import React, { Fragment } from 'react';
import Image from 'next/image';

// components
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';

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
	HStack,
} from '@chakra-ui/react';
import { Avatar } from '@/components/ui/avatar';
import { SelectContent, SelectItem, SelectLabel, SelectRoot, SelectTrigger, SelectValueText } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { FaXTwitter, FaLock, FaUnlock, FaGithub } from 'react-icons/fa6';
import { LuFolder, LuSquareCheck, LuUser } from 'react-icons/lu';

const HomePage = () => {
	const tokens = createListCollection({
		items: [
			{
				name: 'USDC',
				id: 'usdc',
				avatar: '/cryptoLogos/usdc.svg',
			},
		],
		itemToString: (item) => item.name,
		itemToValue: (item) => item.id,
	});

	const SelectValueItem = () => (
		<SelectValueText placeholder="Select movie">
			{(items: Array<{ name: string; avatar: string }>) => {
				const { name, avatar } = items[0];
				return (
					<HStack>
						<Avatar
							shape="rounded"
							name={name}
							size="2xs"
							src={avatar}
						/>
						{name}
					</HStack>
				);
			}}
		</SelectValueText>
	);

	return (
		<Fragment>
			<Navbar />

			<Box py="8">
				<Container maxWidth="xl">
					<Tabs.Root
						defaultValue="jsol"
						variant={'enclosed'}
					>
						<Tabs.List>
							<Tabs.Trigger value="jsol">
								<Image
									src="/cryptoLogos/jupiter.svg"
									alt="Jupiter Logo"
									width={25}
									height={25}
								/>
								jSOL
							</Tabs.Trigger>
							<Tabs.Trigger
								value="ssol"
								disabled
							>
								<Image
									src="/cryptoLogos/solayer.png"
									alt="Solayer Logo"
									width={25}
									height={25}
								/>
								sSOL (Coming Soon)
							</Tabs.Trigger>
						</Tabs.List>

						<Tabs.Content value="jsol">
							<Card.Root variant={'subtle'}>
								<Card.Body>
									<Flex
										direction="column"
										gap="8"
									>
										<Tabs.Root
											fitted
											defaultValue={'stake'}
										>
											<Tabs.List>
												<Tabs.Trigger value="stake">
													<FaLock />
													Stake
												</Tabs.Trigger>
												<Tabs.Trigger value="unstake">
													<FaUnlock />
													Unstake
												</Tabs.Trigger>
											</Tabs.List>

											<Tabs.Content
												value="stake"
												mt="4"
											>
												<Flex
													direction="column"
													gap="8"
												>
													<Box>
														<Text>Amount to Stake</Text>
														<Flex mt="2">
															<Input
																placeholder="0"
																variant="outline"
																size="md"
																width="100%"
																mr="4"
															/>

															<SelectRoot
																collection={tokens}
																size="md"
																width="230px"
																defaultValue={['usdc']}
																positioning={{ sameWidth: true }}
															>
																<SelectTrigger>
																	<SelectValueItem />
																</SelectTrigger>
																<SelectContent portalled={false}>
																	{tokens.items.map((item) => (
																		<SelectItem
																			item={item}
																			key={item.id}
																			justifyContent="flex-start"
																		>
																			<Avatar
																				shape="rounded"
																				name={item.name}
																				src={item.avatar}
																				size="2xs"
																			/>
																			{item.name}
																		</SelectItem>
																	))}
																</SelectContent>
															</SelectRoot>
														</Flex>
													</Box>

													<Box>
														<Text>
															Leverage: <b>8.8x</b>
														</Text>
														<Flex mt="2">
															<Slider
																w="100%"
																size="lg"
																defaultValue={[40]}
															/>
														</Flex>
													</Box>

													<Separator />

													<Box>
														<Card.Root
															bg="gray.800"
															mb="4"
														>
															<Card.Body>
																<Stack>
																	<Flex align="center">
																		<Text fontSize="sm">Amount to deposit</Text>
																		<Spacer />
																		<Text fontSize="md">
																			<b>0 jSOL</b>
																		</Text>
																	</Flex>

																	<Flex align="center">
																		<Text fontSize="sm">Amount borrowed</Text>
																		<Spacer />
																		<Text fontSize="md">
																			<b>0 jSOL</b>
																		</Text>
																	</Flex>

																	<Flex align="center">
																		<Text fontSize="sm">Your position</Text>
																		<Spacer />
																		<Text fontSize="md">
																			<b>0 jSOL</b>
																		</Text>
																	</Flex>

																	<Flex align="center">
																		<Text fontSize="sm">Est. liquidation ratio</Text>
																		<Spacer />
																		<Text fontSize="md">
																			<b>0 jSOL</b>
																		</Text>
																	</Flex>
																</Stack>
															</Card.Body>
														</Card.Root>

														<Card.Root bg="gray.800">
															<Card.Body>
																<Stack gap="1">
																	<Flex align="center">
																		<Text fontSize="md">Projected APR (Net)</Text>
																		<Spacer />
																		<Text fontSize="md">
																			<b>0.00%</b>
																		</Text>
																	</Flex>
																	<Flex align="center">
																		<Spacer />
																		<Text fontSize="2xs">
																			jSOL APR: <b>0.00%</b>
																		</Text>
																	</Flex>
																	<Flex align="center">
																		<Spacer />
																		<Text fontSize="2xs">
																			jSOL Deposit APR: <b>0%</b>
																		</Text>
																	</Flex>
																	<Flex align="center">
																		<Spacer />
																		<Text fontSize="2xs">
																			SOL Borrow APR: <b>0%</b>
																		</Text>
																	</Flex>
																</Stack>
															</Card.Body>
														</Card.Root>
													</Box>

													<Button size="lg">Super Stake 🚀</Button>
												</Flex>
											</Tabs.Content>

											<Tabs.Content value="unstake"></Tabs.Content>
										</Tabs.Root>
									</Flex>
								</Card.Body>
							</Card.Root>
						</Tabs.Content>
						<Tabs.Content value="ssol"></Tabs.Content>
					</Tabs.Root>
				</Container>
			</Box>

			<Footer />
		</Fragment>
	);
};

export default HomePage;
