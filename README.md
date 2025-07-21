# 🔗 Cvly: A Smarter Way to Share Your Resume

Cvly transforms your traditional resume into a dynamic, shareable online link. ✨ Say goodbye to endless file uploads and gain valuable insights into who views and downloads your professional profile. Built for the modern job seeker, Cvly helps you make a lasting impression and stay ahead in your career journey.

## 🚀 Getting Started

Follow these steps to get Cvly up and running on your local machine.

### Prerequisites

Before you begin, ensure you have the following installed:

*   🌐 [Node.js](https://nodejs.org/) (LTS version recommended)
*   📦 [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/)

### Clone the Repository

First, clone the project repository to your local machine:

```bash
git clone git@github.com:Charmingdc/cvly.git
cd cvly
```

### Install Dependencies

Next, install all the required project dependencies:

```bash
npm install
# or
yarn install
```

### Run the Development Server

To start the development server and view the application in your browser:

```bash
npm run dev
# or
yarn dev
```

The application will typically be available at `http://localhost:5173`.

### Build for Production

To create a production-ready build of the application:

```bash
npm run build
# or
yarn build
```

## 🌟 Usage

Cvly offers a straightforward workflow for managing and sharing your professional resume.

1.  **Landing Page**: Upon visiting the application, you'll land on a welcoming page (`/`) that highlights Cvly's features and benefits.
2.  **Authentication**: Navigate to `/signup` to create a new account or `/signin` if you already have one. Cvly supports Google and GitHub authentication for a quick and secure login experience.
3.  **Dashboard**: After successful authentication, you'll be redirected to your personal dashboard (`/dashboard`). This is your central hub for managing your resumes.
4.  **Upload New Resume**: Head over to `/new` to upload your resume in PDF format. Once uploaded, Cvly will generate a unique, shareable link for it.
5.  **Track Insights**: From your dashboard, you can track real-time statistics, including total views, downloads, and timestamps, giving you a clear picture of engagement with your resume.
6.  **Settings**: Adjust your account preferences and settings at `/settings`.

## ✨ Key Features

*   **One-Link Resume Sharing**: 🔗 Transform your PDF resume into a professional, shareable link that works seamlessly across all platforms, eliminating the need for multiple file uploads.
*   **Real-time Analytics**: 📊 Gain deep insights into your resume's performance with intelligent tracking of views, downloads, and engagement timestamps.
*   **Streamlined Authentication**: 🔑 Securely sign in or sign up using familiar services like Google and GitHub, ensuring a smooth and reliable user experience.
*   **Always Up-to-Date**: 🔄 Effortlessly update your resume anytime; your unique shareable link remains constant, ensuring recipients always see your latest version.
*   **Modern & Responsive Design**: 📱 Enjoy a sleek, intuitive user interface crafted with Tailwind CSS, providing a consistent experience across all devices.
*   **Type-Safe Development**: 🛡️ Built with TypeScript for enhanced code quality, maintainability, and fewer runtime errors.

## 🛠️ Technologies Used

Cvly is built with a robust and modern stack, ensuring a performant and maintainable application.

| Technology      | Description                                | Version | Link                                                 |
| :-------------- | :----------------------------------------- | :------ | :--------------------------------------------------- |
| **React**       | A JavaScript library for building UIs      | 19.1.0  | [react.dev](https://react.dev/)                      |
| **TypeScript**  | Typed superset of JavaScript               | 5.8.3   | [typescriptlang.org](https://www.typescriptlang.org/) |
| **Vite**        | Next-generation frontend tooling           | 7.0.4   | [vitejs.dev](https://vitejs.dev/)                    |
| **Tailwind CSS**| Utility-first CSS framework                | 3.4.17  | [tailwindcss.com](https://tailwindcss.com/)          |
| **React Router**| Declarative routing for React              | 7.7.0   | [reactrouter.com](https://reactrouter.com/)          |
| **Lucide React**| Beautiful & customizable React icons       | 0.525.0 | [lucide.dev](https://lucide.dev/)                    |
| **ESLint**      | Pluggable JavaScript linter                | 9.30.1  | [eslint.org](https://eslint.org/)                    |
| **PostCSS**     | Tool for transforming CSS with JS plugins  | 8.5.6   | [postcss.org](https://postcss.org/)                  |

## 🌱 Contributing

We welcome contributions from the community! If you'd like to contribute, please follow these guidelines:

*   **Fork the repository**. 🍴
*   **Clone your forked repository** to your local machine.
*   **Create a new branch** for your feature or bug fix: `git checkout -b feature/your-feature-name` or `bugfix/issue-description`. 🐞
*   **Make your changes**, ensuring they adhere to the project's coding standards.
*   **Commit your changes** with clear, descriptive commit messages. 📝
*   **Push your branch** to your forked repository.
*   **Open a pull request** to the `main` branch of the original repository. Please describe your changes thoroughly. 🤝

## 👤 Author

**Charmingdc**

A passionate frontend developer who loves building intuitive and engaging web experiences.

*   **Portfolio**: [adebayomuis.vercel.app](https://adebayomuis.vercel.app)
*   **LinkedIn**: [Your LinkedIn Profile](https://linkedin.com/in/yourusername)
*   **Twitter/X**: [Your Twitter/X Profile](https://twitter.com/yourusername)

---

[![React 19.1.0](https://img.shields.io/badge/React-19.1.0-blue?style=flat&logo=react)](https://react.dev/)
[![TypeScript 5.8.3](https://img.shields.io/badge/TypeScript-5.8.3-3178C6?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite 7.0.4](https://img.shields.io/badge/Vite-7.0.4-orange?style=flat&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS 3.4.17](https://img.shields.io/badge/Tailwind_CSS-3.4.17-06B6D4?style=flat&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)

[![Readme was generated by Dokugen](https://img.shields.io/badge/Readme%20was%20generated%20by-Dokugen-brightgreen)](https://www.npmjs.com/package/dokugen)