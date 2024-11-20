# React Mosaic Dashboard Project

This is a simple dashboard built using the `react-mosaic-component` library. The dashboard contains three resizable windows that display Company content. The project demonstrates how to integrate React Mosaic for a flexible layout, alongside TypeScript and React.

  <table>
  <tr>
    <td align="center">
      <a href="https://www.linkedin.com/in/nataliya-kachor-522170271/" target="_blank">
        <img src="https://github.com/user-attachments/assets/8eda0535-40b6-42cf-80ec-e195d1a5af0b" alt="Project Image" style="width: 300px;">
      </a>
    </td>
  </tr>
</table>

## Table of Contents
- [Features](#features)
- [Technologies](#technologies)
- [Installation](#installation)
- [Running the Project](#running-the-project)

## Features
- Resizable mosaic windows
- Drag and drop window resizing
- Basic placeholder content for each window
- React, TypeScript, and Tailwind CSS integration

## Technologies
- **React**: Front-end library
- **React Mosaic**: For creating resizable and customizable dashboard layouts
- **TypeScript**: Static typing for JavaScript
- **Vite**: Development environment and bundler
- **Tailwind CSS**: For quick and customizable styling

## Installation

To get started with the project, follow these steps:

1. **Clone the repository**:
    ```bash
    git clone https://github.com/yourusername/react-mosaic-dashboard.git
    cd react-mosaic-dashboard
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

## Running the Project

After installing the dependencies, follow these steps to start the project:

1. **Start the development server**:
    ```bash
    npm run dev
    ```

2. **Open the app**:  
   By default, the development server runs at `http://localhost:5173`.  
   Open your browser and go to:
    ```
    http://localhost:5173
    
    ```
    
# Docker

To run this project using Docker, follow these steps:


1. Build the Docker Image
Create a Dockerfile in the root of your project if you haven’t already. Here’s a sample configuration:

**Use a Node.js base image**

```bash
FROM node:18
 ```

**Set working directory**
```bash
WORKDIR /app
 ```
**Copy package files and install dependencies**

```bash
COPY package*.json ./
RUN npm install
 ```
**Copy the rest of the application files**

```bash
COPY . .
 ```
**Expose the app's port**

```bash
EXPOSE 5173
 ```
**Start the development server**
```bash
CMD ["npm", "run", "dev"]
To build the Docker image, run:
docker build -t react-mosaic-dashboard.
 ```

2. Run the Docker Container
After building the image, run the container:

```bash
docker run -p 5173:5173 react-mosaic-dashboard
 ```
This will start the application inside a containerized environment and expose it on port 5173.

You can access it at http://localhost:5173.


<div align="center">
  
## <a href="https://www.linkedin.com/in/nataliya-kachor-522170271/" target="_blank" name="features">©️ MagistrKim 2024</a>       
</div>

