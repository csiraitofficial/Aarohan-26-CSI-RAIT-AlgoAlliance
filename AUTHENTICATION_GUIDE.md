# Authentication System Implementation Guide

## Overview
A complete authentication system has been implemented with:
- **Backend**: Node.js Express server with JWT-based authentication
- **Database**: JSON-based file storage system (can be migrated to MongoDB later)
- **Frontend**: React with TypeScript using Auth Context for state management
- **Security**: Password hashing with bcryptjs, JWT tokens for session management

## Features Implemented

### Backend (`backend/src`)

#### 1. **Database Layer** (`utils/database.js`)
- User CRUD operations using JSON file storage
- Located in `backend/data/users.json`
- Functions:
  - `getAllUsers()` - Get all users
  - `findUserByEmail(email)` - Find user by email
  - `findUserById(id)` - Find user by ID
  - `createUser(userData)` - Create new user
  - `updateUser(id, updates)` - Update user profile
  - `getUserPublicProfile(user)` - Get user without password

#### 2. **Authentication Utilities** (`utils/auth.js`)
- `hashPassword(password)` - Hash passwords with bcryptjs
- `comparePassword(password, hashedPassword)` - Verify password
- `generateToken(userId)` - Generate JWT token
- `verifyToken(token)` - Verify JWT token validity
- `extractToken(authHeader)` - Extract token from Authorization header

#### 3. **Authentication Routes** (`routes/auth.js`)
Available endpoints:
- **POST `/auth/signup`** - Register new user
  - Required: firstName, lastName, email, password, confirmPassword
  - Optional: age, gender, city, chronicConditions, medications, allergies, emergencyContact, caregiverContact
  - Returns: JWT token and user data

- **POST `/auth/signin`** - Login user
  - Required: email, password
  - Returns: JWT token and user data

- **GET `/auth/me`** - Get current user profile (requires authentication)
  - Headers: `Authorization: Bearer <token>`
  - Returns: User data without password

- **PUT `/auth/profile`** - Update user profile (requires authentication)
  - Headers: `Authorization: Bearer <token>`
  - Body: Any user fields to update (except email, password, id, createdAt)
  - Returns: Updated user data

- **POST `/auth/logout`** - Logout user (may require authentication)
  - Returns: Success message

#### 4. **Authentication Middleware** (`middleware/auth.js`)
- `authMiddleware(req, res, next)` - Validates JWT token from Authorization header
- Protects routes that require authentication

### Frontend (`frontend/src`)

#### 1. **Auth Context** (`context/AuthContext.tsx`)
Provides global authentication state:
- `user` - Current logged-in user data
- `isAuthenticated` - Boolean flag for auth status
- `isLoading` - Loading state for auth initialization
- `logout()` - Clear auth state and logout
- `updateUser(userData)` - Update user data in context

#### 2. **Protected Routes** (`context/ProtectedRoute.tsx`)
- Wrapper component for routes that require authentication
- Redirects unauthenticated users to `/signin`
- Shows loading spinner while checking auth status

#### 3. **Updated Pages**

**SignUp Page** (`pages/SignUp.tsx`)
- Two-step form (basic info + health profile)
- Form validation
- API integration with `/auth/signup`
- Auto-redirect to dashboard on success
- Stores token in localStorage

**SignIn Page** (`pages/SignIn.tsx`)
- Email and password login
- "Remember me" checkbox
- API integration with `/auth/signin`
- Auto-redirect to dashboard on success
- Error handling

**Dashboard** (`pages/Dashboard.tsx`)
- Wrapped with `<ProtectedRoute>`
- Displays user information (name, email, age, location, chronic conditions)
- Personalised greeting with user's first name
- All existing dashboard features preserved

#### 4. **Navigation Component** (`components/Navigation.tsx`)
- Shows user name and logout button when authenticated
- Shows "Sign In" and "Sign Up" buttons when not authenticated
- Mobile-responsive user menu
- Logout functionality

#### 5. **Root App** (`App.tsx`)
- Wrapped with `<AuthProvider>` to enable auth context globally
- Initializes auth state from localStorage on mount

## Data Storage

### User Data Structure (JSON)
```json
{
  "id": "1234567890",
  "firstName": "John",
  "lastName": "Doe",
  "email": "john@example.com",
  "password": "$2a$10$hashed_password_here",
  "age": 30,
  "gender": "male",
  "city": "San Francisco, CA",
  "chronicConditions": "Diabetes, Hypertension",
  "medications": "Metformin, Lisinopril",
  "allergies": "Penicillin",
  "emergencyContact": "Jane Doe: 555-1234",
  "caregiverContact": "Mary Doe: 555-5678",
  "createdAt": "2026-03-07T10:30:00.000Z",
  "updatedAt": "2026-03-07T10:30:00.000Z"
}
```

## Testing the Authentication System

