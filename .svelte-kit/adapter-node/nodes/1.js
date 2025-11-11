

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.23a17c6f.js","_app/immutable/chunks/scheduler.fc6b6886.js","_app/immutable/chunks/index.83c0f759.js","_app/immutable/chunks/singletons.48f1dd9e.js","_app/immutable/chunks/index.31ac934a.js"];
export const stylesheets = [];
export const fonts = [];
