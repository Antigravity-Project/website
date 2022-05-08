import { Popover, Transition } from "@headlessui/react";
import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";

const navLinks = [
	{
		href: "/commands",
		tag: "Comandos",
	},
	{
		href: "/terms",
		tag: "Termos de Uso",
	},
	{
		href: "/dashboard",
		tag: "Dashboard",
	},
];

export const Header: NextPage = () => {
	return (
		<>
			<header className="flex justify-between items-center bg-background-500 drop-shadow-[0_0_0.5rem_black] h-28 text-white">
				<h1 className="font-roboto text-2xl m-8 md:m-16">Antigravity</h1>
				<nav className="m-8 md:m-16">
					<ul className="hidden list-none gap-4 md:flex">
						{navLinks.map(({ href, tag }) => (
							<li
								className="p-[0.9rem] cursor-pointer duration-200 hover:bg-brand-400"
								key={tag}
							>
								<Link href={href} passHref>
									<a className="link">{tag}</a>
								</Link>
							</li>
						))}
					</ul>

					<Popover className="bg-transparent flex items-center justify-center z-10 md:hidden">
						<Popover.Button className="flex items-center justify-center">
							<Image src="/menu-button.svg" width="24px" height="24px" />
						</Popover.Button>

						<Transition
							as={Fragment}
							enter="transition ease-out duration-200"
							enterFrom="opacity-0 translate-y-1"
							enterTo="opacity-100 translate-y-0"
							leave="transition ease-in duration-150"
							leaveFrom="opacity-100 translate-y-0"
							leaveTo="opacity-0 translate-y-1"
						>
							<Popover.Panel>
								<div className="absolute top-5 right-1 p-5 items-center shadow-lg bg-white flex flex-col w-[12rem] -z-20">
									<ul className="list-none gap-4">
										{navLinks.map(({ href, tag }) => (
											<li className="p-[0.9rem] cursor-pointer" key={tag}>
												<Link href={href} passHref>
													<a className="!text-black link">{tag}</a>
												</Link>
											</li>
										))}
									</ul>
								</div>
							</Popover.Panel>
						</Transition>
					</Popover>
				</nav>
			</header>
		</>
	);
};
