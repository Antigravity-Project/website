import type { NextPage } from "next";
import { variables } from "styles/variables";

import { Container } from "./styles";

export interface ButtonProps {
	onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
	children?: React.ReactNode;
	background?: "none" | "purple";
	disabled?: boolean;
	className?: string;
	borderRadius?: string;
}

export const Button: NextPage<ButtonProps> = ({
	onClick,
	children,
	background = "purple",
	borderRadius = "5px",
	disabled,
	className,
}: ButtonProps) => {
	return (
		<Container
			onClick={onClick}
			theme={{
				...variables,
				background,
				borderRadius,
			}}
			disabled={disabled}
			className={className}
		>
			{children}
		</Container>
	);
};
