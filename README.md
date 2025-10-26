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

### Backend Deployment (Render/Railway)
1. Connect your GitHub repository
2. Set environment variables:
   - `MONGODB_URI`: Your MongoDB Atlas connection string
   - `NODE_ENV`: production
3. Deploy

### Frontend Deployment (Vercel/Netlify)
1. Connect your GitHub repository
2. Set environment variables:
   - `REACT_APP_API_URL`: Your deployed backend URL
3. Deploy

### MongoDB Atlas Setup
1. Create a MongoDB Atlas account
2. Create a new cluster
3. Get your connection string
4. Update the `MONGODB_URI` in your backend environment variables

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
