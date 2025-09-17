# Automated Attendance System for Rural Schools

## Problem Statement Details

- **Problem Statement ID**: 25012
- **Title**: Automated Attendance System for Rural Schools
- **Organization**: Government of Punjab, Department of Higher Education
- **Category**: Software
- **Theme**: Smart Education

## Overview

This project addresses the critical need for automated attendance systems in rural schools across India. The system provides a low-cost, user-friendly solution that automates attendance using facial recognition and RFID-based systems, requiring minimal infrastructure and training for deployment in rural schools.

## Key Features

### 🎯 Core Functionality

- **Automated Attendance**: Facial recognition and RFID-based attendance marking
- **Offline Capability**: Works without internet connectivity with automatic sync
- **Multi-Class Support**: Manage multiple classes and students
- **Real-time Reporting**: Generate daily, weekly, and monthly attendance reports
- **Parent Notifications**: Automatic alerts to parents about student attendance

### 🔧 Technical Features

- **Responsive Web Interface**: Modern, mobile-friendly design
- **Offline Synchronization**: Queue-based sync system for unreliable connections
- **Face Recognition**: Advanced facial recognition using face-api.js
- **Database Management**: SQLite database with comprehensive schema
- **Authentication**: Secure JWT-based authentication system
- **API-First Design**: RESTful APIs for all operations

## Architecture

The system follows a process flow architecture that ensures reliable attendance tracking:

1. **Teacher Login** → **Select Class/Session**
2. **Student Present Check** → **Choose Attendance Method**
3. **Capture & Validate** → **Store Locally**
4. **Internet Check** → **Sync to Server** (or Queue for Later)
5. **Repeat for All Students** → **Generate Reports** → **Send Notifications**

## Technology Stack

### Frontend

- **React 18** - Modern UI framework
- **Tailwind CSS** - Utility-first CSS framework
- **React Router** - Client-side routing
- **Axios** - HTTP client for API calls
- **Face-api.js** - Facial recognition library
- **React Toastify** - Notification system

### Backend

- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **SQLite3** - Lightweight database
- **JWT** - Authentication tokens
- **Multer** - File upload handling
- **Nodemailer** - Email notifications
- **Bcryptjs** - Password hashing

### Development Tools

- **Concurrently** - Run multiple processes
- **Nodemon** - Auto-restart development server
- **PostCSS** - CSS processing

## Installation & Setup

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager
- Git

### Quick Start

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd automated-attendance-system
   ```

2. **Install dependencies**

   ```bash
   # Install root dependencies
   npm install
   
   # Install server dependencies
   cd server && npm install
   
   # Install client dependencies
   cd ../client && npm install
   ```

3. **Environment Setup**

   ```bash
   # Copy environment template
   cp server/env.example server/.env
   
   # Edit the .env file with your configuration
   nano server/.env
   ```

4. **Start the application**

   ```bash
   # From root directory
   npm run dev
   ```

   This will start both the backend server (port 5000) and frontend development server (port 3000).

### Environment Configuration

Create a `.env` file in the server directory:

```env
# Server Configuration
PORT=5000
NODE_ENV=development

# JWT Secret (Change this in production)
JWT_SECRET=your-super-secret-jwt-key-change-in-production

# Database Configuration
DB_PATH=./database/attendance.db

# Email Configuration (Optional)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password

# Face Recognition Models Path
FACE_MODELS_PATH=./models

# Sync Configuration
SYNC_INTERVAL_MINUTES=5
MAX_SYNC_RETRIES=3
```

## Usage Guide

### 1. Initial Setup

1. Access the application at `http://localhost:3000`
2. Login with demo credentials:
   - **Username**: `teacher1`
   - **Password**: `password`

### 2. Class Management

1. Navigate to **Classes** section
2. View assigned classes
3. Add students to classes
4. Manage class information

### 3. Taking Attendance

1. Select a class from the dashboard
2. Start an attendance session
3. Choose attendance method:
   - **Manual**: Click present/absent/late for each student
   - **Face Recognition**: Capture photos for automated recognition
4. Save and complete the session

### 4. Face Recognition Setup

1. Navigate to **Face Recognition** for a specific class
2. Select a student
3. Capture or upload a clear photo of the student's face
4. Register the face for future recognition

### 5. Reports & Analytics

1. Go to **Reports** section
2. Select class and report type (daily/weekly/monthly)
3. Choose date range
4. Generate and download reports

### 6. Offline Usage

- The system automatically detects network status
- Data is stored locally when offline
- Automatic sync occurs when connection is restored
- Monitor sync status in the **Sync Status** section

