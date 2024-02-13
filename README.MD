# Angular NodeJs MongoDB Project

## Description

It is a assignment given by a company.

## Getting Started

Follow these steps to set up and run the project locally.

### Prerequisites

- Node.js, npm and angular CLI installed

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/AzizulTareq/angular-nodejs-mongodb-e-commerce.git
    ```

2. Navigate to the backend folder:

    ```bash
    cd backend
    ```

3. Install backend dependencies:

    ```bash
    npm install
    ```

4. Start the backend server:

    ```bash
    npm start
    ```

5. Navigate back to the root folder:

    ```bash
    cd ..
    ```

6. Navigate to the frontend folder:

    ```bash
    cd frontend
    ```

7. Install frontend dependencies:

    ```bash
    npm install
    ```

8. Start the frontend server:

    ```bash
    ng serve
    ```

### Configuration

In the backend root, create a `.env` file and add the following code:

```env
PORT=5000
NODE_ENV=development
MONGO_URL=mongodb+srv://azizultareq7:83883883m@cluster0.pmeulbs.mongodb.net/
JWT_SECRET=myapp123456
```