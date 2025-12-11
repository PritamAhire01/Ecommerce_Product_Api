🛒 Ecommerce Product API

A simple and scalable RESTful API built with Node.js, Express, and MongoDB, designed to deliver product collections for ecommerce applications.

🔗 Live API Access (Render Hosted)
Base URL

Your base Render URL is active but does not show a homepage — this is normal:

https://ecommerce-product-api-1-u30v.onrender.com


Render will not show anything unless you add a specific endpoint.

Working Endpoints

You must use one of the available API collection routes:

Collection	Endpoint
Womens Wear Collection	https://ecommerce-product-api-1-u30v.onrender.com/WomensWearCollcetion
Night Wear Collection	https://ecommerce-product-api-1-u30v.onrender.com/NightWear
Skin Care Products	https://ecommerce-product-api-1-u30v.onrender.com/SkinCare
Glasses Product Night Wear	https://ecommerce-product-api-1-u30v.onrender.com/GlassesProductNightWear
✨ Features

REST API serving multiple product collections

MongoDB + Mongoose schema modeling

Organized Express routing

Secure middleware configuration (CORS, Helmet, etc.)

Scalable and easy to extend

🧰 Tech Stack

Node.js

Express.js

MongoDB

Mongoose

Dotenv

📁 Project Structure
Ecommerce_Product_Api/
│
├── src/
│   ├── config/          
│   ├── controllers/     
│   ├── routes/          
│   ├── models/          
│   ├── middlewares/     
│   └── server.js        
│
├── .env
├── package.json
└── README.md

⚙️ Installation
git clone https://github.com/<your-username>/Ecommerce_Product_Api.git
cd Ecommerce_Product_Api
npm install

🔧 Environment Variables

Inside .env:

PORT=5000
MONGO_URI=your-mongo-connection-string

▶️ Run the Server
Development
npm run dev

Production
npm start

📘 Available API Routes
Method	Route	Description
GET	/WomensWearCollcetion	Get all women’s wear items
GET	/NightWear	Get nightwear products
GET	/SkinCare	Get skincare items
GET	/GlassesProductNightWear	Get glasses / nightwear accessories

Note: No images are uploaded to Cloudinary yet. Image endpoints are not included.

🔮 Future Improvements

Add image uploads (Cloudinary / S3)

Add authentication (JWT)

Add pagination & searching

Add Swagger documentation

Add Docker + CI/CD pipeline

📄 License

MIT License.
