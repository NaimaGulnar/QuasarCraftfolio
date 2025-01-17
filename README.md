# CraftFolio

CraftFolio is a portfolio generator app, which allows users to create a professional portfolio by inputting personal details, skills, and projects, and then downloading the generated portfolio as an HTML file.

## How it works

- **Form Input:** Users fill out a step-by-step form where they can add personal information, skills, and projects they want to showcase in their portfolio.
- **Download Portfolio:** After filling out the form, users can click the "Download" button to generate and download their portfolio as an HTML file.
- **Demo Data:** To make the process easier, you can use the "demoData.txt" file with pre-filled data. Simply copy and paste the demo data into the form, then modify any specific details as needed before downloading your portfolio.

## Technologies Used

- **Frontend**:
  - **Vue.js**: A progressive JavaScript framework for building user interfaces. It enables efficient, reactive data binding and component-based architecture, which helps in building dynamic applications.
  - **Quasar Framework**: A powerful UI framework based on Material Design. It provides a wide range of components that make the development process faster and helps build responsive and polished interfaces.
- **State Management**:

  - **Pinia**: Pinia is the state management library for Vue 3. It replaces Vuex in Vue 3 applications, providing a more modern and efficient way to manage application state.

- **Version Control**:

  - **Git**: Used for version control to track changes in the codebase.
  - **GitHub**: A cloud-based platform to host the code repository and facilitate collaboration.

- **Package Management**:
  - **npm**: Used to manage project dependencies and scripts.

## Setup

**Clone the Repository**

```bash
  git clone https://github.com/NaimaGulnar/QuasarCraftfolio.git
  cd QuasarCraftfolio
```

**Install the Dependencies**

```bash
  yarn
  # or
  npm install
```

**Start the app in development mode**

```bash
quasar dev
```

**Lint the files**

```bash
yarn lint
# or
npm run lint
```

**Format the files**

```bash
yarn format
# or
npm run format
```

**Build the app for production**

```bash
quasar build
```

**Customize the configuration**
See [Configuring quasar.config.js](https://v2.quasar.dev/quasar-cli-vite/quasar-config-js).
