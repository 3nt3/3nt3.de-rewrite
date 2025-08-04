
// this file is generated — do not edit it


/// <reference types="@sveltejs/kit" />

/**
 * Environment variables [loaded by Vite](https://vitejs.dev/guide/env-and-mode.html#env-files) from `.env` files and `process.env`. Like [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private), this module cannot be imported into client-side code. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://svelte.dev/docs/kit/configuration#env) (if configured).
 * 
 * _Unlike_ [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private), the values exported from this module are statically injected into your bundle at build time, enabling optimisations like dead code elimination.
 * 
 * ```ts
 * import { API_KEY } from '$env/static/private';
 * ```
 * 
 * Note that all environment variables referenced in your code should be declared (for example in an `.env` file), even if they don't have a value until the app is deployed:
 * 
 * ```
 * MY_FEATURE_FLAG=""
 * ```
 * 
 * You can override `.env` values from the command line like so:
 * 
 * ```bash
 * MY_FEATURE_FLAG="enabled" npm run dev
 * ```
 */
declare module '$env/static/private' {
	export const SHELL: string;
	export const npm_command: string;
	export const LSCOLORS: string;
	export const npm_config_userconfig: string;
	export const COLORTERM: string;
	export const CSF_MDTVTexturesDirectory: string;
	export const HYPRLAND_CMD: string;
	export const npm_config_cache: string;
	export const LESS: string;
	export const XDG_SESSION_PATH: string;
	export const XDG_BACKEND: string;
	export const CSF_DrawPluginDefaults: string;
	export const QT_WAYLAND_DISABLE_WINDOWDECORATION: string;
	export const NODE: string;
	export const TEXMFHOME: string;
	export const CSF_LANGUAGE: string;
	export const CSF_MIGRATION_TYPES: string;
	export const GRADLE_HOME: string;
	export const COLOR: string;
	export const npm_config_local_prefix: string;
	export const DESKTOP_SESSION: string;
	export const KITTY_PID: string;
	export const CSF_OCCTResourcePath: string;
	export const HL_INITIAL_WORKSPACE_TOKEN: string;
	export const npm_config_globalconfig: string;
	export const CSF_STEPDefaults: string;
	export const GPG_TTY: string;
	export const EDITOR: string;
	export const XDG_SEAT: string;
	export const TEXMFLOCAL: string;
	export const PWD: string;
	export const XDG_SESSION_DESKTOP: string;
	export const LOGNAME: string;
	export const QT_QPA_PLATFORMTHEME: string;
	export const XDG_SESSION_TYPE: string;
	export const DRAWHOME: string;
	export const npm_config_init_module: string;
	export const _: string;
	export const CSF_StandardLiteDefaults: string;
	export const KITTY_PUBLIC_KEY: string;
	export const FZF_DEFAULT_COMMAND: string;
	export const MOTD_SHOWN: string;
	export const HOME: string;
	export const LANG: string;
	export const LS_COLORS: string;
	export const _JAVA_AWT_WM_NONREPARENTING: string;
	export const XDG_CURRENT_DESKTOP: string;
	export const npm_package_version: string;
	export const SPICETIFY_INSTALL: string;
	export const WAYLAND_DISPLAY: string;
	export const KITTY_WINDOW_ID: string;
	export const XDG_SEAT_PATH: string;
	export const INIT_CWD: string;
	export const CSF_ShadersDirectory: string;
	export const CSF_EXCEPTION_PROMPT: string;
	export const CSF_XmlOcafResource: string;
	export const QT_QPA_PLATFORM: string;
	export const npm_lifecycle_script: string;
	export const CSF_SHMessage: string;
	export const npm_config_npm_version: string;
	export const XDG_SESSION_CLASS: string;
	export const ANDROID_HOME: string;
	export const TERMINFO: string;
	export const TERM: string;
	export const npm_package_name: string;
	export const FZF_CTRL_T_COMMAND: string;
	export const ZSH: string;
	export const npm_config_prefix: string;
	export const USER: string;
	export const FZF_ALT_C_COMMAND: string;
	export const CUDA_PATH: string;
	export const MARKPATH: string;
	export const CSF_StandardDefaults: string;
	export const CSF_IGESDefaults: string;
	export const HYPRLAND_INSTANCE_SIGNATURE: string;
	export const PYTHON_KEYRING_BACKEND: string;
	export const DISPLAY: string;
	export const CSF_XCAFDefaults: string;
	export const npm_lifecycle_event: string;
	export const SHLVL: string;
	export const MOZ_ENABLE_WAYLAND: string;
	export const PAGER: string;
	export const ANDROID_SDK_ROOT: string;
	export const XDG_VTNR: string;
	export const CSF_PluginDefaults: string;
	export const CSF_TObjMessage: string;
	export const XDG_SESSION_ID: string;
	export const npm_config_user_agent: string;
	export const CASROOT: string;
	export const ROCM_PATH: string;
	export const npm_execpath: string;
	export const XDG_RUNTIME_DIR: string;
	export const NVCC_CCBIN: string;
	export const DEBUGINFOD_URLS: string;
	export const npm_package_json: string;
	export const LC_ALL: string;
	export const QT_AUTO_SCREEN_SCALE_FACTOR: string;
	export const CSF_XSMessage: string;
	export const MMGT_CLEAR: string;
	export const XDG_DATA_DIRS: string;
	export const npm_config_noproxy: string;
	export const PATH: string;
	export const CSF_TObjDefaults: string;
	export const GDK_SCALE: string;
	export const npm_config_node_gyp: string;
	export const DBUS_SESSION_BUS_ADDRESS: string;
	export const npm_config_global_prefix: string;
	export const MAIL: string;
	export const DRAWDEFAULT: string;
	export const KITTY_INSTALLATION_DIR: string;
	export const npm_node_execpath: string;
	export const OLDPWD: string;
	export const NODE_ENV: string;
}

