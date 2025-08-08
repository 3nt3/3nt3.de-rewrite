type DynamicRoutes = {
	"/blog/[slug]": { slug: string };
	"/blog/[slug]/[...rest]": { slug: string; rest: string }
};

type Layouts = {
	"/": { slug?: string; rest?: string };
	"/blog": { slug?: string; rest?: string };
	"/blog/[slug]": { slug: string; rest?: string };
	"/blog/[slug]/[...rest]": { slug: string; rest: string }
};

export type RouteId = "/" | "/blog" | "/blog/[slug]" | "/blog/[slug]/[...rest]";

export type RouteParams<T extends RouteId> = T extends keyof DynamicRoutes ? DynamicRoutes[T] : Record<string, never>;

export type LayoutParams<T extends RouteId> = Layouts[T] | Record<string, never>;

export type Pathname = "/" | "/blog" | `/blog/${string}` & {} | `/blog/${string}/${string}` & {};

export type ResolvedPathname = `${"" | `/${string}`}${Pathname}`;

export type Asset = "/favicon.png" | "/hero image.png" | "/portrait.jpg" | "/projects/bike.webp" | "/projects/digital.webp" | "/projects/monster.webp" | "/projects/portfolio.webp" | "/projects/printer.webp" | "/projects/tutoring.webp";