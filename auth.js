/* ===================================================
   auth.js  –  localStorage-based auth system
   Users are stored as JSON in localStorage['edupinas_users']
   Current session stored in localStorage['edupinas_session']
   =================================================== */

const AUTH = {

  /* ---------- storage keys ---------- */
  USERS_KEY:   'edupinas_users',
  SESSION_KEY: 'edupinas_session',

  /* ---------- helpers ---------- */
  getUsers() {
    return JSON.parse(localStorage.getItem(this.USERS_KEY) || '[]');
  },

  saveUsers(users) {
    localStorage.setItem(this.USERS_KEY, JSON.stringify(users));
  },

  getSession() {
    return JSON.parse(localStorage.getItem(this.SESSION_KEY) || 'null');
  },

  setSession(user) {
    // never store the password in the session object
    const { password: _pw, ...safe } = user;
    localStorage.setItem(this.SESSION_KEY, JSON.stringify(safe));
  },

  clearSession() {
    localStorage.removeItem(this.SESSION_KEY);
  },

  isLoggedIn() {
    return this.getSession() !== null;
  },

  /* ---------- sign up ---------- */
  register({ firstName, lastName, email, password }) {
    const users = this.getUsers();
    if (users.find(u => u.email.toLowerCase() === email.toLowerCase())) {
      return { ok: false, error: 'An account with this email already exists.' };
    }
    if (password.length < 6) {
      return { ok: false, error: 'Password must be at least 6 characters.' };
    }
    const user = { id: Date.now(), firstName, lastName, email, password };
    users.push(user);
    this.saveUsers(users);
    this.setSession(user);
    return { ok: true, user };
  },

  /* ---------- login ---------- */
  login({ email, password }) {
    const users = this.getUsers();
    const user  = users.find(u => u.email.toLowerCase() === email.toLowerCase());
    if (!user) {
      return { ok: false, error: 'No account found with that email.' };
    }
    if (user.password !== password) {
      return { ok: false, error: 'Incorrect password. Please try again.' };
    }
    this.setSession(user);
    return { ok: true, user };
  },

  /* ---------- logout ---------- */
  logout() {
    this.clearSession();
    window.location.href = 'login.html';
  },

  /* ---------- route guard ---------- */
  // Call on every protected page. Redirects to login if not authenticated.
  requireAuth() {
    if (!this.isLoggedIn()) {
      window.location.href = 'login.html';
      return false;
    }
    return true;
  },

  // Call on login/signup pages. Redirects to dashboard if already logged in.
  redirectIfLoggedIn() {
    if (this.isLoggedIn()) {
      window.location.href = 'dashboard.html';
    }
  },
};
