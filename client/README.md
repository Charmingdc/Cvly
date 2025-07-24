# Cvly: Your Resume, Reimagined 📄

Cvly transforms your traditional PDF resume into a dynamic, shareable online link, complete with built-in analytics. This project empowers job seekers and professionals to gain insights into how their resume is being interacted with – knowing exactly when it's viewed or downloaded. Say goodbye to guesswork and hello to a smarter way of sharing your professional profile! 🚀

## Installation

Getting Cvly up and running on your local machine is straightforward. Follow these steps:

### ⚙️ Clone the Repository

First, clone the project repository to your local machine:

```bash
git clone git@github.com:Charmingdc/cvly
```

### 📦 Install Dependencies

Navigate into the cloned project directory and install the necessary dependencies using npm:

```bash
cd cvly
npm install
```

### ▶️ Run the Development Server

Once the dependencies are installed, you can start the development server:

```bash
npm run dev
```

This will typically start the application on `http://localhost:5173` (or another available port).

## Usage

Cvly provides a seamless experience for managing and sharing your resume.

### Uploading Your Resume
Once logged in, navigate to the "New Resume" page. You can easily upload your PDF file. The application will then generate a unique, shareable link for your resume. You can also give your resume a custom name for easy identification.

### Sharing Your Links
After uploading, Cvly provides two types of links:
*   **Preview Page URL**: A dedicated page where your resume can be viewed directly in the browser.
*   **Direct File URL**: A link that allows for immediate downloading of the PDF.

Both links are designed to be easily shareable via email, professional networking sites, or your personal portfolio.

### Tracking Analytics
The core of Cvly's value lies in its analytics. From your dashboard or the dedicated "Analytics" page for each resume, you can track:
*   **Total Views**: See how many times your resume preview page has been accessed.
*   **Total Downloads**: Monitor how many times your resume file has been downloaded.
*   **Daily & Weekly Logs**: Get a breakdown of views and downloads by date.
*   **Comparison Graphs**: Visualize trends in views versus downloads over time.

This real-time data helps you understand engagement and optimize your outreach strategy.

### Managing Resumes
The "Resumes" section provides an overview of all your uploaded documents. You can easily view details, access analytics, or update any resume, ensuring your shared link always points to your latest version.

## Features

Cvly is packed with features designed to make resume sharing intelligent and efficient:

*   🔗 **Unique Shareable Links**: Generate clean, persistent links for your resumes that you can use anywhere, ensuring your latest version is always accessible.
*   📊 **Real-Time Analytics**: Track views and downloads with detailed logs and insightful graphs, helping you understand engagement patterns.
*   🚀 **Seamless Resume Uploading**: Easily upload your resume in PDF format and get it ready for sharing in seconds.
*   🔄 **Effortless Updates**: Update your resume anytime without changing the link, ensuring recruiters always see your most current information.
*   🔐 **Secure User Authentication**: Sign in securely using popular social providers like Google and GitHub (mocked for now), with clear separation for public and protected routes.
*   🏠 **Intuitive Dashboard**: A centralized hub to view general analytics for all your resumes, providing a quick overview of your engagement metrics.
*   🌓 **Dynamic Theming**: Supports both light and dark modes, adapting to user preferences for a comfortable viewing experience.

## Technologies Used

This project leverages a modern web development stack to deliver a robust and responsive user experience.

| Category      | Technology       | Description                                  | Link                                            |
| :------------ | :--------------- | :------------------------------------------- | :---------------------------------------------- |
| **Frontend**  | React            | A JavaScript library for building user interfaces. | [React](https://react.dev/)                      |
|               | TypeScript       | A typed superset of JavaScript that compiles to plain JavaScript. | [TypeScript](https://www.typescriptlang.org/)    |
|               | Vite             | A fast build tool for modern web projects.    | [Vite](https://vitejs.dev/)                      |
|               | Tailwind CSS     | A utility-first CSS framework for rapid UI development. | [Tailwind CSS](https://tailwindcss.com/)         |
|               | React Router DOM | Declarative routing for React.                 | [React Router](https://reactrouter.com/en/main) |
|               | Recharts         | A composable charting library built with React and D3. | [Recharts](https://recharts.org/en-US/)          |
|               | Sonner           | An opinionated toast component for React.      | [Sonner](https://sonner.emilkowal.ski/)          |
|               | Lucide React     | A collection of beautiful and customizable open-source icons. | [Lucide React](https://lucide.dev/)              |
| **Tooling**   | ESLint           | Pluggable JavaScript linter.                   | [ESLint](https://eslint.org/)                    |
|               | PostCSS          | A tool for transforming CSS with JavaScript plugins. | [PostCSS](https://postcss.org/)                  |
|               | Autoprefixer     | A PostCSS plugin to parse CSS and add vendor prefixes. | [Autoprefixer](https://github.com/postcss/autoprefixer) |

## Contributing

We welcome contributions to Cvly! If you're looking to help improve the project, please follow these guidelines:

*   ✨ **Fork the repository** and clone it to your local machine.
*   🌿 **Create a new branch** for your feature or bug fix: `git checkout -b feature/your-feature-name`.
*   🛠️ **Make your changes** and ensure the code adheres to the project's coding standards.
*   📝 **Write clear, concise commit messages** explaining your changes.
*   🧪 **Test your changes thoroughly** to prevent regressions.
*   🚀 **Push your branch** to your forked repository.
*   💡 **Open a pull request** to the `main` branch, describing your changes and their purpose.

Your contributions are greatly appreciated!

## License

This project is not currently distributed under a specific open-source license. All rights are reserved by the author.

## Author Info

👋 Connect with the developer behind Cvly:

**Charmingdc**
*   🌐 Portfolio: [https://adebayomuis.vercel.app](https://adebayomuis.vercel.app)
*   🐦 Twitter: [@your_twitter_handle](https://twitter.com/your_twitter_handle) (Replace with actual handle)
*   👔 LinkedIn: [linkedin.com/in/your-linkedin-profile](https://linkedin.com/in/your-linkedin-profile) (Replace with actual profile)

---

[![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Build Status](https://img.shields.io/badge/Build-Passing-brightgreen?style=for-the-badge)](https://github.com/Charmingdc/cvly/actions)

[![Readme was generated by Dokugen](https://img.shields.io/badge/Readme%20was%20generated%20by-Dokugen-brightgreen)](https://www.npmjs.com/package/dokugen)