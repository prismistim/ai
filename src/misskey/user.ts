export type User = {
	id: string;
	name: string;
	username: string;
	host?: string | null;
	isFollowing?: boolean;
	isBot: boolean;
	avatarUrl: string;
	avatarBlurhash?: string | null;
	emoji?: string | null;
};
