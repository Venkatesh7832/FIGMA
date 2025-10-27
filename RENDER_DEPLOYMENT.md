# 🚀 Render Deployment Guide

## Backend Deployment (Web Service)

### Configuration:
- **Service Type**: Web Service
- **Root Directory**: `backend`
- **Environment**: Node
- **Build Command**: `npm install`
- **Start Command**: `npm start`

### Environment Variables:
- `NODE_ENV` = `production`
- `MONGODB_URI` = `mongodb+srv://username:password@cluster.mongodb.net/figma-assignment?retryWrites=true&w=majority&authSource=admin`

## Frontend Deployment (Static Site)

### Configuration:
- **Service Type**: Static Site
- **Root Directory**: `frontend`
- **Build Command**: `npm install && npm run build`
- **Publish Directory**: `build`

### Environment Variables:
- `REACT_APP_API_URL` = `https://your-backend-url.onrender.com`

## Full-Stack Deployment (Alternative)

If you want to deploy both as a single service:

### Configuration:
- **Service Type**: Web Service
- **Root Directory**: `.` (root)
- **Environment**: Node
- **Build Command**: `npm run install-all`
- **Start Command**: `npm start`

### Environment Variables:
- `NODE_ENV` = `production`
- `MONGODB_URI` = `mongodb+srv://username:password@cluster.mongodb.net/figma-assignment?retryWrites=true&w=majority&authSource=admin`
- `REACT_APP_API_URL` = `https://your-backend-url.onrender.com`

## Step-by-Step Instructions:

### 1. Deploy Backend First
1. Go to [Render Dashboard](https://dashboard.render.com)
2. Click "New +" → "Web Service"
3. Connect GitHub repository: `Venkatesh7832/FIGMA`
4. Configure:
   - **Name**: `figma-backend`
   - **Root Directory**: `backend`
   - **Environment**: `Node`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
5. Add Environment Variables:
   - `NODE_ENV` = `production`
   - `MONGODB_URI` = Your MongoDB Atlas connection string
6. Click "Create Web Service"
7. Wait for deployment and copy the backend URL

### 2. Deploy Frontend
1. Go to [Render Dashboard](https://dashboard.render.com)
2. Click "New +" → "Static Site"
3. Connect GitHub repository: `Venkatesh7832/FIGMA`
4. Configure:
   - **Name**: `figma-frontend`
   - **Root Directory**: `frontend`
   - **Build Command**: `npm install && npm run build`
   - **Publish Directory**: `build`
5. Add Environment Variable:
   - `REACT_APP_API_URL` = Your backend URL from step 1
6. Click "Create Static Site"

## Important Notes:

- **Backend Root Directory**: Must be `backend` (not root)
- **Frontend Root Directory**: Must be `frontend` (not root)
- **Publish Directory**: Must be `build` for frontend
- **Environment Variables**: Must be set correctly for each service
- **MongoDB Atlas**: Must be set up first with proper connection string

## Troubleshooting:

### "Publish directory npm start does not exist!"
- This means you're using the wrong service type or root directory
- For frontend: Use "Static Site" with root directory `frontend` and publish directory `build`
- For backend: Use "Web Service" with root directory `backend`

### MongoDB Connection Error
- Check your MongoDB Atlas connection string
- Ensure all placeholder values are replaced
- Verify network access is set to 0.0.0.0/0

### Build Failed
- Check that root directory is correct
- Ensure all dependencies are installed
- Check the build logs for specific errors
