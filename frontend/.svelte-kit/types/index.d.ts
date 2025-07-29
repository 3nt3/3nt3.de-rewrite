type DynamicRoutes = {
	
};

type Layouts = {
	"/": undefined;
	"/blog": undefined
};

export type RouteId = "/" | "/blog";

export type RouteParams<T extends RouteId> = T extends keyof DynamicRoutes ? DynamicRoutes[T] : Record<string, never>;

export type LayoutParams<T extends RouteId> = Layouts[T] | Record<string, never>;

export type Pathname = "/" | "/blog";

export type ResolvedPathname = `${"" | `/${string}`}${Pathname}`;

export type Asset = "/favicon.png" | "/hero image.png" | "/portrait.jpg" | "/projects/bike.webp" | "/projects/digital.webp" | "/projects/monster.webp" | "/projects/portfolio.webp" | "/projects/printer.webp" | "/projects/tutoring.webp";