# 🧠 Contributing to cvly

> Collaborative Git strategy and development workflow for [cvly](https://github.com/Charmingdc/cvly)

---

## 📁 Project Structure

```
cvly/
├── client/   # Frontend (React, etc.)
└── server/   # Backend (Node.js, etc.)
```

- Frontend devs work inside `client/`
- Backend devs work inside `server/`

---

## 🔀 Branching Strategy

```
main               ← Stable, production-ready code
├── frontend       ← Frontend staging and integration
│   └── feature/... (short-lived frontend features)
└── backend        ← Backend staging and integration
└── feature/... (short-lived backend features)
```

---

## 🚦 Roles & Responsibilities

| Branch         | Owner         | Purpose                              |
|----------------|---------------|--------------------------------------|
| `main`         | Both          | Stable, production-ready code        |
| `frontend`     | Frontend Dev  | Frontend staging branch              |
| `backend`      | Backend Dev   | Backend staging branch               |
| `feature/*`    | Each Developer| Short-lived branches for features    |

---

## 🔧 Setup

1. Clone the repo:
```bash
git clone git@github.com:Charmingdc/cvly.git
cd cvly
```

2. Check out the dev branch you need:
```bash
git checkout frontend  # or backend
```

---

## 🚀 Daily Workflow

### Step 1: Create a Feature Branch
```bash
git checkout frontend  # or backend
git pull origin frontend # keep it up to date
git checkout -b feature/your-feature-name
```

### Step 2: Make Your Changes
- Frontend: work only in `client/`
- Backend: work only in `server/`

```bash
git add .
git commit -m "Describe your change clearly"
```

### Step 3: Push Feature Branch
```bash
git push origin feature/your-feature-name
```

### Step 4: Open a Pull Request
- From: `feature/your-feature-name`
- Into: `frontend` or `backend`
- Include:
- What you did
- Screenshots (if applicable)
- Any testing instructions

### Step 5: Merge After Review
Once reviewed and tested:
```bash
git checkout frontend  # or backend
git pull origin frontend  # ensure it's up to date
git merge feature/your-feature-name
git push origin frontend
```

Then delete the feature branch:
```bash
git branch -d feature/your-feature-name
git push origin --delete feature/your-feature-name
```

---

## 🔁 Merging to `main`

After both `frontend` and `backend` are stable and tested together:

1. Open PR(s) from:
- `frontend` → `main`
- `backend` → `main`

2. Run integration tests or manual checks
3. Only merge when verified stable

---

## 🧼 Best Practices

- Keep `feature/*` branches short-lived (1–3 days)
- Pull often from your base branch (`frontend` or `backend`)
- Only merge tested, working code into `main`
- Communicate if a change spans both `client/` and `server/`

---

## 🧾 .gitignore (already in place)

```gitignore
# Root
node_modules/
.env
.DS_Store

# Client
client/node_modules/
client/.env

# Server
server/node_modules/
server/.env
```

---

## 🧰 Optional Enhancements

- Use Prettier/ESLint for code style
- Add Husky for linting and commit hooks
- Set up GitHub Actions for automated testing

---

## 📫 Repo URL

**GitHub:** [https://github.com/Charmingdc/cvly](https://github.com/Charmingdc/cvly)

---

Happy coding! 🚀