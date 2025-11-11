const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","hero image.png","portrait.jpg","projects/bike.webp","projects/digital.webp","projects/monster.webp","projects/portfolio.webp","projects/printer.webp","projects/tutoring.webp"]),
	mimeTypes: {".png":"image/png",".jpg":"image/jpeg",".webp":"image/webp"},
	_: {
		client: {"start":"_app/immutable/entry/start.d012c88c.js","app":"_app/immutable/entry/app.1b39f272.js","imports":["_app/immutable/entry/start.d012c88c.js","_app/immutable/chunks/scheduler.fc6b6886.js","_app/immutable/chunks/singletons.48f1dd9e.js","_app/immutable/chunks/index.31ac934a.js","_app/immutable/entry/app.1b39f272.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/scheduler.fc6b6886.js","_app/immutable/chunks/index.83c0f759.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./chunks/0-ovmJA0Kv.js')),
			__memo(() => import('./chunks/1-C8jydL2D.js')),
			__memo(() => import('./chunks/2-ttOrvzG9.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();

const prerendered = new Set([]);

const base = "";

export { base, manifest, prerendered };
//# sourceMappingURL=manifest.js.map
