# Portfolio Deployment Guide

Because you need a live link for both your frontend and backend, we will deploy them to reliable free/affordable cloud providers.

## 1. Deploy the Backend (Spring Boot + PostgreSQL) on Railway
Railway is perfect for this because it provides both a database and Docker hosting easily.

1. **Commit your code to GitHub:**
   ```bash
   git add .
   git commit -m "Prepare for deployment"
   git push origin main
   ```
2. **Go to [Railway.app](https://railway.app/).**
3. **Click "New Project"** -> **"Provision PostgreSQL"**
   - Railway will create a PostgreSQL database for you.
4. **Click "New"** in the same project -> **"GitHub Repo"**
   - Select your `portfolioo` repository.
   - Railway will detect the `Dockerfile` we just created in the `backend` folder and build it automatically.
5. **Configure Environment Variables in Railway:**
   - Go to your backend service in Railway -> **Variables**
   - Add the following variables (you can get the DB details from your Railway PostgreSQL service under "Connect"):
     - `DB_URL` = (Copy the JDBC URL from the Railway DB, e.g., `jdbc:postgresql://containers.railway.app:xxxx/railway`)
     - `DB_USERNAME` = `postgres`
     - `DB_PASSWORD` = (Copy the password from the Railway DB)
     - `PORT` = `8080`
6. **Generate a Public URL:**
   - Go to your backend service -> **Settings** -> **Networking** -> **Generate Domain**.
   - Copy this new backend domain (e.g., `portfolio-backend-production.up.railway.app`).

## 2. Deploy the Frontend (React/Vite) on Vercel or Render
Vercel is the easiest place to host a React frontend.

1. **Update the Frontend API URL:**
   - Go to your frontend code.
   - We configured `App.jsx` to use `import.meta.env.VITE_API_URL`. This means we can set it in Vercel.
2. **Go to [Vercel.com](https://vercel.com/)** and click "Add New... Project".
3. **Import your `portfolioo` repository.**
4. **Configure Project:**
   - Framework Preset: **Vite**
   - Root Directory: `frontend`
   - **Environment Variables:**
     - Key: `VITE_API_URL`
     - Value: `https://[YOUR_RAILWAY_BACKEND_URL_HERE]` (from step 1.6)
5. **Click Deploy.**

Once Vercel finishes, it will give you a live public link to your portfolio!
