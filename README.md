# Simple Blog Project

This is a simple blog application with both public and admin pages, built using **React**, **TypeScript**, **Tailwind CSS**, **Spring Boot**, **Java**, and **MySQL**. The blog allows users to read and interact with posts, while administrators have the ability to manage and update content on the site.

## Features

### Public Page:
- **Posts**: Users can view a list of posts, each associated with relevant tags and authors.
- **Popular Posts**: Displays the most clicked posts to help users discover trending content.
- **Widgets**:
  - **Pinned Article**: A prominent article that remains on top for better visibility.
  - **Soundtrack of the Month**: Displays the current soundtrack recommendations.
  - **Movies**: Lists of recommended movies.
  - **Trailer**: A section showing the latest movie trailers.

### Admin Page:
- The admin has access to a control panel that allows them to manage and update the blog content.
- **Manage Posts**: Create, update, or delete posts.
- **Manage Tags and Authors**: Admin can add or modify post tags and author details.
- **Manage Popular Posts**: Admin can select and update the most popular posts based on user interaction.
- **Manage Widgets**: Admin can update widgets like the pinned article, soundtrack of the month, movies, and trailers.

## Technologies Used

- **Frontend**:
  - **React**: The application is built using React, with a focus on dynamic rendering of components.
  - **TypeScript**: TypeScript is used for static typing and better maintainability of the frontend codebase.
  - **Tailwind CSS**: Tailwind CSS is used for styling, providing a flexible and customizable utility-first CSS framework.

- **Backend**:
  - **Spring Boot (Java)**: The backend is built with Spring Boot, a powerful framework for building Java-based web applications.
  - **MySQL**: A MySQL database is used to store and manage the application's data, such as posts, tags, authors, and more.

## Database Schema

- **Posts Table**: Contains information about blog posts, including titles, content, author, and associated tags.
- **Authors Table**: Contains data about the authors of the posts.
- **Tags Table**: Stores tags that can be associated with posts to categorize content.
- **Widgets Table**: Stores data for various widgets like the pinned article, soundtrack of the month, movies, and trailers.

## How to Run the Project

### Prerequisites

- **Node.js** and **npm** (for frontend)
- **Java** and **Spring Boot** (for backend)
- **MySQL** database running locally or on a server

### Backend Setup

1. Clone the repository or download the project files.
2. Navigate to the backend directory and run the following command to build and run the backend:
   `
   ./mvnw spring-boot:run
   `
3. The backend will be running on `http://localhost:8080`.

   ### Frontend Setup
1. Navigate to the frontend directory and install dependencies using npm:
   ```
   npm install
   ```
2. Start the development server:
   ```
   npm run dev
   ```
3. The frontend will be running on `http://localhost:5173`.

