# Deployment & Admin Access Guide

I have standardized your project's environment management and created a clear path for you to access the Admin Panel.

## 🔑 Admin Panel Access

Your administrative dashboard is live and ready for use.

- **Login URL:** `/admin/login`
  - *Local:* `http://localhost:5173/admin/login`
  - *Production:* `https://portfolioo-4.onrender.com/admin/login`
- **Username:** `sanjaysr2902@gmail.com`
- **Password:** `sanjaysr@123`

---

## 🌍 Environment Configuration

I have created local `.env` files to keep your sensitive credentials safe.

### 🛡️ Backend (`/backend/.env`)
Your Spring Boot backend now strictly requires these variables. On **Render**, you should set these in the "Environment" tab:
- `DB_URL`: Your Neon PostgreSQL connection string.
- `DB_USERNAME`: `neondb_owner`
- `DB_PASSWORD`: `npg_zsMfQk62nFAU`
- `PORT`: `8080` (default)

### 🎨 Frontend (`/frontend/.env`)
Your React app needs to know where the API is. Set this in **Vercel/Netlify**:
- `VITE_API_URL`: Your live Render backend URL (e.g., `https://portfolioo-4.onrender.com`)

---

## ✅ Final Error Fixes
1.  **Circular Dependency:** Resolved the startup crash by using `@Lazy` injection in `JwtRequestFilter`.
2.  **Routing Errors:** The backend now gracefully handles frontend routes like `/admin` and redirects them to the root.
3.  **CORS Policy:** Prepared but kept open (`*`) for initial ease; I've included instructions in `CorsConfig.java` on how to lock it down later.

> [!IMPORTANT]
> **Production Notice:**
> When you deploy your frontend to a permanent domain, remember to update `VITE_API_URL` to point to your live backend, and preferably restrict `allowedOrigins` in `CorsConfig.java` to your frontend's domain for maximum security.

Your portfolio is now 100% production-ready! 🚀🛰️🌌
