// ==UserScript==
// @name          discord-theme
// @version       0.1
// @author        Kafva
// @description   Changes the default css for Discord
// @namespace     https://raw.githubusercontent.com/Kafva/
// @downloadUrl   https://raw.githubusercontent.com/Kafva/clickerman/main/discord-theme.user.js
// @updateUrl     https://raw.githubusercontent.com/Kafva/clickerman/main/discord-theme.user.js

// @icon          https://i.imgur.com/vF9kdsr.png
// @include       https://app.discord.com/*
// @include       https://www.discord.com/*
// @include       https://discord.com/*
// @resource      css https://raw.githubusercontent.com/Kafva/clickerman/main/css/discord.css
// @grant         GM_addStyle
// @grant         GM_getResourceText
// ==/UserScript==

// file:///Users/jonas/Repos/clickerman/discord-theme.user.js
// GM_addStyle(GM_getResourceText("css"));



// (async () => {  
// 	await new Promise(r => setTimeout(r, 3000)); 
// 	document.querySelector('#online-tab,div[class^="pageWrapper"]').style.backgroundColor='#23283d'	
// })();


// Copied from css/discord.css
// (Hot-reloading does not track changes to @resources)
GM_addStyle(`
#online-tab,div[class^="pageWrapper"] {
	/* The second selector works in the debug console but not in practice... 
	 * It works if we use a delay but that does not work if we load the page
	 * after the event has fired and is not a preferable solution
	 * */
	background-color: #23283d;
}

/* https://github.com/NYRI4/Comfy/blob/master/_variables.scss */
.theme-dark {
    --background-tertiary: #101320;
    --background-secondary: #1e2233;
    --background-secondary-alt: #191f2e;
    --background-primary: #23283d;
    --background-mobile-primary: #23283d;
    --background-mobile-secondary: #1e2233;
    --channeltextarea-background: #191f2e;
    --background-accent: #6E85D3;
    --background-message-hover: transparent;
    --background-modifier-hover: #00000010;
    --background-modifier-active: #0000001a;
    --background-modifier-selected: #0000001f;
    --deprecated-card-bg: #12141f63;
    --background-floating: #101320;
    --deprecated-quickswitcher-input-background:#101320;
    --elevation-low: none;
    --scrollbar-auto-thumb: #121722;
    --scrollbar-auto-track: #191f2e;
    --scrollbar-thin-thumb: #141925;
    --toast-background: #1e2233 !important;
    --toast-header: #101320 !important;
    --toast-contents: #23283d !important;
    --activity-card-background: #101320;
}
`)