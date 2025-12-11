🛒 Ecommerce Product API

A clean and scalable RESTful API built with Node.js, Express, and MongoDB.
This service provides essential product management features for ecommerce applications.

🔗 API Access

If your API is deployed, you can place the link here:

👉 Base URL: https://your-deployed-api-link.com
(Leave this blank if you haven’t deployed yet.)

✨ Features

RESTful product endpoints

Create, read, update, delete (CRUD) operations

MongoDB + Mongoose schema modeling

Clean error handling

Secure middleware setup (CORS, Helmet, etc.)

Simple and scalable folder architecture

Note: Image uploads (Cloudinary or storage service) are not implemented yet.

🧰 Tech Stack

Node.js

Express.js

MongoDB

Mongoose

Dotenv

📂 Project Structure
Ecommerce_Product_Api/
│
├── src/
│   ├── config/          # Database connection & environment config
│   ├── controllers/     # Business logic handlers
│   ├── routes/          # API routes
│   ├── models/          # MongoDB models
│   ├── middlewares/     # Error handling & validation
│   └── server.js        # Application entry point
│
├── .env
├── package.json
└── README.md

⚙️ Installation
git clone https://github.com/<your-username>/Ecommerce_Product_Api.git
cd Ecommerce_Product_Api
npm install

🔧 Environment Variables

Create a .env file:

PORT=5000
MONGO_URI=your-mongodb-uri

▶️ Run the Server
Development
npm run dev

Production
npm start

📘 API Endpoints
/api/products
Method	Description
GET	Fetch all products
GET /id	Fetch a single product
POST	Create a new product
PUT /id	Update a product
DELETE /id	Delete a product
🔮 Future Improvements

Add image upload support (Cloudinary or other service)

Add authentication (JWT)

Add product filtering, sorting, pagination

Add Swagger documentation

Add deployment setup (Docker, CI/CD)

🤝 Contributing

Contributions and suggestions are welcome!

📄 License

MIT License.
