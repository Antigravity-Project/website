import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, SelectorIcon } from "@heroicons/react/solid";
import type { NextPage } from "next";
import Image from "next/image";
import { Fragment, useEffect, useState } from "react";
import { Header } from "web/components/header";

import type { User } from "types/user";

export const Dashboard: NextPage = () => {
	const FIRST_GUILD = 0;

	const [userData, setUserData] = useState<User | undefined>(undefined);

	const avatarUrl = `${process.env.NEXT_PUBLIC_DISCORD_CDN_URL}/avatars/${userData?.id}/${userData?.avatar}.webp?size=1024`;
	const username = userData?.username;
	const discriminator = userData?.discriminator;

	const [selected, setSelected] = useState(userData?.guilds[FIRST_GUILD].name);

	useEffect(() => {
		const storedUser = localStorage.getItem("account");
		if (!storedUser) {
			window.location.href = process.env
				.NEXT_PUBLIC_DISCORD_AUTHORIZATION_LINK as string;
		}

		setUserData(JSON.parse(storedUser as string) as User);
	}, []);

	useEffect(() => {
		setSelected(userData?.guilds[FIRST_GUILD].name);
	}, [userData]);

	return (
		<>
			<Header />
			<main className="bg-background-500 h-[calc(100vh-10rem)] flex items-center justify-center w-screen">
				<div className="flex flex-col gap-20 mt-10 md:flex-row md:gap-40">
					<div className="flex items-center justify-center flex-col gap-6 text-2xl pr-0 mt-20 md:pr-40 md:border-b-0 md:border-r-slate-500 md:border-r-2">
						<span className="duration-200 hover:scale-110">
							<Image
								src={avatarUrl}
								alt={`${username}'s avatar`}
								width="150px"
								height="150px"
								className="rounded-full"
							/>
						</span>
						<h2 className="flex text-ellipsis title text-white">
							{username}#{discriminator}
						</h2>
					</div>
					<div className="flex items-center justify-center flex-col md:items-start">
						<Listbox value={selected} onChange={setSelected}>
							<div className="relative mt-1 w-[50vw] flex items-center justify-center md:items-start md:justify-start">
								<Listbox.Button className="mb-8 max-w-[10rem] relative w-full cursor-pointer rounded-lg py-2 pl-3 pr-10 text-left shadow-[0_0_.25rem_black] focus:outline-none focus-visible:border-brand-400 focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-400 sm:text-sm">
									<span className="block truncate text-white font-sans">
										{selected || "Default"}
									</span>
									<span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
										<SelectorIcon
											className="h-5 w-5 text-white"
											aria-hidden="true"
										/>
									</span>
								</Listbox.Button>
								<Transition
									as={Fragment}
									enter="transition ease-out duration-200"
									enterFrom="opacity-0"
									enterTo="opacity-100"
									leave="transition ease-in duration-100"
									leaveFrom="opacity-100"
									leaveTo="opacity-0"
								>
									<Listbox.Options className="absolute mt-11 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm scrollbar scrollbar-track-transparent">
										{userData?.guilds
											.sort((a, b) => a.name.localeCompare(b.name))
											.map(({ id, name }) => (
												<Listbox.Option
													key={id}
													className={({ active }) =>
														`relative cursor-default select-none py-2 pl-10 pr-4 duration-200 ${
															active ? "bg-brand-400 text-white" : ""
														}`
													}
													value={name}
												>
													{({ selected: selectedItem }) => (
														<>
															<span
																className={`block truncate ${
																	selectedItem ? "font-medium" : "font-normal"
																}`}
															>
																{name}
															</span>
														{ selectedItem ? ( // eslint-disable-line
																<span className="absolute inset-y-0 left-0 flex items-center pl-3 text-white">
																	<CheckIcon
																		className="w-5 h-5"
																		aria-hidden="true"
																	/>
																</span>
															) : null}
														</>
													)}
												</Listbox.Option>
											))}
									</Listbox.Options>
								</Transition>
							</div>
						</Listbox>
						<h1>{selected}</h1>
					</div>
				</div>
			</main>
		</>
	);
};
