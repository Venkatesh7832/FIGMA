# Figma Assignment - MERN Stack Project

A full-stack web application that replicates the Figma "Assignment" page with dynamic widgets for image gallery management.

## 🚀 Features

- **Responsive Layout**: Left pane (empty) and right pane (widgets) design
- **Tabs Widget**: Dynamic content switching between "About Me", "Experiences", and "Recommended"
- **Gallery Widget**: Image upload, preview, and grid display functionality
- **Real-time Updates**: Instant image preview and dynamic gallery updates
- **Error Handling**: Graceful error handling for uploads and API calls

## 🛠️ Tech Stack

### Backend
- **Node.js** with Express.js
- **MongoDB** with Mongoose ODM
- **Multer** for file uploads
- **CORS** for cross-origin requests

### Frontend
- **React 18** with functional components and hooks
- **Tailwind CSS** for styling
- **Axios** for API calls

## 📁 Project Structure

```
figma-assignment/
├── backend/
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   │   └── imageController.js
│   ├── models/
│   │   └── Image.js
│   ├── routes/
│   │   └── imageRoutes.js
│   ├── uploads/ (created automatically)
│   ├── server.js
│   └── package.json
└── frontend/
    ├── public/
    │   └── index.html
    ├── src/
    │   ├── components/
    │   │   ├── LeftPane.jsx
    │   │   ├── RightPane.jsx
    │   │   ├── TabsWidget.jsx
    │   │   ├── GalleryWidget.jsx
    │   │   ├── ImageCard.jsx
    │   │   └── AddImageButton.jsx
    │   ├── App.jsx
    │   ├── index.js
    │   └── index.css
    ├── tailwind.config.js
    ├── postcss.config.js
    └── package.json
```

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or MongoDB Atlas)
- npm or yarn

### Backend Setup

1. Navigate to the backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the backend directory:
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/figma-assignment
NODE_ENV=development
```

4. Start the server:
```bash
# Development mode with nodemon
npm run dev

# Production mode
npm start
```

The backend will be running on `http://localhost:5000`

### Frontend Setup

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the frontend directory:
```env
REACT_APP_API_URL=http://localhost:5000
```

4. Start the development server:
```bash
npm start
```

The frontend will be running on `http://localhost:3000`

## 🔧 API Endpoints

### Images API

- **GET** `/api/images` - Fetch all stored images
- **POST** `/api/images` - Upload a new image file

### Health Check

- **GET** `/api/health` - Server health check

## 📱 Responsive Design

- **Mobile**: Full-width right pane with widgets
- **Desktop (≥768px)**: Split layout with empty left pane and widgets in right pane
- **Tablet**: Responsive grid adjustments for optimal viewing

## 🎨 Design Features

- **Figma-inspired UI**: Clean, modern design with proper spacing and shadows
- **Smooth Animations**: Fade-in and slide-up transitions
- **Hover Effects**: Interactive elements with hover states
- **Loading States**: Visual feedback during uploads and data fetching
- **Error Handling**: User-friendly error messages

## 🚀 Deployment

### MongoDB Atlas Setup (Required First)
1. Go to [MongoDB Atlas](https://cloud.mongodb.com)
2. Create a free account and cluster
3. Create a database user with read/write permissions
4. Add IP address `0.0.0.0/0` to Network Access (allows access from anywhere)
5. Get your connection string from "Connect" → "Connect your application"
6. Replace `<username>`, `<password>`, and `<dbname>` with your actual values

### Backend Deployment (Render)
1. Go to [Render Dashboard](https://dashboard.render.com)
2. Click "New +" → "Web Service"
3. Connect your GitHub repository
4. Configure:
   - **Name**: `figma-backend`
   - **Root Directory**: `backend`
   - **Environment**: `Node`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
5. Add Environment Variables:
   - `NODE_ENV` = `production`
   - `MONGODB_URI` = `mongodb+srv://yourusername:yourpassword@cluster0.abc123.mongodb.net/figma-assignment?retryWrites=true&w=majority&authSource=admin`
6. Click "Create Web Service"
7. Wait for deployment and copy the backend URL

### Frontend Deployment (Render)
1. Go to [Render Dashboard](https://dashboard.render.com)
2. Click "New +" → "Static Site"
3. Connect your GitHub repository
4. Configure:
   - **Name**: `figma-frontend`
   - **Root Directory**: `frontend`
   - **Build Command**: `npm install && npm run build`
   - **Publish Directory**: `build`
5. Add Environment Variable:
   - `REACT_APP_API_URL` = `https://your-backend-service-name.onrender.com`
6. Click "Create Static Site"

### Important Notes
- Replace `yourusername`, `yourpassword`, and `abc123` with your actual MongoDB Atlas credentials
- The backend URL will be something like `https://figma-backend-xxxx.onrender.com`
- Make sure to use the exact backend URL (including the random suffix) for the frontend environment variable

## 🧪 Testing the Application

1. **Upload Images**: Click "Add Image" button and select image files
2. **View Gallery**: Images appear in a responsive grid layout
3. **Tab Navigation**: Switch between different tabs in the Tabs Widget
4. **Responsive Design**: Test on different screen sizes

## 🔍 Troubleshooting

### Common Issues

1. **CORS Errors**: Ensure backend CORS is properly configured
2. **Image Upload Fails**: Check file size (max 5MB) and file type
3. **MongoDB Connection**: Verify connection string and network access
4. **Port Conflicts**: Ensure ports 3000 and 5000 are available

### File Upload Limits
- Maximum file size: 5MB
- Supported formats: JPEG, JPG, PNG, GIF, WebP

## 📄 License

MIT License - feel free to use this project for learning and development purposes.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
# FIGMA