/**
 * Similar to [`$env/static/private`](https://svelte.dev/docs/kit/$env-static-private), except that it only includes environment variables that begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Values are replaced statically at build time.
 * 
 * ```ts
 * import { PUBLIC_BASE_URL } from '$env/static/public';
 * ```
 */
declare module '$env/static/public' {
	
}

/**
 * This module provides access to runtime environment variables, as defined by the platform you're running on. For example if you're using [`adapter-node`](https://github.com/sveltejs/kit/tree/main/packages/adapter-node) (or running [`vite preview`](https://svelte.dev/docs/kit/cli)), this is equivalent to `process.env`. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://svelte.dev/docs/kit/configuration#env) (if configured).
 * 
 * This module cannot be imported into client-side code.
 * 
 * Dynamic environment variables cannot be used during prerendering.
 * 
 * ```ts
 * import { env } from '$env/dynamic/private';
 * console.log(env.DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 * 
 * > In `dev`, `$env/dynamic` always includes environment variables from `.env`. In `prod`, this behavior will depend on your adapter.
 */
declare module '$env/dynamic/private' {
	export const env: {
		SHELL: string;
		npm_command: string;
		LSCOLORS: string;
		npm_config_userconfig: string;
		COLORTERM: string;
		CSF_MDTVTexturesDirectory: string;
		HYPRLAND_CMD: string;
		npm_config_cache: string;
		LESS: string;
		XDG_SESSION_PATH: string;
		XDG_BACKEND: string;
		CSF_DrawPluginDefaults: string;
		QT_WAYLAND_DISABLE_WINDOWDECORATION: string;
		NODE: string;
		TEXMFHOME: string;
		CSF_LANGUAGE: string;
		CSF_MIGRATION_TYPES: string;
		GRADLE_HOME: string;
		COLOR: string;
		npm_config_local_prefix: string;
		DESKTOP_SESSION: string;
		KITTY_PID: string;
		CSF_OCCTResourcePath: string;
		HL_INITIAL_WORKSPACE_TOKEN: string;
		npm_config_globalconfig: string;
		CSF_STEPDefaults: string;
		GPG_TTY: string;
		EDITOR: string;
		XDG_SEAT: string;
		TEXMFLOCAL: string;
		PWD: string;
		XDG_SESSION_DESKTOP: string;
		LOGNAME: string;
		QT_QPA_PLATFORMTHEME: string;
		XDG_SESSION_TYPE: string;
		DRAWHOME: string;
		npm_config_init_module: string;
		_: string;
		CSF_StandardLiteDefaults: string;
		KITTY_PUBLIC_KEY: string;
		FZF_DEFAULT_COMMAND: string;
		MOTD_SHOWN: string;
		HOME: string;
		LANG: string;
		LS_COLORS: string;
		_JAVA_AWT_WM_NONREPARENTING: string;
		XDG_CURRENT_DESKTOP: string;
		npm_package_version: string;
		SPICETIFY_INSTALL: string;
		WAYLAND_DISPLAY: string;
		KITTY_WINDOW_ID: string;
		XDG_SEAT_PATH: string;
		INIT_CWD: string;
		CSF_ShadersDirectory: string;
		CSF_EXCEPTION_PROMPT: string;
		CSF_XmlOcafResource: string;
		QT_QPA_PLATFORM: string;
		npm_lifecycle_script: string;
		CSF_SHMessage: string;
		npm_config_npm_version: string;
		XDG_SESSION_CLASS: string;
		ANDROID_HOME: string;
		TERMINFO: string;
		TERM: string;
		npm_package_name: string;
		FZF_CTRL_T_COMMAND: string;
		ZSH: string;
		npm_config_prefix: string;
		USER: string;
		FZF_ALT_C_COMMAND: string;
		CUDA_PATH: string;
		MARKPATH: string;
		CSF_StandardDefaults: string;
		CSF_IGESDefaults: string;
		HYPRLAND_INSTANCE_SIGNATURE: string;
		PYTHON_KEYRING_BACKEND: string;
		DISPLAY: string;
		CSF_XCAFDefaults: string;
		npm_lifecycle_event: string;
		SHLVL: string;
		MOZ_ENABLE_WAYLAND: string;
		PAGER: string;
		ANDROID_SDK_ROOT: string;
		XDG_VTNR: string;
		CSF_PluginDefaults: string;
		CSF_TObjMessage: string;
		XDG_SESSION_ID: string;
		npm_config_user_agent: string;
		CASROOT: string;
		ROCM_PATH: string;
		npm_execpath: string;
		XDG_RUNTIME_DIR: string;
		NVCC_CCBIN: string;
		DEBUGINFOD_URLS: string;
		npm_package_json: string;
		LC_ALL: string;
		QT_AUTO_SCREEN_SCALE_FACTOR: string;
		CSF_XSMessage: string;
		MMGT_CLEAR: string;
		XDG_DATA_DIRS: string;
		npm_config_noproxy: string;
		PATH: string;
		CSF_TObjDefaults: string;
		GDK_SCALE: string;
		npm_config_node_gyp: string;
		DBUS_SESSION_BUS_ADDRESS: string;
		npm_config_global_prefix: string;
		MAIL: string;
		DRAWDEFAULT: string;
		KITTY_INSTALLATION_DIR: string;
		npm_node_execpath: string;
		OLDPWD: string;
		NODE_ENV: string;
		[key: `PUBLIC_${string}`]: undefined;
		[key: `${string}`]: string | undefined;
	}
}

/**
 * Similar to [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private), but only includes variables that begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Note that public dynamic environment variables must all be sent from the server to the client, causing larger network requests — when possible, use `$env/static/public` instead.
 * 
 * Dynamic environment variables cannot be used during prerendering.
 * 
 * ```ts
 * import { env } from '$env/dynamic/public';
 * console.log(env.PUBLIC_DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 */
declare module '$env/dynamic/public' {
	export const env: {
		[key: `PUBLIC_${string}`]: string | undefined;
	}
}
