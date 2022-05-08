export interface Guild {
	features: Array<string>;
	icon: string | null;
	id: string;
	name: string;
	owner: boolean;
	permissions: string;
}
