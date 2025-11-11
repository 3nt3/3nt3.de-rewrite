
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
	export const LOGNAME: string;
	export const KITTY_WINDOW_ID: string;
	export const SPICETIFY_INSTALL: string;
	export const GRADLE_HOME: string;
	export const LS_COLORS: string;
	export const QT_DEVICE_PIXEL_RATIO: string;
	export const MASON: string;
	export const XDG_SESSION_PATH: string;
	export const XDG_SEAT: string;
	export const MOTD_SHOWN: string;
	export const PERL_MB_OPT: string;
	export const PATH: string;
	export const CSF_STEPDefaults: string;
	export const GPG_TTY: string;
	export const CSF_PluginDefaults: string;
	export const CSF_XSMessage: string;
	export const DBUS_SESSION_BUS_ADDRESS: string;
	export const HL_INITIAL_WORKSPACE_TOKEN: string;
	export const _JAVA_AWT_WM_NONREPARENTING: string;
	export const LANG: string;
	export const CSF_XCAFDefaults: string;
	export const CSF_IGESDefaults: string;
	export const XCURSOR_SIZE: string;
	export const FZF_ALT_C_COMMAND: string;
	export const USER: string;
	export const CSF_StandardLiteDefaults: string;
	export const SHELL: string;
	export const TERM: string;
	export const CSF_TObjMessage: string;
	export const _: string;
	export const CSF_StandardDefaults: string;
	export const XDG_SESSION_ID: string;
	export const PERL_LOCAL_LIB_ROOT: string;
	export const XDG_SEAT_PATH: string;
	export const CSF_ShadersDirectory: string;
	export const LSCOLORS: string;
	export const OLDPWD: string;
	export const MMGT_CLEAR: string;
	export const EDITOR: string;
	export const CSF_LANGUAGE: string;
	export const GDK_SCALE: string;
	export const XDG_BACKEND: string;
	export const ZSH: string;
	export const COLORTERM: string;
	export const KITTY_INSTALLATION_DIR: string;
	export const XDG_VTNR: string;
	export const TEXMFHOME: string;
	export const MOZ_ENABLE_WAYLAND: string;
	export const LESS: string;
	export const KITTY_PUBLIC_KEY: string;
	export const TEXMFLOCAL: string;
	export const CSF_XmlOcafResource: string;
	export const PICO_SDK_PATH: string;
	export const QT_QPA_PLATFORM: string;
	export const XDG_SESSION_CLASS: string;
	export const QT_QPA_PLATFORMTHEME: string;
	export const DRAWHOME: string;
	export const DRAWDEFAULT: string;
	export const PERL_MM_OPT: string;
	export const WAYLAND_DISPLAY: string;
	export const CSF_SHMessage: string;
	export const QT_SCALE_FACTOR: string;
	export const ANDROID_HOME: string;
	export const XDG_DATA_DIRS: string;
	export const XDG_CURRENT_DESKTOP: string;
	export const MYVIMRC: string;
	export const CSF_TObjDefaults: string;
	export const HYPRLAND_CMD: string;
	export const NVIM_LOG_FILE: string;
	export const XDG_SESSION_DESKTOP: string;
	export const DEBUGINFOD_URLS: string;
	export const CASROOT: string;
	export const PAGER: string;
	export const DESKTOP_SESSION: string;
	export const XDG_SESSION_TYPE: string;
	export const CSF_EXCEPTION_PROMPT: string;
	export const QT_WAYLAND_DISABLE_WINDOWDECORATION: string;
	export const QT_STYLE_OVERRIDE: string;
	export const PWD: string;
	export const SHLVL: string;
	export const LC_ALL: string;
	export const CSF_DrawPluginDefaults: string;
	export const DISPLAY: string;
	export const CSF_MDTVTexturesDirectory: string;
	export const MAIL: string;
	export const CSF_OCCTResourcePath: string;
	export const FZF_DEFAULT_COMMAND: string;
	export const VIMRUNTIME: string;
	export const XCURSOR_THEME: string;
	export const NVIM: string;
	export const HYPRLAND_INSTANCE_SIGNATURE: string;
	export const QT_AUTO_SCREEN_SCALE_FACTOR: string;
	export const PERL5LIB: string;
	export const XDG_RUNTIME_DIR: string;
	export const PNPM_HOME: string;
	export const FZF_CTRL_T_COMMAND: string;
	export const TERMINFO: string;
	export const HOME: string;
	export const KITTY_PID: string;
	export const PYTHON_KEYRING_BACKEND: string;
	export const CSF_MIGRATION_TYPES: string;
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
		LOGNAME: string;
		KITTY_WINDOW_ID: string;
		SPICETIFY_INSTALL: string;
		GRADLE_HOME: string;
		LS_COLORS: string;
		QT_DEVICE_PIXEL_RATIO: string;
		MASON: string;
		XDG_SESSION_PATH: string;
		XDG_SEAT: string;
		MOTD_SHOWN: string;
		PERL_MB_OPT: string;
		PATH: string;
		CSF_STEPDefaults: string;
		GPG_TTY: string;
		CSF_PluginDefaults: string;
		CSF_XSMessage: string;
		DBUS_SESSION_BUS_ADDRESS: string;
		HL_INITIAL_WORKSPACE_TOKEN: string;
		_JAVA_AWT_WM_NONREPARENTING: string;
		LANG: string;
		CSF_XCAFDefaults: string;
		CSF_IGESDefaults: string;
		XCURSOR_SIZE: string;
		FZF_ALT_C_COMMAND: string;
		USER: string;
		CSF_StandardLiteDefaults: string;
		SHELL: string;
		TERM: string;
		CSF_TObjMessage: string;
		_: string;
		CSF_StandardDefaults: string;
		XDG_SESSION_ID: string;
		PERL_LOCAL_LIB_ROOT: string;
		XDG_SEAT_PATH: string;
		CSF_ShadersDirectory: string;
		LSCOLORS: string;
		OLDPWD: string;
		MMGT_CLEAR: string;
		EDITOR: string;
		CSF_LANGUAGE: string;
		GDK_SCALE: string;
		XDG_BACKEND: string;
		ZSH: string;
		COLORTERM: string;
		KITTY_INSTALLATION_DIR: string;
		XDG_VTNR: string;
		TEXMFHOME: string;
		MOZ_ENABLE_WAYLAND: string;
		LESS: string;
		KITTY_PUBLIC_KEY: string;
		TEXMFLOCAL: string;
		CSF_XmlOcafResource: string;
		PICO_SDK_PATH: string;
		QT_QPA_PLATFORM: string;
		XDG_SESSION_CLASS: string;
		QT_QPA_PLATFORMTHEME: string;
		DRAWHOME: string;
		DRAWDEFAULT: string;
		PERL_MM_OPT: string;
		WAYLAND_DISPLAY: string;
		CSF_SHMessage: string;
		QT_SCALE_FACTOR: string;
		ANDROID_HOME: string;
		XDG_DATA_DIRS: string;
		XDG_CURRENT_DESKTOP: string;
		MYVIMRC: string;
		CSF_TObjDefaults: string;
		HYPRLAND_CMD: string;
		NVIM_LOG_FILE: string;
		XDG_SESSION_DESKTOP: string;
		DEBUGINFOD_URLS: string;
		CASROOT: string;
		PAGER: string;
		DESKTOP_SESSION: string;
		XDG_SESSION_TYPE: string;
		CSF_EXCEPTION_PROMPT: string;
		QT_WAYLAND_DISABLE_WINDOWDECORATION: string;
		QT_STYLE_OVERRIDE: string;
		PWD: string;
		SHLVL: string;
		LC_ALL: string;
		CSF_DrawPluginDefaults: string;
		DISPLAY: string;
		CSF_MDTVTexturesDirectory: string;
		MAIL: string;
		CSF_OCCTResourcePath: string;
		FZF_DEFAULT_COMMAND: string;
		VIMRUNTIME: string;
		XCURSOR_THEME: string;
		NVIM: string;
		HYPRLAND_INSTANCE_SIGNATURE: string;
		QT_AUTO_SCREEN_SCALE_FACTOR: string;
		PERL5LIB: string;
		XDG_RUNTIME_DIR: string;
		PNPM_HOME: string;
		FZF_CTRL_T_COMMAND: string;
		TERMINFO: string;
		HOME: string;
		KITTY_PID: string;
		PYTHON_KEYRING_BACKEND: string;
		CSF_MIGRATION_TYPES: string;
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
