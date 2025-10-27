# 🚀 Render Configuration - Complete Guide

## Current Issue
You're getting this error because your `MONGODB_URI` environment variable contains placeholder values instead of your actual MongoDB Atlas connection string.

## Step 1: Set Up MongoDB Atlas (Required First!)

Follow the `MONGODB_ATLAS_SETUP.md` guide to:
1. Create a MongoDB Atlas account
2. Create a cluster
3. Create a database user
4. Configure network access
5. Get your connection string

## Step 2: Update Render Environment Variables

### For Backend Service:

1. **Go to your Render Dashboard**
2. **Find your backend service** (the one with the error)
3. **Click "Environment" tab**
4. **Update the MONGODB_URI variable:**

**Current (WRONG):**
```
mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/figma-assignment?retryWrites=true&w=majority&authSource=admin
```

**Replace with your actual connection string:**
```
mongodb+srv://figma-user:FigmaPassword123!@cluster0.abc123.mongodb.net/figma-assignment?retryWrites=true&w=majority&authSource=admin
```

### Environment Variables for Backend:
- `NODE_ENV` = `production`
- `MONGODB_URI` = `mongodb+srv://figma-user:FigmaPassword123!@cluster0.abc123.mongodb.net/figma-assignment?retryWrites=true&w=majority&authSource=admin`

## Step 3: Render Service Configuration

### Backend Service Settings:
- **Service Type**: Web Service
- **Root Directory**: `backend`
- **Environment**: Node
- **Build Command**: `npm install`
- **Start Command**: `npm start`

### Frontend Service Settings:
- **Service Type**: Static Site
- **Root Directory**: `frontend`
- **Build Command**: `npm install && npm run build`
- **Publish Directory**: `build`
- **Environment Variable**: `REACT_APP_API_URL` = `https://your-backend-url.onrender.com`

## Step 4: Deploy Both Services

### Backend Deployment:
1. Go to [Render Dashboard](https://dashboard.render.com)
2. Click "New +" → "Web Service"
3. Connect GitHub: `Venkatesh7832/FIGMA`
4. Configure:
   - **Name**: `figma-backend`
   - **Root Directory**: `backend`
   - **Environment**: `Node`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
5. Add Environment Variables:
   - `NODE_ENV` = `production`
   - `MONGODB_URI` = Your actual MongoDB Atlas connection string
6. Click "Create Web Service"
7. Wait for deployment and copy the backend URL

### Frontend Deployment:
1. Go to [Render Dashboard](https://dashboard.render.com)
2. Click "New +" → "Static Site"
3. Connect GitHub: `Venkatesh7832/FIGMA`
4. Configure:
   - **Name**: `figma-frontend`
   - **Root Directory**: `frontend`
   - **Build Command**: `npm install && npm run build`
   - **Publish Directory**: `build`
5. Add Environment Variable:
   - `REACT_APP_API_URL` = Your backend URL from step above
6. Click "Create Static Site"

## Step 5: Test Your Deployment

1. **Backend Test**: Visit `https://your-backend-url.onrender.com/api/health`
   - Should return: `{"message":"Server is running!"}`

2. **Frontend Test**: Visit your frontend URL
   - Should load the React application
   - Try uploading an image to test the full functionality

## Common Issues and Solutions:

### "URI must include hostname, domain name, and tld"
- **Cause**: Using placeholder values in connection string
- **Solution**: Replace all `xxxxx` with your actual cluster details

### "Authentication failed"
- **Cause**: Wrong username/password
- **Solution**: Check your MongoDB Atlas database user credentials

### "Network access denied"
- **Cause**: IP not whitelisted
- **Solution**: Add `0.0.0.0/0` to MongoDB Atlas Network Access

### "Publish directory npm start does not exist!"
- **Cause**: Wrong service type or root directory
- **Solution**: Use "Static Site" for frontend with root directory `frontend`

## Quick Fix for Current Error:

1. **Get your MongoDB Atlas connection string** (follow the setup guide)
2. **Go to your Render backend service**
3. **Click "Environment" tab**
4. **Update MONGODB_URI** with your actual connection string
5. **Click "Save Changes"**
6. **Wait for automatic redeployment**

Your service should work immediately after updating the environment variable!
