import * as universal from '../entries/pages/_page.ts.js';
import * as server from '../entries/pages/_page.server.ts.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.ts";
export { server };
export const server_id = "src/routes/+page.server.ts";
export const imports = ["_app/immutable/nodes/2.0ee3e13c.js","_app/immutable/chunks/scheduler.fc6b6886.js","_app/immutable/chunks/index.83c0f759.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/index.31ac934a.js"];
export const stylesheets = ["_app/immutable/assets/2.93b64f05.css"];
export const fonts = [];
