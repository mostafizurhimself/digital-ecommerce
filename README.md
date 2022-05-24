### Live Preview

**Website**: https://emarket.mostafizur.dev/

**Admin**: https://emarket-admin.mostafizur.dev

**User**: admin@example.com **Password**: 111111

#### Getting Started

If you want to run this project on your local environment, please follow these steps:

Clone the repository:

```
git clone https://github.com/MdMostaFizurRahaman/digital-ecommerce.git
```

There are two parts of this project:

1. **Backend**: This is the admin panel. It is a web application that is used to manage the users, customers, products, orders etc. It has a REST API that is used to communicate with the frontend.
2. **Frontend**: This is the website. It is a web application that is used to display the products, customers, orders etc.

##### Backend:

To run the `backend` application, follow these steps:

```
cd digital-ecommerce/backend
```

Install dependencies:

```
composer install
```

Now, copy the `.env.example` file to `.env` file and change the credientials with your own values.

```
cp .env.example .env
```

Run these following commands to generate `APP_KEY` and `JWT_SECRET`:

```
php artisan key:generate
php artisan jwt:secret
```

Run the database migrations

```
php artisan migrate
```

Start the development server with this command:

```
php artisan serve
```

Your application is now running on http://localhost:8000

To populate the database with dummy data, run the following command:

```
php artisan db:seed
```

##### Frontend

For the frontend, cd into the `frontend` directory and run the following command.

```bash
npm install
```

Then copy the `.env.example` file and rename it to `.env` file.

```bash
cp .env.example .env
```

Update the `.env` file with your credentials.

```bash
APP_NAME="Digital Ecommerce"
APP_URL=http://localhost:8000
API_URL=http://localhost:8000/api/
PAYPAL_CLIENT_ID="YOUR_PAYPAL_CLIENT_ID"
STRIPE_PUBLISHABLE_KEY="YOUR_STRIPE_PUBLISHABLE_KEY"
MAPS_API="YOUR_MAPS_API"
```

Now, you can run the frontend applicaton with the following command.

```bash
npm run dev
```

or

```bash
npm run start
```

Now your frontend application will be running on http://localhost:3000/
