const butInstall = document.getElementById('buttonInstall');

window.addEventListener('beforeinstallprompt', (event) => {
    window.deferredPrompt = event;
    installBtn.classList.toggle('hidden', false);
});

installBtn.addEventListener('click', async () => {
    const promptEvent = window.deferredPrompt;

    if (!promptEvent) {
        return;
    }

    promptEvent.prompt();
    window.deferredPrompt = null;
    installBtn.classList.toggle('hidden', true);
});

windpw.addEventListener('appinstalled', (event) => {
    window.deferredPrompt = null;
});