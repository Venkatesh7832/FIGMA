# 🚀 Quick Deploy to Render

## Your Render Server ID: srv-d3vkphu3jp1c73dde9ag

### Step 1: MongoDB Atlas (CRITICAL - Do this first!)

1. Go to [MongoDB Atlas](https://cloud.mongodb.com)
2. Sign up/Login with your account
3. Create a new cluster (Free M0 tier)
4. Create database user:
   - Username: `figma-user`
   - Password: `FigmaPassword123!`
   - Permissions: "Read and write to any database"
5. Network Access: Add IP `0.0.0.0/0`
6. Get connection string and replace `<password>` with `FigmaPassword123!` and `<dbname>` with `figma-assignment`

**Final connection string format:**
```
mongodb+srv://figma-user:FigmaPassword123!@cluster0.abc123.mongodb.net/figma-assignment?retryWrites=true&w=majority&authSource=admin
```

### Step 2: Deploy Backend

1. Go to [Render Dashboard](https://dashboard.render.com)
2. Find your service: `srv-d3vkphu3jp1c73dde9ag`
3. Go to "Environment" tab
4. Add/Update these environment variables:
   - `NODE_ENV` = `production`
   - `MONGODB_URI` = `mongodb+srv://figma-user:FigmaPassword123!@cluster0.abc123.mongodb.net/figma-assignment?retryWrites=true&w=majority&authSource=admin`
5. Go to "Settings" tab
6. Update these settings:
   - **Root Directory**: `backend`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
7. Click "Save Changes"
8. Go to "Deploys" tab and click "Manual Deploy" → "Deploy latest commit"

### Step 3: Deploy Frontend

1. Go to [Render Dashboard](https://dashboard.render.com)
2. Click "New +" → "Static Site"
3. Connect your GitHub repository: `Venkatesh7832/FIGMA`
4. Configure:
   - **Name**: `figma-frontend`
   - **Root Directory**: `frontend`
   - **Build Command**: `npm install && npm run build`
   - **Publish Directory**: `build`
5. Environment Variable:
   - `REACT_APP_API_URL` = `https://your-backend-url.onrender.com` (get this from your backend service)
6. Click "Create Static Site"

### Step 4: Test

1. Visit your frontend URL
2. Try uploading an image
3. Check if everything works

## 🔧 If You Get Errors:

### MongoDB Connection Error
- Double-check your connection string
- Make sure you replaced all placeholder values
- Verify your cluster is running

### Build Failed
- Check that root directory is correct
- Ensure all dependencies are installed

### CORS Error
- Verify your backend URL is correct in frontend environment variable

## 📞 Need Help?

If you get stuck at any step, tell me:
1. What step you're on
2. What error message you see
3. What you've tried so far

I'll help you troubleshoot and get it working!
