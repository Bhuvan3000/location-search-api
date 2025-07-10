# 🌍 Location Search API

A simple Node.js and Express API that lets users search for a location/place (e.g., "Baner Pune") and returns its name, latitude, and longitude using the **Google Places API** or **Mapbox Geocoding API**.

---

## 🔧 Features

- Search locations by text query (e.g., `/search-location?query=Baner Pune`)
- Returns place name along with its latitude and longitude
- Built using:
  - Node.js
  - Express
  - Axios
  - dotenv
- Uses **Mapbox API** (or **Google Places API** if switched)

---

## 🛠️ Setup Instructions

### 1. Clone the repository
```bash
git clone https://github.com/Bhuvan3000/location-search-api.git
cd location-search-api
```

### 2. Install dependencies
```bash
npm install
```

### 3. Add environment variables  
Create a `.env` file with the following:

```env
MAPBOX_API_KEY=your_mapbox_key_here
```

> Only one is required depending on the provider.

### 4. Run the server
```bash
node index.js
```

The server will start at:  
`http://localhost:3000`

---

## 🔍 How to Use the API

### Endpoint:
```
GET /search-location?query=Baner Pune
```

### Sample Response:
```json
{
  "results": [
    {
      "name": "Baner, Pune, Maharashtra, India",
      "lat": 18.559,
      "lon": 73.786
    }
  ]
}
```

> You can test the endpoint using Postman or a browser.

---

## 🧪 Tested With

- ✅ Postman  
- ✅ Manual testing on localhost

---

## 📦 Tech Stack

- Node.js  
- Express  
- Axios  
- dotenv  
-  Mapbox Geocoding API

---

## 👨‍💻 Author

D Bhuvan Krishna
📧 bhuvankrishna2505@gmail.com  
🌐 [LinkedIn](https://www.linkedin.com/in/bhuvan-krishna-d/)
