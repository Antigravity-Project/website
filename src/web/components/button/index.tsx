import type { NextPage } from "next";

export interface ButtonProps {
	onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
	children?: React.ReactNode;
	background?: "none" | "purple";
	disabled?: boolean;
}

export const Button: NextPage<ButtonProps> = ({
	onClick,
	children,
	background = "purple",
	disabled,
}: ButtonProps) => {
	return (
		<button
			onClick={onClick}
			disabled={disabled}
			className={
				background === "purple"
					? "p-[15px] bg-brand-400 text-white rounded-md font-sans hover:brightness-110 hover:drop-shadow-[0_0_.25rem_#7F5AF0] focus:brightness-110 focus:drop-shadow-[0_0_.25rem_#7F5AF0]  focus:outline-none duration-200"
					: "p-[15px] bg-transparent text-brand-400 rounded-md font-sans border-[1px] border-solid border-brand-400 hover:text-white hover:bg-brand-400 focus:text-white focus:bg-brand-400 focus:outline-none duration-200"
			}
		>
			{children}
		</button>
	);
};
