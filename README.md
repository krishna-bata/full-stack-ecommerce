# **Forever - E-Commerce Platform**  

### **Live Demo:** [Forever eCommerce](https://ecommerce-frontend-roan-sigma.vercel.app/)  
### **Admin Panel:** [Forever Admin](https://ecommerce-admin-ashy-three.vercel.app/)  

### **Test Credentials** 
Email : user.test@gamil.com  
Password : Test@123

## **Overview**  
Forever is a full-stack eCommerce web application built using the MERN stack. It provides users with a seamless shopping experience while offering an admin dashboard to manage products and orders efficiently.

## **Features**  
### **User Features**  
✅ User authentication (Register/Login)  
✅ Browse products by categories (Men, Women, Kids)  
✅ Add to cart & manage cart items  
✅ Checkout with multiple payment options (Stripe, Razorpay, COD)  
✅ Order tracking and history  

### **Admin Features**  
✅ Dashboard to manage products, users, and orders  
✅ Add, edit, and delete products  
✅ Update order status and track payments   

## **Tech Stack**  
- **Frontend:** React.js, Context API, Redux Toolkit, Tailwind CSS  
- **Backend:** Node.js, Express.js  
- **Database:** MongoDB  
- **Authentication:** JSON Web Token (JWT)  
- **Payments:** Stripe, Razorpay  
- **Hosting:** Vercel (Frontend, Backend, Admin)

## **Installation**  
### **1. Clone the repository**  
```bash
git https://github.com/krishna-bata/full-stack-ecommerce.git
cd ecommerce-app
```

### **2. Install dependencies**  
#### **Frontend**  
```bash
cd frontend
npm install
```

#### **Backend**  
```bash
cd backend
npm install
```

### **3. Configure Environment Variables**  
Create a `.env` file in the **backend** directory and add:  
```env
MONGO_URI=your_mongodb_connection_string
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_SECRETE_KEY=your_cloudinary_secret_key
CLOUDINARY_NAME=your_cloudinary_name
JWT_SECRET=your_jwt_secret
ADMIN_EMAIL=your_admin-email
ADMIN_PASSWORD=your_admin_password
STRIPE_SECRET_KEY=your_stripe_secret_key
RAZORPAY_KEY_SECRET=your_razorpay_key_secret
RAZORPAY_KEY_ID=your_razorpay_key_id
```

Create a `.env` file in the **frontend** directory and add:  
```env
VITE_BACKEND_URL=your_backend_url
RAZORPAY_KEY_ID=your_razorpay_key_id
```

Create a `.env` file in the **admin** directory and add:  
```env
VITE_BACKEND_URL=your_backend_url
```

### **4. Start the Application**  
#### **Backend**  
```bash
cd backend
npm run server
```
#### **Frontend**  
```bash
cd frontend
npm run dev
```

#### **Admin**  
```bash
cd frontend
npm run dev
```

## **API Endpoints**  
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /api/products | Get all products |
| GET | /api/products/:id | Get single product |
| POST | /api/auth/register | Register new user |
| POST | /api/auth/login | Login user |
| POST | /api/orders | Create a new order |
| GET | /api/orders/:id | Get order details |
| POST | /api/payments | Process payments |


## **Upcoming Features**  
🚀 Wishlist functionality to allow users to save favorite products.  
🚀 Product reviews and ratings for better user engagement.      

## **Contributing**  
Contributions are welcome! Feel free to fork the repo, create a new branch, and submit a pull request.
