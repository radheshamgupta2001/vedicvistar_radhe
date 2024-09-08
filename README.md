
# VedicVistar - Radheshyam

**Note:** Use VPN because movie data is coming from TMDb API, which is not working in India. First, connect with VPN, and then it will work.

## Table of Contents

- [Demo](#demo)
- [Snapshot](#snapshot)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgements](#acknowledgements)

## Demo

[Link to the live demo](https://2kz379-3000.csb.app/)

## Snapshot

### 1. Home Page
![Home Page](https://github.com/user-attachments/assets/092bd8a0-c623-4e5f-86f8-7cb516219e73)

### 2. Movie Info
![Movie Info](https://github.com/user-attachments/assets/552ac5f8-a077-4a3f-a92e-eb177a16cbbb)

### 3. Top Rated
![Top Rated](https://github.com/user-attachments/assets/912d938c-bf96-4f1a-9d19-5bd04bec3a36)

### 4. Search
![Search](https://github.com/user-attachments/assets/a9485f54-335f-44f7-8564-a99ccf7e51f6)

### 5. Login Approval
![Login Approval](https://github.com/user-attachments/assets/90c0d0ff-df57-45d5-ab38-e4defacd75ba)

### 6. Logout Page
![Logout Page](https://github.com/user-attachments/assets/8163c0bb-adb2-4cba-b920-64dac5360cbd)

### 7. Mobile Responsive
![Mobile Responsive](https://github.com/user-attachments/assets/ec5ec8ad-8de6-4201-adf4-baf6735fd110)

## Features

- Browse content by categories like Popular, Top Rated, and Upcoming.
- Explore various genres with dynamic icons and descriptions.
- Responsive design, optimized for both desktop and mobile devices.
- Dark and light mode support based on the user's system preferences.

## Tech Stack

- **Frontend**: React, Redux, React Router
- **Styling**: Material-UI, CSS
- **Data Fetching**: RTK Query, TMDB API
- **Icons**: Custom genre icons

## Installation

1. Clone the repository:
2.  git clone https://github.com/radheshamgupta2001/vedicvistar_radhe.git cd vedicvistar_radhe
3.  .Install dependencies: npm install
4.  Create a `.env` file in the root directory and add your TMDB API key:
   REACT_APP_TMDB_API_KEY=your_api_key_here
   
5. Start the development server:
   npm start
   The application will open in your default browser at `http://localhost:3000`.

## Usage

- Use the sidebar to navigate through various categories and genres.
- Click on any category or genre to filter the content accordingly.
- The platform adapts to light or dark mode based on your system settings. (Feature not completed yet)
