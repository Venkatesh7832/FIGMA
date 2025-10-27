# Environment Setup for Local Development

## Backend Environment (.env file in backend folder)

Create a file named `.env` in the `backend` folder with:

```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/figma-assignment
NODE_ENV=development
```

## Frontend Environment (.env file in frontend folder)

Create a file named `.env` in the `frontend` folder with:

```env
REACT_APP_API_URL=http://localhost:5000
```

## How to Run Both Services

1. **Install all dependencies:**
   ```bash
   npm run install-all
   ```

2. **Start both frontend and backend:**
   ```bash
   npm start
   ```

This will start:
- Backend on http://localhost:5000
- Frontend on http://localhost:3000

## Individual Commands

- **Backend only:** `npm run backend`
- **Frontend only:** `npm run frontend`
- **Build frontend:** `npm run build`

## For Production Deployment

For Render deployment, you'll need to set these environment variables in your Render dashboard:

### Backend Environment Variables:
- `NODE_ENV` = `production`
- `MONGODB_URI` = `mongodb+srv://username:password@cluster.mongodb.net/figma-assignment?retryWrites=true&w=majority&authSource=admin`

### Frontend Environment Variables:
- `REACT_APP_API_URL` = `https://your-backend-url.onrender.com`
