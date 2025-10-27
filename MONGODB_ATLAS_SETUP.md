# 🗄️ MongoDB Atlas Setup - Step by Step

## Step 1: Create MongoDB Atlas Account

1. Go to [MongoDB Atlas](https://cloud.mongodb.com)
2. Click "Try Free" 
3. Sign up with your email or Google account
4. Choose "Build a new app" → "I'm learning MongoDB"

## Step 2: Create a Cluster

1. **Choose Plan**: Select "M0 Sandbox" (Free tier)
2. **Cloud Provider**: Choose AWS (recommended)
3. **Region**: Choose a region closest to you (e.g., US East)
4. **Cluster Name**: Keep default "Cluster0" or name it "figma-cluster"
5. Click "Create Cluster"
6. **Wait 2-3 minutes** for cluster creation

## Step 3: Create Database User

1. Go to "Database Access" in the left sidebar
2. Click "Add New Database User"
3. **Authentication Method**: Choose "Password"
4. **Username**: `figma-user`
5. **Password**: `FigmaPassword123!` (or create your own secure password)
6. **Database User Privileges**: Select "Read and write to any database"
7. Click "Add User"

## Step 4: Configure Network Access

1. Go to "Network Access" in the left sidebar
2. Click "Add IP Address"
3. Click "Allow Access from Anywhere" (this adds 0.0.0.0/0)
4. Click "Confirm"

## Step 5: Get Connection String

1. Go to "Database" in the left sidebar
2. Click "Connect" on your cluster
3. Choose "Connect your application"
4. **Driver**: Select "Node.js"
5. **Version**: Select "4.1 or later"
6. **Copy the connection string** - it will look like:
   ```
   mongodb+srv://figma-user:<password>@cluster0.abc123.mongodb.net/?retryWrites=true&w=majority&authSource=admin
   ```

## Step 6: Create Your Final Connection String

Replace the placeholders in your connection string:

**Original:**
```
mongodb+srv://figma-user:<password>@cluster0.abc123.mongodb.net/?retryWrites=true&w=majority&authSource=admin
```

**Replace:**
- `<password>` with `FigmaPassword123!` (or your chosen password)
- Add database name after the cluster URL

**Final Connection String:**
```
mongodb+srv://figma-user:FigmaPassword123!@cluster0.abc123.mongodb.net/figma-assignment?retryWrites=true&w=majority&authSource=admin
```

## Step 7: Test Your Connection String

You can test your connection string by:
1. Going to "Database" → "Browse Collections"
2. If you can see the database interface, your connection is working

## Important Notes:

- **Keep your password secure** - don't share it publicly
- **The cluster name might be different** - use your actual cluster name
- **Make sure to include the database name** (`figma-assignment`) in the connection string
- **The connection string is case-sensitive**

## Troubleshooting:

### "URI must include hostname, domain name, and tld"
- This means you're using placeholder values like `xxxxx`
- Make sure you replaced ALL placeholder values with your actual cluster details

### "Authentication failed"
- Check your username and password
- Make sure the database user has the correct permissions

### "Network access denied"
- Make sure you added 0.0.0.0/0 to Network Access
- Wait a few minutes for changes to take effect

## Next Steps:

Once you have your connection string, use it in your Render environment variables:
- `MONGODB_URI` = `mongodb+srv://figma-user:FigmaPassword123!@cluster0.abc123.mongodb.net/figma-assignment?retryWrites=true&w=majority&authSource=admin`
