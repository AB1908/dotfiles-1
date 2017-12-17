// Minhas alterações ao about:config do Firefox
//
// Rafael Cavalcanti


// Arch Wiki
user_pref("security.ssl3.dhe_rsa_aes_256_sha", false);
user_pref("security.ssl3.dhe_rsa_aes_128_sha", false);
user_pref("geo.enabled", false);
user_pref("webgl.disabled", true);

// Pra aparecer OpenGL no about:support - Graphics (OpenGL Off-Main-Thread
// Compositing - OMTC - Arch Wiki). Acho que ajudou com tearing.
user_pref("layers.acceleration.force-enabled", true);


// ==================================================================
// Privacy, security
// ==================================================================

// Tracking protection (ativado pela GUI no 57+)
user_pref("privacy.trackingprotection.enabled", true);


// ==================================================================
// Annoyances, workflow
// ==================================================================

// Não verificar se é navegador padrão
user_pref("browser.shell.checkDefaultBrowser", false);

// Desativar Pocket
user_pref("extensions.pocket.enabled", false);

// Não tocar vídeo até estar em primeiro plano
// (padrão em 56+)
user_pref("media.block-autoplay-until-in-foreground", true);

// Não mostrar aviso de tela cheia
user_pref("full-screen-api.warning.timeout", 0);

// Não auto-esconder barras de ferramentas em modo de tela cheia
user_pref("browser.fullscreen.autohide", false);

// Desativar aviso do about:config
user_pref("general.warnOnAboutConfig", false);

// Abrir nova janela em nova aba
user_pref("browser.link.open_newwindow.restriction", 0);

// Não fechar navegador ao fechar última aba
//user_pref("browser.tabs.closeWindowWithLastTab", false);

// Abrir "Buscar no Google" do menu de contexto em segundo plano
user_pref("browser.search.context.loadInBackground", true);

// Quando abrir favoritos em nova aba, fazê-lo em segundo plano
//user_pref("browser.tabs.loadBookmarksInBackground", true);

// Quando abrir favoritos em nova aba, não fechar menu de favoritos (57+)
user_pref("browser.bookmarks.openInTabClosesMenu", false);


// ==================================================================
// Daqui pra baixo, o que mexi pela GUI e achei no pref.js
// ==================================================================

// Restaurar sessão ao iniciar
user_pref("browser.startup.page", 3);

// Não aceitar third-party cookies
user_pref("network.cookie.cookieBehavior", 1);

// Trocar fontes para as usadas no Chrome (na GUI em "Advanced")
user_pref("font.name.monospace.x-western", "monospace");
user_pref("font.name.sans-serif.x-western", "Arial");
user_pref("font.name.serif.x-western", "Times New Roman");

//// Adicionar Blogtrotrr como feed reader (aparente resultado de ter clicado no link
//// para tal no site deles)
//user_pref("browser.contentHandlers.types.6.title", "Blogtrottr");
//user_pref("browser.contentHandlers.types.6.type", "application/vnd.mozilla.maybe.feed");
//user_pref("browser.contentHandlers.types.6.uri", "https://blogtrottr.com/?subscribe=%s");
