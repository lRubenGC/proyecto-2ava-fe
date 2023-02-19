import router from "@/router";

export default {
    getToken() {
        const cookie = document.cookie.split(';').find(cookie => cookie.trim().startsWith('token='));
        if (cookie) {
            return cookie.split('=')[1];
        } else {
            return null;
        }
    },

    deleteCookie() {
        const cookie = document.cookie.split(';').find(cookie => cookie.trim().startsWith(`token=`));
        if (cookie) {
            const parts = cookie.split('=');
            const cookieName = parts[0].trim();
        const cookieValue = parts[1].trim();
        const pastDate = new Date(0).toUTCString();
        document.cookie = `${cookieName}=; expires=${pastDate}; path=/`;
        router.push({ name: 'login-view' });
    }
}
      
}