// GrandForum - Community Platform Scripts

document.addEventListener('DOMContentLoaded', function () {

    /* ---- SIDEBAR TOGGLE ---- */
    const sideToggle  = document.getElementById('sideToggle');
    const side        = document.getElementById('side');
    const outerHeader = document.getElementById('outerHeader');
    const mBody       = document.getElementById('mBody');

    let sideCollapsed = false;

    // Restore state from cookie
    if (document.cookie.includes('sideToggled=in')) {
        collapseSidebar(false);
    }

    if (sideToggle) {
        sideToggle.addEventListener('click', function () {
            if (sideCollapsed) {
                expandSidebar();
            } else {
                collapseSidebar(true);
            }
        });
    }

    function collapseSidebar(animate) {
        sideCollapsed = true;
        if (side)        side.classList.add('collapsed');
        if (outerHeader) outerHeader.classList.add('expanded');
        if (mBody)       mBody.classList.add('expanded');
        if (sideToggle)  sideToggle.innerHTML = '&#10094;';
        document.cookie = 'sideToggled=in; path=/';
    }

    function expandSidebar() {
        sideCollapsed = false;
        if (side)        side.classList.remove('collapsed');
        if (outerHeader) outerHeader.classList.remove('expanded');
        if (mBody)       mBody.classList.remove('expanded');
        if (sideToggle)  sideToggle.innerHTML = '&#10095;';
        document.cookie = 'sideToggled=out; path=/';
    }


    /* ---- MODAL SYSTEM ---- */
    const overlay      = document.getElementById('modalOverlay');
    const loginBtn     = document.getElementById('loginBtn');
    const registerBtn  = document.getElementById('registerBtn');
    const loginModal   = document.getElementById('loginModal');
    const registerModal = document.getElementById('registerModal');

    function openModal(modal) {
        if (!modal) return;
        closeAllModals();
        modal.classList.add('active');
        if (overlay) overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeAllModals() {
        document.querySelectorAll('.modal').forEach(m => m.classList.remove('active'));
        if (overlay) overlay.classList.remove('active');
        document.body.style.overflow = '';
    }

    if (loginBtn)    loginBtn.addEventListener('click',    e => { e.preventDefault(); openModal(loginModal); });
    if (registerBtn) registerBtn.addEventListener('click', e => { e.preventDefault(); openModal(registerModal); });

    // Close buttons on modals
    document.querySelectorAll('.modal-close').forEach(btn => {
        btn.addEventListener('click', closeAllModals);
    });

    // Click overlay to close
    if (overlay) overlay.addEventListener('click', closeAllModals);

    // ESC key to close
    document.addEventListener('keydown', e => {
        if (e.key === 'Escape') closeAllModals();
    });

    // Switch between login / register
    const switchToRegister = document.getElementById('switchToRegister');
    const switchToLogin    = document.getElementById('switchToLogin');
    if (switchToRegister) switchToRegister.addEventListener('click', e => { e.preventDefault(); openModal(registerModal); });
    if (switchToLogin)    switchToLogin.addEventListener('click',    e => { e.preventDefault(); openModal(loginModal); });


    /* ---- FORM HANDLING ---- */
    const loginForm    = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');

    if (loginForm) {
        loginForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const user = document.getElementById('loginUser');
            const pass = document.getElementById('loginPass');
            if (!user.value.trim() || !pass.value.trim()) {
                showFormError(loginForm, 'Bitte Benutzername und Passwort eingeben.');
                return;
            }
            closeAllModals();
            showNotification('Anmeldung erfolgreich! (Demo)', 'success');
        });
    }

    if (registerForm) {
        registerForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const pass  = document.getElementById('regPass');
            const pass2 = document.getElementById('regPass2');
            if (pass && pass2 && pass.value !== pass2.value) {
                showFormError(registerForm, 'Passwörter stimmen nicht überein.');
                return;
            }
            closeAllModals();
            showNotification('Registrierung erfolgreich! (Demo)', 'success');
        });
    }


    /* ---- NOTIFICATION TOAST ---- */
    function showNotification(message, type) {
        const toast = document.createElement('div');
        toast.className = 'toast toast-' + (type || 'info');
        toast.textContent = message;
        document.body.appendChild(toast);
        setTimeout(() => toast.classList.add('visible'), 10);
        setTimeout(() => {
            toast.classList.remove('visible');
            setTimeout(() => toast.remove(), 400);
        }, 3000);
    }

    // Inject toast styles dynamically
    const toastStyle = document.createElement('style');
    toastStyle.textContent = `
        .toast {
            position: fixed;
            bottom: 24px;
            right: 24px;
            padding: 12px 20px;
            border-radius: 4px;
            font-size: 13px;
            font-weight: 500;
            color: white;
            background: #333;
            box-shadow: 0 4px 16px rgba(0,0,0,0.2);
            z-index: 9999;
            opacity: 0;
            transform: translateY(10px);
            transition: opacity 0.3s, transform 0.3s;
            max-width: 320px;
        }
        .toast.visible { opacity: 1; transform: translateY(0); }
        .toast.toast-success { background: #27ae60; }
        .toast.toast-error   { background: #e74c3c; }
        .toast.toast-info    { background: #1a5c8a; }
    `;
    document.head.appendChild(toastStyle);


    /* ---- FORM ERROR HELPER ---- */
    function showFormError(form, message) {
        let err = form.querySelector('.form-error');
        if (!err) {
            err = document.createElement('div');
            err.className = 'form-error';
            err.style.cssText = 'color:#e74c3c;font-size:12px;margin-bottom:10px;padding:8px 10px;background:#fdf3f3;border:1px solid #fcc;border-radius:4px;';
            form.prepend(err);
        }
        err.textContent = message;
    }


    /* ---- SEARCH BAR ---- */
    const searchForm = document.getElementById('searchForm');
    if (searchForm) {
        searchForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const q = document.getElementById('searchInput').value.trim();
            if (q) {
                showNotification('Suche nach: "' + q + '" (Demo – nicht implementiert)', 'info');
            }
        });
    }


    /* ---- PAGE BUTTONS (Pagination) ---- */
    document.querySelectorAll('.page-btn:not([disabled])').forEach(btn => {
        btn.addEventListener('click', function () {
            const container = this.closest('.pagination-bar');
            if (!container) return;
            container.querySelectorAll('.page-btn').forEach(b => b.classList.remove('active'));
            if (!this.querySelector('i')) this.classList.add('active');
        });
    });


    /* ---- POST LIKE BUTTONS ---- */
    document.querySelectorAll('.post-btn').forEach(btn => {
        if (btn.textContent.includes('Gefällt mir')) {
            btn.addEventListener('click', function () {
                const match = this.innerHTML.match(/\((\d+)\)/);
                if (match) {
                    const count = parseInt(match[1]);
                    this.innerHTML = this.innerHTML.replace(
                        '(' + count + ')',
                        '(' + (count + 1) + ')'
                    );
                    this.style.background = 'var(--highlight-color)';
                    this.style.color = 'white';
                    this.style.borderColor = 'var(--highlight-color)';
                }
            });
        }
    });


    /* ---- NEW THREAD BUTTON ---- */
    const newThreadBtn = document.querySelector('.btn-new-thread');
    if (newThreadBtn) {
        newThreadBtn.addEventListener('click', function (e) {
            if (this.getAttribute('href') === '#') {
                e.preventDefault();
                showNotification('Bitte zuerst anmelden um ein neues Thema zu erstellen.', 'info');
            }
        });
    }


    /* ---- FORMAT BUTTONS (in reply box) ---- */
    document.querySelectorAll('.format-btn').forEach(btn => {
        btn.addEventListener('click', function () {
            const textarea = document.querySelector('.reply-textarea');
            if (!textarea) return;
            const title = this.getAttribute('title') || '';
            const start = textarea.selectionStart;
            const end   = textarea.selectionEnd;
            const sel   = textarea.value.substring(start, end);
            let wrapped = sel;

            const tagMap = {
                'Fett': ['**', '**'],
                'Kursiv': ['_', '_'],
                'Code': ['`', '`'],
                'Zitat': ['> ', ''],
                'Link': ['[', '](url)'],
            };

            if (tagMap[title]) {
                wrapped = tagMap[title][0] + (sel || 'Text') + tagMap[title][1];
            }

            textarea.value = textarea.value.substring(0, start) + wrapped + textarea.value.substring(end);
            textarea.focus();
            textarea.selectionStart = start + wrapped.length;
            textarea.selectionEnd   = start + wrapped.length;
        });
    });


    /* ---- ACTIVE NAV HIGHLIGHT ---- */
    const currentFile = location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('#nav a').forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentFile || href === './' + currentFile) {
            link.classList.add('active');
        }
    });

});

// ---- CONSOLE WELCOME ----
console.log('%cGrandForum Community Platform', 'font-size:16px;font-weight:bold;color:#1a5c8a;');
console.log('%cStatische Demo – HTML / CSS / JavaScript', 'font-size:12px;color:#666;');
