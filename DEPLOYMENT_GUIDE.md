# 🚀 BAKELETTE BLISS - HOSTINGER DEPLOYMENT GUIDE

## ✅ PRE-DEPLOYMENT CHECKLIST

- [x] Node.js installed (v24.14.1)
- [x] npm installed (11.11.0)
- [x] Vite config updated with `base: '/'`
- [x] .htaccess file configured for React Router
- [x] Production build created (`dist/` folder)
- [x] All changes committed to GitHub

---

## 📋 STEP-BY-STEP DEPLOYMENT

### **STEP 1: Verify Build Files Are Ready**

Location: `C:\Users\Sakshi\Downloads\bakelette-bliss-main\bakelette-bliss-main\dist\`

✅ Contains:
- `index.html`
- `assets/` folder (CSS, JS, images)
- `.htaccess` file
- Other public files

---

### **STEP 2: Login to Hostinger Dashboard**

1. Go to: https://www.hostinger.com/
2. Click "Log In"
3. Enter your credentials
4. Access your hosting account

---

### **STEP 3: Open File Manager**

1. In dashboard, find your domain
2. Click **"Manage"** button
3. Look for **"File Manager"** (usually in left sidebar)
4. Click to open

---

### **STEP 4: Navigate to Root Directory**

1. In File Manager, you'll see folders like:
   - `public_html/`
   - `public_ftp/`
   - Other folders

2. **Double-click `public_html/`** to enter

This is where your website files go!

---

### **STEP 5: Clear Default Files (if any)**

If there's a default `index.html`, delete it first:
- Select `index.html`
- Right-click → Delete

⚠️ **Don't worry about other files**, just remove the old index.html

---

### **STEP 6: Upload Files from dist Folder**

⚠️ **IMPORTANT**: Upload the **contents** of dist, NOT the dist folder itself

**Correct Way:**

1. On your computer, open: `C:\Users\Sakshi\Downloads\bakelette-bliss-main\bakelette-bliss-main\dist\`

2. Select **ALL** files and folders inside:
   - `index.html`
   - `assets/` (folder)
   - `.htaccess`
   - All other files

3. **Drag and drop** into File Manager window OR use "Upload" button

4. In Hostinger File Manager, make sure you're uploading to `public_html/` root

✅ **Result**: After upload, you should see:
```
public_html/
├── index.html
├── assets/
├── .htaccess
├── favicon.ico
└── other files
```

❌ **Wrong Way** (don't do this):
```
public_html/
└── dist/
    ├── index.html
    └── assets/
```

---

### **STEP 7: Verify .htaccess is Uploaded**

1. In File Manager, check if `.htaccess` is present
2. If NOT visible:
   - Click **Settings** (gear icon)
   - Enable **"Show hidden files"**
   - Should appear now

3. If still not uploaded:
   - Create new file: right-click → "Create File" → name: `.htaccess`
   - Add content (see below)

**Content of .htaccess:**
```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

---

### **STEP 8: Enable SSL Certificate**

1. Go back to Hostinger dashboard
2. Find **"Security"** or **"SSL"** section
3. Click **"Manage SSL"** or **"Activate SSL"**
4. Select **"Free SSL"** (if available)
5. Click **"Activate"** or **"Generate"**

⏳ May take 5-15 minutes to activate

---

### **STEP 9: Wait for Propagation**

After uploading, wait **5-10 minutes** for changes to propagate

---

### **STEP 10: Test Your Website**

1. Open browser
2. Go to: `https://yourdomain.com` (use HTTPS, not HTTP)
3. Your website should load! 🎉

✅ **If it works**: Congratulations! ✨

❌ **If blank page**: See troubleshooting below

---

## 🔧 TROUBLESHOOTING

### ❌ Problem: Blank White Page

**Cause**: JavaScript not loading (usually path issue)

**Fix**:
1. Press **F12** to open browser console
2. Look for errors in red
3. Check if files have correct paths

**Most common fix**:
- Ensure `.htaccess` is in `public_html/` root
- Verify `base: '/'` is in `vite.config.ts`

---

### ❌ Problem: CSS/JavaScript Not Loading

**In browser console (F12), you might see:**
- `Failed to load resource: the server responded with a status of 404`
- `Uncaught SyntaxError: Unexpected character`

**Fix**:
1. Check that `assets/` folder is in `public_html/`
2. Verify file permissions (should be 644 for files, 755 for folders)

---

### ❌ Problem: Page Refresh Shows 404

**Cause**: React Router not configured properly

**Fix**:
1. Ensure `.htaccess` exists in `public_html/` root
2. Check content matches the template above
3. Verify `RewriteEngine On` is working

**To verify .htaccess working**:
- Go to any page like `https://yourdomain.com/products`
- If it shows content (not 404), .htaccess is working ✅

---

### ❌ Problem: API Calls Failing

If you have a backend API:

**Add environment file** (if needed):
1. Create `.env` file in your root directory
2. Add: `VITE_API_URL=https://your-api.com`

But since Bakelette Bliss likely doesn't have a backend, this shouldn't be needed.

---

### ❌ Problem: Still Not Working?

**Contact Hostinger support:**
1. Dashboard → Support
2. Chat/ticket → "Website not loading after upload"
3. Tell them:
   - You're deploying a React app with Vite
   - You've uploaded to `public_html/`
   - You have `.htaccess` configured

---

## 📊 AFTER DEPLOYMENT

### Monitor Performance

1. **Check loading speed**: https://pagespeed.web.dev/
2. **Test on mobile**: Check responsive design
3. **Browser console (F12)**: Ensure no errors

### Analytics

Add to your site if needed:
- Google Analytics
- Facebook Pixel
- Other tracking

---

## 🎯 QUICK REFERENCE

| Step | Action | Location |
|------|--------|----------|
| 1 | Build app | `npm run build` |
| 2 | Copy files from | `dist/` folder |
| 3 | Upload to | `public_html/` in Hostinger |
| 4 | Enable SSL | Hostinger dashboard |
| 5 | Test | Open `https://yourdomain.com` |

---

## 📝 IMPORTANT NOTES

✅ **Do's:**
- Upload **contents of dist/**, not the dist folder
- Enable **HTTPS** (SSL)
- Include `.htaccess` file
- Test on mobile devices
- Keep `.htaccess` with correct permissions (644)

❌ **Don'ts:**
- Don't upload `node_modules/`
- Don't upload `src/` folder
- Don't expose `.env` file
- Don't use `http://` (use `https://`)

---

## 🚀 DEPLOYMENT COMPLETE!

Your Bakelette Bliss website is now live! 🎉

**Next steps:**
- Share URL with users
- Monitor for issues
- Gather feedback
- Plan updates

---

**Need help?** Check error messages in browser console (F12) or contact Hostinger support.

Good luck! 🌟
