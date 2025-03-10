# HRM Collision Cost Calculator

A web-based application that visualizes motor vehicle collision data and calculates the total cost of collisions within selected areas. Built to support transportation safety initiatives in the Halifax Regional Municipality (HRM).

## 🚀 Features

- 📍 Interactive map with crash location visualization
- 🖱️ Click-and-drag area selection using Leaflet Draw
- 💰 Real-time calculation of total dollar value of selected crash incidents
- 📊 Detailed crash information including severity and type
- ⚡ Responsive and lightweight user interface

## 🛠 Tech Stack

- **TypeScript / Next.js**
- **Leaflet.js**
- **Leaflet Draw**
- **React / React Hooks**
- **Tailwind CSS**
- **ArcGIS (for crash data sources)**

## ⚙️ Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/Raff29/hrm-collision-cost-calculator.git
   cd hrm-collision-cost-calculator
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```
   The app will be available at `http://localhost:3000`

4. **Build for production**
   ```bash
   npm run build
   npm run start
   ```

## 📈 Data Source

This application uses crash data from HRM's open data portal or other ArcGIS-compatible sources in GeoJSON format.

## 📄 License

MIT License. See [`LICENSE`](./LICENSE) for more details.

