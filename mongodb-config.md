# 🔗 MongoDB Atlas Configuration

## Your Connection String:
```
mongodb+srv://<db_username>:<db_password>@cluster0.7gnlnvy.mongodb.net/?appName=Cluster0
```

## Complete Connection String for Your App:
```
mongodb+srv://<db_username>:<db_password>@cluster0.7gnlnvy.mongodb.net/figma-assignment?retryWrites=true&w=majority&authSource=admin
```

## Environment Variables Setup:

### For Local Development (backend/.env):
```env
PORT=5000
MONGODB_URI=mongodb+srv://<db_username>:<db_password>@cluster0.7gnlnvy.mongodb.net/figma-assignment?retryWrites=true&w=majority&authSource=admin
NODE_ENV=development
```

### For Render Backend Service:
- `NODE_ENV` = `production`
- `MONGODB_URI` = `mongodb+srv://<db_username>:<db_password>@cluster0.7gnlnvy.mongodb.net/figma-assignment?retryWrites=true&w=majority&authSource=admin`

### For Render Frontend Service:
- `REACT_APP_API_URL` = `https://your-backend-url.onrender.com`

## Next Steps:

1. **Replace `<db_username>` and `<db_password>`** with your actual MongoDB Atlas credentials
2. **Create the environment files** as shown above
3. **Update your Render environment variables** with the complete connection string
4. **Deploy to Render**

## Important Notes:

- **Database Name**: I added `figma-assignment` to your connection string
- **Connection Options**: Added `retryWrites=true&w=majority&authSource=admin` for better reliability
- **Keep your credentials secure** - don't commit them to GitHub
