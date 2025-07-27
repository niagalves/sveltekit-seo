type OgProps = {
	url?: string;
	secureUrl?: string;
	type?: string;
	width?: string;
	height?: string;
};

type Metatag = {
	metatag: {
		title: string;
		description: string;
		keywords?: string[];
		author?: string;
		follow?: boolean;
		language?: string;
		canonical?: string;
		ldJson?: unknown;
		og: {
			fbAppId?: string;
			siteName: string;
			type: string;
			image: ({
				alt?: string;
			} & OgProps)[];
			video?: OgProps[];
			audio?: Omit<OgProps, 'width' | 'height'>[];
		};
		custom?: {
			name?: string;
			property?: string;
			content: string;
		}[];
		x?: {
			siteId?: string;
			creator?: string;
			creatorId?: string;
			card?: string;
			site?: string;
			image?: {
				url?: string;
				alt?: string;
			}[];
			player?: {
				url?: string;
				width?: string;
				height?: string;
				stream?: string;
			}[];
		};
	};
};
