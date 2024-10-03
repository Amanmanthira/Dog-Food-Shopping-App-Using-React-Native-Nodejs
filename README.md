# 🐾 DogApp - Dog Food Shopping Mobile App

Welcome to **DogApp**, a mobile app designed to make shopping for your dog’s food easy and convenient! This app provides a seamless experience from product browsing to cart management and user profile updates.

---

## 📱 Features

- **Authentication**:
  - User can **Sign up** and **Log in** securely.
  - Manage personal account details (profile updates, password changes, etc.).

- **Product Management**:
  - Browse a variety of premium dog food products.
  - Access detailed product descriptions, pricing, and images.

- **Cart System**:
  - Add and remove products from your cart.
  - View and manage your cart before completing your purchase.

- **Exclusive Offers**:
  - Explore special deals and offers tailored for you.
  - Save money with available discounts and promotions.

- **Article Section**:
  - Learn about dog care, nutrition, and more through informative articles.

---

## 🚀 Getting Started

### Prerequisites

Before you begin, make sure you have the following installed:

- [Node.js](https://nodejs.org/)
- [Expo CLI](https://expo.dev/)
- [MongoDB](https://www.mongodb.com/)
- Git

### Installation

1. **Clone the repository**:

    ```bash
    git clone https://github.com/Amanmanthira/DogApp.git
    cd DogApp
    ```

2. **Install dependencies** for both the **App** and **Server**:

    **Front-end**:

    ```bash
    cd App
    npm install
    ```

    **Back-end**:

    ```bash
    cd ../Server
    npm install
    ```

3. **Set up the MongoDB database** and configure the connection settings in the `Server` folder.

4. **Run the app**:

    **Back-end**:

    ```bash
    cd Server
    npm start
    ```

    **Front-end**:

    ```bash
    cd App
    expo start
    ```

Use a simulator or the **Expo Go** app on your device to preview the app.

---

## 📂 Project Structure

```bash
DogApp/
├── App/            # Front-end (React Native)
│   ├── src/        # App source code
│   └── components/ # UI Components
├── Server/         # Back-end (Node.js, MongoDB)
│   ├── models/     # Database models
│   ├── routes/     # API Routes
│   └── controllers/# Business logic
└── README.md       # Project documentation
![Picture1](https://github.com/user-attachments/assets/e08e03da-50d7-435c-ab08-71ec2af716fe)
