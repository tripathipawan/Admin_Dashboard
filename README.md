# 📊 React Admin Dashboard

A production-grade, fully responsive admin dashboard built with **React**, **TypeScript**, **Material UI**, **Recharts**, and **TanStack Query** — featuring interactive data visualizations, a server-side capable MUI DataGrid, analytics panels with pie and line charts, and a modular component architecture. Deployed live on Vercel.

**🔗 Live Demo:** [admin-dashboard-five-umber-w63h4xuzcg.vercel.app](https://admin-dashboard-five-umber-w63h4xuzcg.vercel.app/)

---

## 📌 Overview

This dashboard provides a fully functional admin panel UI that demonstrates professional-grade frontend engineering. The codebase uses TypeScript throughout for type safety, Material UI for a polished and consistent component system, Recharts for interactive data visualization, and TanStack Query for async data fetching with caching — making it structurally identical to how a real enterprise admin panel would be built.

The dashboard covers the complete surface area of an admin interface: summary stat cards, line and pie chart analytics, a paginated and sortable MUI DataGrid for tabular data, a top deals panel, and a fully responsive layout that adapts across all screen sizes.

---

## ✨ Features

- **MUI DataGrid with Advanced Table Features** — The data table is built using `@mui/x-data-grid` and `@mui/x-data-grid-pro`, supporting column sorting, pagination, row selection, column visibility toggling, and custom cell renderers out of the box — the kind of data table found in real enterprise admin panels.
- **Recharts Data Visualizations** — Analytics panels render interactive **line charts** for time-series data (revenue trends, user growth), **pie charts** for categorical breakdowns (traffic sources, category distribution), **bar charts** for comparison data, and **area charts** for cumulative metrics — all built with Recharts and wrapped in `ResponsiveContainer` for fluid resizing.
- **TanStack Query (React Query v5)** — All async data fetching is managed by `@tanstack/react-query` v5, providing automatic caching, background refetching, loading states, and error handling — keeping data-fetching logic fully separated from UI rendering.
- **Material UI v7 Component System** — The entire UI is built on `@mui/material` with `@emotion/react` and `@emotion/styled` as the styling engine. Buttons, cards, avatars, chips, tooltips, menus, and layout components all use MUI primitives for design consistency and built-in accessibility.
- **TypeScript Throughout** — Every component, prop interface, API response type, and column definition is typed with TypeScript. Strict configurations in `tsconfig.app.json` and `tsconfig.node.json` enforce compile-time type safety across the entire codebase.
- **Tailwind CSS Utility Layer** — Tailwind CSS v4 works alongside MUI for layout utilities, spacing overrides, and custom section-level styles where Tailwind's utility approach is more efficient than MUI's `sx` prop system.
- **React Router DOM v7 Navigation** — Multi-page routing (Home, Users, Products, Orders, Login) is handled client-side with React Router, with a persistent Sidebar and Navbar layout across all routes.
- **Summary Stat Cards** — The main dashboard displays KPI cards for total users, revenue, orders, and other key metrics — each card includes a mini Recharts line chart showing the trend for that metric.
- **Top Deals / Top Users Panel** — A ranked list panel displays top-performing users or transactions with avatar, name, amount, and status badge — visually identical to what you'd see in a real SaaS dashboard.
- **Ratio and Conversion Panels** — Dedicated panels show percentage-based breakdowns (mobile vs desktop traffic, new vs returning users) using the PieChart component with a custom legend.
- **Fully Responsive Layout** — The dashboard uses a combination of MUI Grid, CSS Flexbox, and Tailwind responsive utilities to adapt correctly from widescreen desktop down to mobile.
- **Vite + TypeScript Build** — Vite with `@vitejs/plugin-react` powers fast HMR during development; `tsc -b && vite build` compiles TypeScript before bundling for production.

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| React 19 | Component-based UI and SPA architecture |
| TypeScript | Static typing — props, API responses, column definitions, utilities |
| Vite | Development server, HMR, TypeScript compilation, and production bundling |
| Material UI v7 (`@mui/material`) | Core UI component system — buttons, cards, layout, inputs, avatars |
| MUI DataGrid (`@mui/x-data-grid`) | Advanced data table — sorting, pagination, row selection, custom cells |
| MUI DataGrid Pro (`@mui/x-data-grid-pro`) | Extended DataGrid capabilities for complex table requirements |
| `@emotion/react` + `@emotion/styled` | CSS-in-JS engine powering all MUI component styling |
| Recharts | Line, pie, bar, and area charts for all analytics panels |
| TanStack Query v5 | Server state management — caching, refetching, loading and error states |
| React Router DOM v7 | Client-side routing and persistent layout across all pages |
| Tailwind CSS v4 | Utility-first layout spacing and section-level style overrides |

---

## 📁 Project Structure

```
Admin_Dashboard/
├── public/                          # Static assets (favicon, images)
├── src/
│   ├── components/                  # Reusable UI building blocks
│   │   ├── navbar/
│   │   │   └── Navbar.tsx           # Top bar — search input, notifications icon, profile avatar
│   │   ├── sidebar/
│   │   │   └── Sidebar.tsx          # Left nav — links with icons, active state, logo
│   │   ├── dataTable/
│   │   │   └── DataTable.tsx        # MUI DataGrid wrapper — typed column configs, row actions
│   │   ├── chartBox/
│   │   │   └── ChartBox.tsx         # Recharts LineChart stat card — title, value, trend %
│   │   ├── pieChartBox/
│   │   │   └── PieChartBox.tsx      # Recharts PieChart card — category breakdown with legend
│   │   ├── barChartBox/
│   │   │   └── BarChartBox.tsx      # Recharts BarChart card — comparison data visualization
│   │   ├── bigChartBox/
│   │   │   └── BigChartBox.tsx      # Full-width Recharts LineChart for revenue or traffic
│   │   ├── areaChartBox/
│   │   │   └── AreaChartBox.tsx     # Recharts AreaChart card — cumulative metric trends
│   │   └── topBox/
│   │       └── TopBox.tsx           # Top deals panel — ranked list with avatar, name, amount
│   ├── pages/                       # Route-level page components
│   │   ├── home/
│   │   │   └── Home.tsx             # Main dashboard — stat cards, all charts, DataGrid, TopBox
│   │   ├── users/
│   │   │   └── Users.tsx            # Users management page — full DataGrid with user records
│   │   ├── products/
│   │   │   └── Products.tsx         # Products page — product listing DataGrid
│   │   ├── orders/
│   │   │   └── Orders.tsx           # Orders page — order table with status and amount columns
│   │   └── login/
│   │       └── Login.tsx            # Admin login page — authentication form
│   ├── data.ts                      # Mock data — chart series, stat card configs, table rows
│   ├── App.tsx                      # Root component — Router setup, Sidebar + Navbar layout wrapper
│   └── main.tsx                     # React DOM entry with QueryClientProvider
├── index.html                       # Vite HTML entry point
├── vite.config.ts                   # Vite + React plugin configuration
├── tsconfig.json                    # Root TypeScript configuration
├── tsconfig.app.json                # App-level strict TypeScript config
├── tsconfig.node.json               # Node/tooling TypeScript config
├── eslint.config.js                 # ESLint with React hooks and refresh plugins
└── package.json                     # Dependencies and npm scripts
```

---

## 🚀 Getting Started

**Prerequisites:** Node.js 18+

**1. Clone the repository**
```bash
git clone https://github.com/tripathipawan/Admin_Dashboard.git
cd Admin_Dashboard
```

**2. Install dependencies**
```bash
npm install
```

**3. Start the development server**
```bash
npm run dev
```

**4. Build for production**
```bash
npm run build
```

---

## 🎮 Dashboard Pages

| Page | Route | Description |
|---|---|---|
| **Home** | `/` | Main dashboard — all stat cards, charts, DataGrid preview, top deals panel |
| **Users** | `/users` | Full users table — sortable, paginated MUI DataGrid with all user records |
| **Products** | `/products` | Product listing DataGrid with category, stock, and price columns |
| **Orders** | `/orders` | Orders management table with status badges and revenue data |
| **Login** | `/login` | Admin authentication form |

---

## 🧠 Architecture Highlights

| Concern | Implementation |
|---|---|
| Data Fetching | TanStack Query `useQuery` — caching, background refetch, typed response shapes |
| Data Table | MUI DataGrid with `GridColDef[]` typed column definitions per page |
| Charts | Recharts components inside `ResponsiveContainer` — fluid resize on all screen widths |
| Type Safety | TypeScript interfaces for all component props, data shapes, and column definitions |
| Styling | MUI `sx` prop for component-level overrides; Tailwind classes for layout-level spacing |
| Routing | React Router `<Routes>` with Sidebar + Navbar layout persisting across all page routes |
| Server State | TanStack Query manages all async state; `useState` / `useContext` only for local UI state |

---

## 🌱 What I Learned

- Building a complete enterprise admin panel UI with Material UI's full component ecosystem
- Configuring MUI DataGrid with typed `GridColDef` arrays, custom cell renderers, and paginated row data
- Integrating multiple Recharts chart types within a consistent, reusable card-based layout
- Managing server state with TanStack Query — structured caching, loading/error UI, and background sync
- Writing a fully TypeScript-typed React codebase with strict compiler settings

---

## 🤝 Contributing

Contributions are welcome! To contribute:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/your-feature-name`)
3. Commit your changes (`git commit -m 'Add: your feature description'`)
4. Push to the branch (`git push origin feature/your-feature-name`)
5. Open a Pull Request

---

## 👨‍💻 Author

**Pawan Tripathi**
- GitHub: [@tripathipawan](https://github.com/tripathipawan)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
