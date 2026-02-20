# Pabba Jewellers

A premium, bilingual (English/Telugu) jewelry catalog website. This project features a modular JavaScript architecture, dynamic data injection, and a "Smart Cache" system for high performance.

## 🚀 Features
- **Bilingual Support:** Real-time toggling between English and Telugu.
- **Data-Driven:** Product information is managed via Google Sheets and pushed to GitHub as JSON.
- **Performance Optimized:** AVIF/WebP support and custom ETag caching.
- **Premium Admin UI:** Includes a mobile AppSheet app for inventory management.

## 📁 Folder Structure
- `/js`: Core logic (`config.js`, `utility.js`, `modal.js`).
- `/images`: Product and asset gallery (Raw/Optimized).
- `/css`: Stylesheets (Base and Theme-specific).
- `/data`: JSON files (`products.json`, `collections.json`) managed by the backend.

---

## 🛠️ Setup Guide

### 1. Database & Backend Setup
1. **Copy the Data Template:** Create a copy of the official Spreadsheet:
   - [👉 Copy Spreadsheet Template](https://docs.google.com/spreadsheets/d/16xPfczgj0shjji5WgsAQpBpg860rIJWrsCWsYAuf7dM/copy)
2. **Configure Secrets:** In the Spreadsheet, go to `Extensions` > `Apps Script`. Click the **Gear Icon (Settings)** and add the following **Script Properties**:
   - `GH_TOKEN`: Your GitHub Personal Access Token.
   - `REPO_OWNER`: Your GitHub Username.
   - `REPO_NAME`: Your Repository Name.
   - `DRIVE_FOLDER_ID_PRODUCTS`: The ID of the Google Drive folder where you store product images.
3. **Deploy:** Click `Deploy` > `New Deployment` > `Web App`. Set access to "Anyone".

### 2. Frontend Configuration
1. **Link Backend:** Open `js/config.js` and update the settings (Store Name, Social Links).
2. **Script URL:** Update the `SCRIPT_URL` with your deployed Apps Script URL to enable dynamic functions.

### 3. AppSheet Admin App (Premium UI)
1. **Copy the UI Template:** Use the link below to clone the mobile admin interface:
   - [👉 Copy AppSheet Template](https://www.appsheet.com/Template/AppDef?appName=PabbaJewellersAdmin-435339276)
2. **Sync:** Ensure the app is pointed to the Google Sheet you copied in Step 1.
3. **Manage:** Now you can add items via mobile, and they will be pushed to your website automatically!