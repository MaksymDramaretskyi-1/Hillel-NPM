# Hillel-NPM

## 🛠 Project Setup Steps
### 1. Git + GitHub

Cloned the repository from GitHub to the local machine using:

```bash
git clone <repository-link>
```

**Why:** To work on the project locally and later push changes back to GitHub.

---

### 2. Creating `index.js`

Created an `index.js` file and added code from a previous homework assignment.

**Why:** This is the entry point of the project where the main JavaScript logic lives.

---

### 3. Initializing the Project with npm

Ran:

```bash
npm init
```

This generated the `package.json` file.

**Why:** To make the project an npm project, allowing dependency management and custom scripts.

---

### 4. Installing the `lodash` Package

Installed lodash via:

```bash
npm install lodash
```

**Why:** Lodash is a popular utility library for working with arrays, objects, and numbers. Used here as practice.

---

### 5. Creating `.gitignore`

Created a `.gitignore` file and added:

```
node_modules/
.vscode/
.idea/
```

**Why:** To avoid uploading unnecessary or heavy files to the GitHub repository.

---

### 6. Installing and Running Prettier

Installed Prettier and ran:

```bash
npx prettier --write .
```

**Why:** To automatically format code and keep a consistent coding style across the project.

---

### 7. Installing ESLint with Airbnb Style Guide

Installed ESLint and configured it using the Airbnb style guide:

```bash
npx eslint --init
```

Ran ESLint on project files and fixed the warnings.

**Why:** To write clean, readable code and catch potential issues early.

---

### 8. Git Commit + Push

Saved changes and pushed them to GitHub:

```bash
git add .
git commit -m "Project setup"
git push
```

**Why:** To back up the project and share progress with others, such as your instructor.
