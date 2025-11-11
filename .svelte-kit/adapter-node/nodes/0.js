import * as universal from '../entries/pages/_layout.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.ts";
export const imports = ["_app/immutable/nodes/0.d6305f10.js","_app/immutable/chunks/scheduler.fc6b6886.js","_app/immutable/chunks/index.83c0f759.js"];
export const stylesheets = ["_app/immutable/assets/0.b65c8b00.css"];
export const fonts = [];
