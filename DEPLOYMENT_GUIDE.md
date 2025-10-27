# 🚀 Complete Deployment Guide for Render

## Prerequisites Checklist
- [ ] GitHub repository is up to date
- [ ] MongoDB Atlas account created
- [ ] Render account created

## Step 1: MongoDB Atlas Setup (CRITICAL - Do this first!)

### 1.1 Create MongoDB Atlas Account
1. Go to [MongoDB Atlas](https://cloud.mongodb.com)
2. Click "Try Free" and create an account
3. Choose "Build a new app" → "I'm learning MongoDB"

### 1.2 Create a Cluster
1. Choose "M0 Sandbox" (Free tier)
2. Select a cloud provider (AWS recommended)
3. Choose a region closest to you
4. Name your cluster: `figma-cluster`
5. Click "Create Cluster"
6. Wait 2-3 minutes for cluster creation

### 1.3 Create Database User
1. Go to "Database Access" in the left sidebar
2. Click "Add New Database User"
3. Choose "Password" authentication
4. Username: `figma-user`
5. Password: `FigmaPassword123!` (or create your own secure password)
6. Under "Database User Privileges", select "Read and write to any database"
7. Click "Add User"

### 1.4 Configure Network Access
1. Go to "Network Access" in the left sidebar
2. Click "Add IP Address"
3. Click "Allow Access from Anywhere" (adds 0.0.0.0/0)
4. Click "Confirm"

### 1.5 Get Connection String
1. Go to "Database" in the left sidebar
2. Click "Connect" on your cluster
3. Choose "Connect your application"
4. Select "Node.js" as driver
5. Copy the connection string
6. Replace `<password>` with your database password
7. Replace `<dbname>` with `figma-assignment`

**Your final connection string should look like:**
```
mongodb+srv://figma-user:FigmaPassword123!@cluster0.abc123.mongodb.net/figma-assignment?retryWrites=true&w=majority&authSource=admin
```

## Step 2: Deploy Backend to Render

### 2.1 Create Backend Service
1. Go to [Render Dashboard](https://dashboard.render.com)
2. Click "New +" → "Web Service"
3. Click "Connect GitHub account" if not already connected
4. Select your repository: `Venkatesh7832/FIGMA`
5. Click "Connect"

### 2.2 Configure Backend Service
Fill in the following details:
- **Name**: `figma-backend`
- **Root Directory**: `backend`
- **Environment**: `Node`
- **Build Command**: `npm install`
- **Start Command**: `npm start`

### 2.3 Set Environment Variables
Click "Advanced" and add these environment variables:
- **Key**: `NODE_ENV`, **Value**: `production`
- **Key**: `MONGODB_URI`, **Value**: `mongodb+srv://figma-user:FigmaPassword123!@cluster0.abc123.mongodb.net/figma-assignment?retryWrites=true&w=majority&authSource=admin`

### 2.4 Deploy Backend
1. Click "Create Web Service"
2. Wait for deployment (5-10 minutes)
3. **IMPORTANT**: Copy the backend URL (e.g., `https://figma-backend-xxxx.onrender.com`)

## Step 3: Deploy Frontend to Render

### 3.1 Create Frontend Service
1. Go to [Render Dashboard](https://dashboard.render.com)
2. Click "New +" → "Static Site"
3. Select your repository: `Venkatesh7832/FIGMA`
4. Click "Connect"

### 3.2 Configure Frontend Service
Fill in the following details:
- **Name**: `figma-frontend`
- **Root Directory**: `frontend`
- **Build Command**: `npm install && npm run build`
- **Publish Directory**: `build`

### 3.3 Set Environment Variables
Add this environment variable:
- **Key**: `REACT_APP_API_URL`, **Value**: `https://figma-backend-xxxx.onrender.com` (use your actual backend URL)

### 3.4 Deploy Frontend
1. Click "Create Static Site"
2. Wait for deployment (5-10 minutes)
3. Copy the frontend URL

## Step 4: Test Your Deployment

### 4.1 Test Backend
1. Visit your backend URL + `/api/health`
2. You should see: `{"message":"Server is running!"}`

### 4.2 Test Frontend
1. Visit your frontend URL
2. Try uploading an image
3. Check if the gallery displays correctly
4. Test the tabs functionality

## Step 5: Troubleshooting

### Common Issues and Solutions

#### MongoDB Connection Error
**Error**: `querySrv ENOTFOUND _mongodb._tcp.cluster0.xxxxx.mongodb.net`
**Solution**: 
- Double-check your MongoDB Atlas connection string
- Ensure you replaced all placeholder values
- Verify your cluster is fully created and running

#### CORS Error
**Error**: `Access to fetch at '...' from origin '...' has been blocked by CORS policy`
**Solution**: 
- Check that your backend URL is correct in the frontend environment variable
- Ensure your backend is running and accessible

#### Build Failed
**Error**: Build command failed
**Solution**: 
- Check that your root directory is correct (`backend` for backend, `frontend` for frontend)
- Ensure all dependencies are properly installed

### Verification Checklist
- [ ] MongoDB Atlas cluster is running
- [ ] Database user has correct permissions
- [ ] Network access allows 0.0.0.0/0
- [ ] Backend deploys successfully
- [ ] Backend health check returns success
- [ ] Frontend builds successfully
- [ ] Frontend connects to backend
- [ ] Image upload works
- [ ] Gallery displays images

## Step 6: Update Environment Variables (If Needed)

If you need to update environment variables after deployment:

### Backend
1. Go to your backend service in Render
2. Click "Environment" tab
3. Update the `MONGODB_URI` if needed
4. Click "Save Changes"
5. The service will automatically redeploy

### Frontend
1. Go to your frontend service in Render
2. Click "Environment" tab
3. Update the `REACT_APP_API_URL` if needed
4. Click "Save Changes"
5. The service will automatically redeploy

## Success! 🎉

Once everything is working:
- Your backend will be running on Render
- Your frontend will be accessible via the static site URL
- Images will be stored in MongoDB Atlas
- The application will be fully functional

## Support

If you encounter any issues:
1. Check the Render logs for detailed error messages
2. Verify your MongoDB Atlas connection string
3. Ensure all environment variables are set correctly
4. Check that your GitHub repository is up to date
