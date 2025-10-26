# MongoDB Atlas Configuration with IP Address 0.0.0.0
# Replace the following placeholders with your actual MongoDB Atlas credentials:

PORT=5000
MONGODB_URI=mongodb+srv://username:password@cluster0.mongodb.net/figma-assignment?retryWrites=true&w=majority&authSource=admin
NODE_ENV=development

# Alternative connection string with specific IP (if you have a specific cluster IP):
# MONGODB_URI=mongodb+srv://username:password@cluster0-xxxxx.mongodb.net/figma-assignment?retryWrites=true&w=majority&authSource=admin

# For MongoDB Atlas with IP whitelist including 0.0.0.0:
# 1. Go to MongoDB Atlas Dashboard
# 2. Navigate to Network Access
# 3. Add IP Address: 0.0.0.0/0 (allows access from anywhere)
# 4. Or add your specific IP address
# 5. Update the connection string above with your actual cluster details

# Steps to get your MongoDB Atlas connection string:
# 1. Log in to MongoDB Atlas (https://cloud.mongodb.com)
# 2. Select your cluster
# 3. Click "Connect"
# 4. Choose "Connect your application"
# 5. Copy the connection string
# 6. Replace <username> and <password> with your database credentials
# 7. Replace <dbname> with your database name (figma-assignment)
