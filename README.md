
![Desktop - 1](https://github.com/user-attachments/assets/21ea0aca-ba55-4fb2-af17-2c953021b8ca)

## 🌟 Background
This website was created as a lighthearted project to spread joy and spark curiosity. It’s perfect for sharing secrets, sending surprises, or just having fun with friends!

## 🤫 Anonin
A fun and interactive web platform that allows users to send and receive anonymous messages! Whether it’s for a surprise confession, a friendly joke, or just some harmless fun, this project is all about keeping the mystery alive while connecting people in a unique way.

## 🚀 Features
- <b>Send Anonymous Messages</b>: Share your thoughts or feelings without revealing your identity.
- <b>Search for Messages</b>: Enter your name to check if someone has left a message for you.
- <b>Simple and Intuitive Interface</b>: Easy-to-use design that keeps the focus on the fun.

## 🛠️ Tech Stack
- Frontend: Inertia + ReactJS, TailwindCSS, DaisyUI
- Backend: Laravel 11
- Database: MySQL

## 📖 How to Use
- Send a Message: Enter the recipient’s name and your anonymous message.
- Search for Messages: Use the search bar to see if there’s a message waiting for you.
- Enjoy the mystery!

## 💻 How To Run
Before running this project on your local machine, make sure you have installed:
-> PHP 8.2 or above<br>
-> Node.js v20.15.0<br>
-> npm v10.8.1<br>
-> Composer v2.4.1<br>

*These are the versions I used while developing this project.*


1. Clone this repository
```
git clone https://github.com/yohanesrioirsan/anonin-message.git
```
2. Install All Dependencies
```
composer install  
```
```
npm install
```
3. Setup The ENV
- Copy the .env.example file and rename it to .env
```
cp .env.example .env  
```
- Configure the database and other environment variables in the .env file.
4. Generate application key
```
php artisan key:generate  
```
5. Run The Database migrations
```
php artisan migrate  
```
6. Build the assets
```
npm run dev
```
7. Run the development server
```
php artisan serve  
```

The project will be run on your local machine. http://localhost:8000 

Likes/stars/forks would be greatly appreciated, and feel free to use this project as an educational resource. For any kind of issues, bugs, or errors, please feel free to contact me. Thank you :).




