import type { Guild } from "./guild";

export interface User {
	id: string;
	username: string;
	avatar: string;
	accent_color: string | null; // eslint-disable-line @typescript-eslint/naming-convention
	avatar_decoration: string | null; // eslint-disable-line @typescript-eslint/naming-convention
	banner: string | null;
	banner_color: string | null; // eslint-disable-line @typescript-eslint/naming-convention
	discriminator: string;
	flags: number;
	guilds: Array<Guild>;
	locale: string;
	mfa_enabled: boolean; // eslint-disable-line @typescript-eslint/naming-convention
	public_flags: number; // eslint-disable-line @typescript-eslint/naming-convention
	refreshToken: string;
}