### 1. Sign Up
1. Open http://localhost:5173/signup
2. Fill in basic information (first name, lastName, email, password)
3. Accept terms and continue
4. Fill in health profile information (optional fields)
5. Accept consent and click "Complete Sign Up"
6. Should be redirected to dashboard
7. Verify user data is displayed in the user info card

### 2. Sign In
1. Open http://localhost:5173/signin
2. Enter registered email and password
3. Click "Sign In"
4. Should be redirected to dashboard with personalized greeting

### 3. Protected Routes
1. Open browser console (F12)
2. Go to http://localhost:5173/dashboard
3. If not authenticated, should redirect to /signin
4. After signing in, dashboard should be accessible

### 4. Logout
1. Click the "Logout" button in the top right navigation
2. Should be redirected to home page
3. Auth token should be cleared from localStorage

### 5. Persistent Login
1. Sign in and verify you're on dashboard
2. Refresh the page
3. Should still be logged in (reads from localStorage)
4. Clear localStorage and refresh - should redirect to signin

## API Testing with curl/PowerShell

### Sign Up
```powershell
$body = @{
    firstName = "John"
    lastName = "Doe"
    email = "john@example.com"
    password = "password123"
    confirmPassword = "password123"
    age = 30
    gender = "male"
    city = "San Francisco"
} | ConvertTo-Json

Invoke-WebRequest -Uri "http://localhost:5000/auth/signup" `
  -Method Post `
  -ContentType "application/json" `
  -Body $body
```

### Sign In
```powershell
$body = @{
    email = "john@example.com"
    password = "password123"
} | ConvertTo-Json

$response = Invoke-WebRequest -Uri "http://localhost:5000/auth/signin" `
  -Method Post `
  -ContentType "application/json" `
  -Body $body

$token = ($response.Content | ConvertFrom-Json).token
```

### Get Current User
```powershell
Invoke-WebRequest -Uri "http://localhost:5000/auth/me" `
  -Method Get `
  -Headers @{ "Authorization" = "Bearer $token" }
```

## Environment Variables

### Backend (.env)
```
GEMINI_API_KEY=your_api_key
AI_MODEL=gemini-pro-vision
PORT=5000
CORS_ORIGIN=http://localhost:5173
JWT_SECRET=your_super_secret_jwt_key_change_in_production_12345
JWT_EXPIRY=7d
```

## Security Considerations

1. **Password Hashing**: Passwords are hashed with bcryptjs (salt rounds: 10)
2. **JWT Tokens**: Signed with secret key, expires in 7 days by default
3. **CORS Protection**: Only allows requests from configured origin
4. **Protected Routes**: Sensitive functionality requires valid JWT
5. **No Password in Response**: Passwords are never returned in API responses
6. **HTTP-Only Cookies** (Future): Consider implementing for better XSS protection

## Future Enhancements

1. **Database Migration**: Replace JSON with MongoDB/PostgreSQL
2. **Email Verification**: Send verification email on signup
3. **Password Reset**: Implement forgot password flow
4. **Refresh Tokens**: Implement token refresh mechanism
5. **OAuth Integration**: Google, Apple, Facebook login
6. **Two-Factor Authentication**: Add 2FA support
7. **Password Strength Validation**: Enforce stronger passwords
8. **Rate Limiting**: Protect auth endpoints from brute force
9. **Audit Logging**: Track authentication events
10. **HTTP-Only Cookies**: Move tokens from localStorage to secure cookies

## File Structure

```
backend/
├── src/
│   ├── server.js (updated with auth routes)
│   ├── utils/
│   │   ├── database.js (NEW)
│   │   └── auth.js (NEW)
│   ├── routes/
│   │   ├── auth.js (NEW)
│   │   ├── chat.js
│   │   └── summarizeReport.js
│   └── middleware/
│       └── auth.js (NEW)
├── data/
│   └── users.json (AUTO-CREATED)
├── .env (updated)
└── package.json (updated dependencies)

frontend/
├── src/
│   ├── context/
│   │   ├── AuthContext.tsx (NEW)
│   │   └── ProtectedRoute.tsx (NEW)
│   └── app/
│       ├── App.tsx (updated with AuthProvider)
│       └── pages/
│           ├── SignUp.tsx (updated with API integration)
│           ├── SignIn.tsx (updated with API integration)
│           └── Dashboard.tsx (updated with user data display & ProtectedRoute)
│       └── components/
│           └── Navigation.tsx (updated with auth features)
```

## Troubleshooting

### "CORS error" when calling auth endpoints
- Ensure frontend URL is in `CORS_ORIGIN` in backend .env
- Restart backend after changing .env

### "Token required" error
- Make sure Authorization header is properly formatted: `Bearer <token>`
- Check if token is expired (7 days default)

### User data not persisting after page reload
- Check if localStorage is enabled and not full
- Verify token is valid and not expired

### Can't access protected routes
- Ensure you're logged in
- Check browser console for auth errors
- Clear localStorage and try logging in again

## Contact & Support
For issues or questions about the authentication system, refer to the code comments and docstrings in each file.
