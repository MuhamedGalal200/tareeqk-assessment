#  Tareeqk - Full Stack Developer Assessment

Welcome to my submission for the **Tareeqk Full Stack Developer Assessment**.  
This project demonstrates a simple towing request system where a **customer** can create requests via web, and **drivers** can view and accept them via mobile.

---

##  Tech Stack

| Layer      | Tech Used            |
|------------|----------------------|
| Backend    | Laravel + MySQL      |
| Web App    | React + Leaflet      |
| Mobile App | React Native (Expo)  |

---

##  Project Structure

```
tareeqk-assessment/
├── backend/         # Laravel API
├── web-customer/    # React for customer
└── mobile-driver/   # React Native for drivers
```

---

##  Features Implemented

- [x] Laravel API with endpoints:
  - `POST /api/requests` — Create towing request
  - `GET /api/requests` — List all requests
  - `PUT /api/requests/{id}/assign` — Assign request
  - `POST /api/login` and `POST /api/register`
- [x] Web App:
  - Login & Register
  - Submit towing request with location via map
- [x] Mobile App:
  - List all requests
  - Accept request
  - Open location in Google Maps
- [x] Bonus:
  -  Map integration (Leaflet & Google Maps)
  -  Simple Auth
  -  Responsive web design
  -  Real-time updates (polling)
  -  Full Readme included

---

##  How to Run

###  1. Backend (Laravel API)

```bash
cd backend
cp .env.example .env
# Edit DB credentials inside .env
php artisan migrate
php artisan serve
```

Default API URL: `http://localhost:8000/api`

---

### 🔹 2. Web App (React)

```bash
cd web-customer
npm install
npm start
```

Visit: [http://localhost:3000/](http://localhost:3000/)

---

### 🔹 3. Mobile App (Expo)

```bash
cd mobile-driver
npm install
npx expo start or  npm run web


```

> Important: In mobile code, replace `localhost` with your local IP (e.g. `192.168.1.10`) for backend API URLs.

---

## Users

You can register as:
- **customer** → can submit requests from web
email :"mohamed@email.com"
password :"123456"
- **driver** → can view and accept requests from mobile

---

##  Submission

Submitted by: **Mohamed Galal**  
GitHub: [https://github.com/MuhamedGalal200/tareeqk-assessment]  
Email: mogoo992@gmail.com


---

##  Notes

- All requirements completed.
- Code is modular and commented.
- No external auth used (simple token logic).
- You can test quickly using Postman or frontend.
---

### Thank you! 