## API Documentation

### Authentication Endpoints

- `POST /api/auth/login` - User login
- `GET /api/auth/profile` - Get user profile
- `PUT /api/auth/profile` - Update user profile
- `PUT /api/auth/change-password` - Change password

### Class Management

- `GET /api/classes` - Get all classes
- `GET /api/classes/:id` - Get class details
- `GET /api/classes/:id/students` - Get class students
- `POST /api/classes/:id/students` - Add student to class

### Attendance

- `POST /api/attendance/session` - Start attendance session
- `POST /api/attendance/mark` - Mark individual attendance
- `POST /api/attendance/bulk` - Bulk mark attendance
- `GET /api/attendance/session/:id` - Get session records
- `PUT /api/attendance/session/:id/complete` - Complete session

### Face Recognition

- `POST /api/face-recognition/register/:studentId` - Register student face
- `POST /api/face-recognition/recognize/:sessionId` - Recognize face
- `POST /api/face-recognition/validate` - Validate image quality
- `GET /api/face-recognition/students/:classId` - Get students with faces

### Reports

- `POST /api/reports/daily` - Generate daily report
- `POST /api/reports/weekly` - Generate weekly report
- `POST /api/reports/monthly` - Generate monthly report
- `GET /api/reports/history` - Get report history

### Sync & Notifications

- `GET /api/sync/pending` - Get pending sync items
- `POST /api/sync/mark-synced/:id` - Mark item as synced
- `GET /api/sync/status` - Get sync status
- `POST /api/notifications/attendance-alert` - Send attendance alert

## Database Schema

The system uses SQLite with the following main tables:

- **users** - Teachers and administrators
- **schools** - School information
- **classes** - Class details
- **students** - Student information
- **attendance_sessions** - Attendance session records
- **attendance_records** - Individual attendance records
- **sync_queue** - Offline sync queue
- **notifications** - Notification records
- **reports** - Generated reports

## Deployment

### Production Deployment

1. **Build the application**

   ```bash
   cd client && npm run build
   ```

2. **Set production environment**

   ```bash
   export NODE_ENV=production
   ```

3. **Start the server**

   ```bash
   cd server && npm start
   ```

### Docker Deployment (Optional)

```dockerfile
# Dockerfile
FROM node:16-alpine

WORKDIR /app
COPY package*.json ./
RUN npm install

COPY server/ ./server/
COPY client/build/ ./client/build/

EXPOSE 5000
CMD ["npm", "start"]
```

### Environment Variables for Production

```env
NODE_ENV=production
PORT=5000
JWT_SECRET=your-production-secret-key
DB_PATH=/data/attendance.db
SMTP_HOST=your-smtp-host
SMTP_USER=your-smtp-user
SMTP_PASS=your-smtp-password
```

## Security Considerations

- **Authentication**: JWT tokens with expiration
- **Password Security**: Bcrypt hashing
- **Input Validation**: Server-side validation for all inputs
- **File Upload Security**: File type and size restrictions
- **SQL Injection Prevention**: Parameterized queries
- **CORS Configuration**: Proper cross-origin settings

## Performance Optimization

- **Database Indexing**: Optimized queries with proper indexes
- **Image Compression**: Automatic image compression for face recognition
- **Caching**: Local storage caching for offline functionality
- **Lazy Loading**: Component-based lazy loading
- **Bundle Optimization**: Webpack optimization for production builds

## Troubleshooting

### Common Issues

1. **Face Recognition Not Working**
   - Ensure camera permissions are granted
   - Check if face-api.js models are loaded
   - Verify image quality and lighting

2. **Sync Issues**
   - Check network connectivity
   - Verify sync queue status
   - Clear browser cache if needed

3. **Database Errors**
   - Ensure database file permissions
   - Check disk space availability
   - Verify SQLite installation

### Logs and Debugging

- Server logs: Check console output in terminal
- Client logs: Use browser developer tools
- Database: Check SQLite database file integrity

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support and questions:

- Create an issue in the repository
- Contact the development team
- Check the documentation

## Acknowledgments

- **SIH Team** - Development team
- **Government of Punjab** - Problem statement provider
- **Rural Schools** - End users and beneficiaries
- **Open Source Community** - Libraries and frameworks used

---

**Problem Statement ID**: 25012  
**Organization**: Government of Punjab, Department of Higher Education  
**Category**: Software  
**Theme**: Smart Education  

*This system addresses the critical need for automated attendance systems in rural schools, providing a scalable, cost-effective solution for improved educational administration.*
