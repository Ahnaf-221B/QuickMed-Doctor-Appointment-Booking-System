# Medical Appointment Booking System

## Project Name:
**QuickMed - Doctor Booking System**

## Purpose:
QuickMed is a web application designed to simplify the process of booking medical appointments with doctors. The system features a responsive design, real-time notifications, and interactive charts for appointment statistics. Users can book, manage, and track their appointments seamlessly.

## Key Features:
- **Book Appointments**: Schedule appointments with available doctors.
- **View Doctor Profiles**: Detailed profiles for doctors, including availability.
- **Cancel Appointments**: Manage and cancel existing appointments.
- **Appointment Statistics**: Visual representation of appointment stats using Recharts.
- **Real-time Notifications**: Notifications for appointment confirmations and errors using React Toastify.
- **Responsive Design**: Optimized for mobile, tablet, and desktop.
- **Persistent Storage**: Store data in `localStorage` for persistence.
- **Real-Time CountUp Animations**: 
  - React CountUp library used to display dynamic counts and animated number transitions on the UI.

## Technologies and npm Packages Used:

### npm Packages:
- **@tailwindcss/vite**: For integrating TailwindCSS with Vite for styling.
- **firebase**: To handle user authentication, database management, and other Firebase services.
- **react**: A JavaScript library for building user interfaces.
- **react-dom**: The React package for rendering the UI to the DOM.
- **react-icons**: Provides a set of customizable icons for use in React projects.
- **react-router-dom**: For routing and navigation within the React application.
- **react-toastify**: For adding real-time notifications and alerts.
- **swiper**: A powerful and flexible slider library, used for creating slideshows or carousels in the UI.
- **tailwindcss**: A utility-first CSS framework for rapidly building custom designs.
- **react-countup**: For adding number animation effects to display dynamic values on the UI.

### Development Tools:
- **Vite**: A build tool that aims to provide a faster and leaner development experience for modern web projects.

## Installation

1. **Clone the repository**:
   ```bash
   git clone [repository-url]

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
