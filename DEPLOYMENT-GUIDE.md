# Portfolio Deployment Guide (Render + Neon Edition)

To successfully deploy your portfolio, you need to connect your Spring Boot backend to a live Neon database. Since you are using **Render** for hosting and **Neon** for the database, follow these exact steps.

## 1. Get your Database Credentials from Neon
1. Log in to [Neon.tech](https://console.neon.tech/).
2. Select your project and look for the **"Connection Details"** widget on the main dashboard.
3. In the dropdown menu, select **"Java (JDBC)"**.
4. You will see a long URL starting with `jdbc:postgresql://...`.
5. **Copy the following parts:**
   - The entire **Connection String** (this is your `DB_URL`).
   - The **Database Name** (usually `neondb`).
   - The **Username** and **Password** (usually found in the connection string itself or provided nearby).

## 2. Configure Environment Variables in Render
Render will NOT know about your database unless you give it these variables.

1. Go to your **Render Dashboard** and select your **Web Service** (the backend).
2. Click on the **Environment** tab on the left sidebar.
3. Click **"Add Environment Variable"** and add these three keys:

| Key | Value (PASTE FROM NEON) |
| --- | --- |
| `DB_URL` | `jdbc:postgresql://ep-your-host.aws.neon.tech/neondb?sslmode=require` |
| `DB_USERNAME` | `your_username` |
| `DB_PASSWORD` | `your_password` |
| `PORT` | `8080` |

4. **Click "Save Changes"**. Render will automatically restart your application with these new settings.

## 3. Deployment Checklist
- [ ] Your `DB_URL` string on Render MUST end with `?sslmode=require`. **Neon requires SSL.**
- [ ] Your backend `Dockerfile` is in the `backend/` directory.
- [ ] Your code is pushed to the `main` branch on GitHub.

## 4. Troubleshooting
If the app still fails to start:
1. Go to the **Logs** tab in Render.
2. Look for `HikariPool-1 - Starting...`.
3. If you see `Authentication failed`, double-check your **Username** and **Password**.
4. If you see `Connection refused`, double-check the host part of your **DB_URL**.
