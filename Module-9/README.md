# Module 8 Notes: Deployment, Optimization, and Web Security

## Web Deployment

- What is Deployment?
  - **Deployment** is the process of making a website or web application available in a production environment to users through the Internet.

### Development vs Production

| Development                  | Production                           |
| ---------------------------- | ------------------------------------ |
| Runs on developer's computer | Runs on a public server/platform     |
| `localhost`                  | Public domain/URL                    |
| Used for testing             | Used by real users                   |
| Debugging is common          | Stability and security are important |
| Development configuration    | Production configuration             |

For example:

```text
Development
    ↓
Write HTML/CSS/JS
    ↓
Test locally
    ↓
Git commit
    ↓
GitHub
    ↓
Deployment platform
    ↓
Production website
```

---

## Static vs Dynamic Deployment

### Static website

Usually consists of:

```text
HTML
CSS
JavaScript
Images
```

Examples:

```text
portfolio.html
style.css
script.js
```

Suitable platforms include:

- GitHub Pages
- Netlify
- Vercel

### Dynamic website

Requires server-side processing.

For example:

```text
Browser
   ↓
HTTP Request
   ↓
Web Server
   ↓
PHP / Node.js / Python
   ↓
Database / Files
   ↓
HTTP Response
   ↓
Browser
```

Examples:

- PHP website
- Node.js application
- Python web application
- WordPress/WooCommerce

These generally require hosting that can execute server-side code.

---

## Step-by-step Deployment Guideline

GitHub Pages is explicitly a static-site hosting service, while Netlify and Vercel provide broader build/deployment workflows. Below is a **step-by-step guide** for all three platforms you can use directly to deploy your project:

### Step 1 — Prepare the Project

Create and prepare all your project files. For example,

```text
premier-university/
│
├── index.html
├── style.css
└── script.js
```

> The entry file should normally be `index.html`.

---

### Step 2 — Put the Project on GitHub

Because all three deployment methods can work with Git repositories, create a repository on GitHub and then:

```bash
git init
git add .
git commit -m "Initial website"
git branch -M main
git remote add origin https://github.com/USERNAME/premier-university.git
git push -u origin main
```

---

### Step 3 — Deploy with GitHub Pages/Netlify/Vercel

**Workflow**:

```text
Local Website
      ↓
     Git
      ↓
   GitHub
      ↓
┌─────┼────────┐
↓     ↓        ↓
Pages Netlify Vercel
```

---

#### GitHub Pages

GitHub Pages can publish a site from a repository, using a publishing branch/folder or a GitHub Actions workflow. ([GitHub Docs][github-pages])

##### Basic workflow

- Open Pages settings from your project repo.

  Go to:

  ```text
  Repository
      ↓
  Settings
      ↓
  Pages
  ```

  Under:

  ```text
  Build and deployment
  ```

  select:

  ```text
  Source → Deploy from a branch
  ```

  Then select:

  ```text
  Branch → main
  ```

  and the appropriate folder, usually:

  ```text
  / (root)
  ```

  ```text
  Save
  ```

- The resulting site can be accessed through a GitHub Pages URL. The URL is generally:

  ```text
  https://USERNAME.github.io/REPOSITORY-NAME
  ```

Publishing can take several minutes after a push. If any changes are made, GitHub Pages will rebuild or republish the updated site.

> GitHub Pages is **static hosting**. It can serve HTML, CSS, JavaScript and other static files, but it is not a general-purpose PHP/Node.js/Python server.

---

#### Netlify

Netlify provides Git-based continuous deployment: after connecting a repository, pushing changes can trigger a new build and deployment. ([Netlify Docs][netlify-from-repo]) ([Netlify Docs][netlify])

##### Basic workflow

- Create an account
  - Create/sign into a Netlify account.

- Add a project
  - From the Netlify dashboard:

    ```text
    Add new project
        ↓
    Import an existing project
    ```

    Then choose:

    ```text
    GitHub
    ```

- Authorize GitHub
  - Allow Netlify to access the required GitHub repository.
  - Then select:

    ```text
    premier-university
    ```

- Configure the project
  - Netlify will show build settings.
  - For a simple HTML/CSS/JS website, there may be no build command.

    Conceptually:

    ```text
    Build command:
    [leave empty if no build is required]

    Publish directory:
    project root / appropriate output directory
    ```

For frameworks such as React/Vite, the build command and output directory will be different. Netlify can automatically suggest build settings for recognized frameworks.

- Deploy
  - Click:

    ```text
    Publish / Deploy
    ```

  - Netlify builds and publishes the project.
  - You receive a URL similar to:

    ```text
    https://your-site-name.netlify.app
    ```

After connecting the repository, if any changes are made, Netlify detects the Git change and deploys the updated version.

Netlify also supports deploying by dragging a project folder into its deployment interface.

---

#### Vercel

Vercel also integrates directly with Git repositories and can automatically create deployments when commits or pull requests are pushed. ([Vercel][vercel])

##### Basic workflow

- Create/sign into Vercel
  - Go to the Vercel dashboard and sign in, preferably using GitHub.

- Create a project

  Select:

  ```text
  New Project
  ```

  Vercel will display repositories available from your connected Git provider.

  Select:

  ```text
  premier-university
  ```

- Configure
  - Vercel allows you to configure things such as:

    ```text
    Project Name
    Framework Preset
    Root Directory
    Build Settings
    Environment Variables
    ```

For a simple HTML/CSS/JS website, very little configuration may be necessary.

- Deploy
  - Click:

    ```text
    Deploy
    ```

  - Vercel creates a deployment and provides a URL. For example:

    ```text
    https://premier-university.vercel.app
    ```

Each deployment can receive its own deployment URL, which is useful for testing changes. ([Vercel][vercel-deployments])

If any changes are made, Vercel automatically creates a new deployment.

##### Vercel Preview Deployments

Suppose:

```text
main
```

is the production branch.

Create:

```bash
git checkout -b new-navbar
```

Modify the website:

```text
new-navbar
      ↓
git push
      ↓
Vercel Preview Deployment
      ↓
Test the website
      ↓
Pull Request
      ↓
Merge into main
      ↓
Production Deployment
```

Vercel documents automatic preview deployments for branch pushes and pull requests, with production deployments associated with the production branch. ([Vercel][vercel])

##### Vercel CLI

Vercel also provides CLI-based deployment.

Install the CLI:

```bash
npm install -g vercel
```

Then from the project directory:

```bash
vercel
```

For production deployment:

```bash
vercel --prod
```

Vercel's current documentation also supports:

```bash
vercel link
vercel deploy
vercel deploy --prod
```

for CLI-based workflows.

---

## GitHub Pages vs Netlify vs Vercel

| Feature                     | GitHub Pages         | Netlify            | Vercel             |
| --------------------------- | -------------------- | ------------------ | ------------------ |
| Static HTML/CSS/JS          | ✓                    | ✓                  | ✓                  |
| Git integration             | ✓                    | ✓                  | ✓                  |
| Automatic deployment        | ✓                    | ✓                  | ✓                  |
| Preview deployments         | Limited              | ✓                  | ✓                  |
| Custom domain               | ✓                    | ✓                  | ✓                  |
| HTTPS                       | ✓                    | ✓                  | ✓                  |
| Server-side applications    | Not general-purpose  | Platform-dependent | Platform-dependent |
| Serverless functions        | Not the main purpose | ✓                  | ✓                  |
| Framework-oriented workflow | Basic                | Strong             | Strong             |
| Beginner friendliness       | Very high            | High               | High               |

---

## Shared Hosting for Dynamic Websites

A PHP/Node.js/Python application cannot simply be uploaded to ordinary static hosting.

### Shared Hosting

In shared hosting:

```text
                 Hosting Server
        ┌────────────┼────────────┐
        ↓            ↓            ↓
    Website A    Website B    Website C
```

Multiple customers share the resources of one physical/virtual server.

### Typical components

```text
Domain
   ↓
DNS
   ↓
Shared Hosting
   ↓
Web Server
   ↓
PHP / Server Runtime
   ↓
Files / Database
```

A typical PHP deployment might look like:

```text
Local Computer
      ↓
Git / FTP / Hosting File Manager
      ↓
public_html/
      ↓
index.php
      ↓
Live Website
```

### Static vs Dynamic Hosting

```text
Static:
HTML → CSS → JS → Browser

Dynamic:
Browser → Web Server → PHP/Node/Python
                    ↓
                 Database
```

**Important:** A hosting provider's exact supported runtimes, database systems, deployment methods, and limits vary, so you should check the provider's documentation before deployment.

---

## How Does a Database Connect?

The database normally does not connect directly to frontend JavaScript. Instead, a backend/API sits between the frontend and database.

### Wrong architecture

```text
Browser
   ↓
JavaScript
   ↓
Database
```

You generally should **not expose database credentials to browser code**.

### Correct architecture

```text
                 Internet
                    │
                    ↓
                Frontend
              HTML/CSS/JS
                    │
                HTTP/HTTPS
                    │
                    ↓
              Backend/API
          Node.js / PHP / Python
                    │
              Database Driver
                    │
                    ↓
                Database
```

For example:

```text
Browser
   │
   │ GET /api/products
   ↓
Node.js API
   │
   │ SQL query
   ↓
MySQL/PostgreSQL
   │
   │ results
   ↓
Node.js API
   │
   │ JSON
   ↓
Browser
```

### Example: Frontend + API + Database

Suppose your website has:

```text
Products
```

The frontend requests:

```javascript
fetch("/api/products")
  .then((response) => response.json())
  .then((products) => {
    console.log(products);
  });
```

The backend receives:

```text
GET /api/products
```

Then it queries the database:

```text
SELECT * FROM products;
```

The database returns:

```json
[
  {
    "id": 1,
    "name": "Laptop",
    "price": 80000
  },
  {
    "id": 2,
    "name": "Mouse",
    "price": 2000
  }
]
```

The backend sends JSON back to the browser:

```text
Database
   ↓
Backend
   ↓
JSON
   ↓
Frontend
```

---

## Where Does the Database Live?

There are several possibilities.

### Option A — Traditional Shared Hosting

```text
                 Shared Hosting
               ┌───────────────┐
               │               │
Browser → PHP →│ MySQL         │
               │               │
               └───────────────┘
```

Typical setup:

```text
Domain
   ↓
Shared Hosting
   ├── PHP
   ├── Website files
   └── MySQL
```

### Option B — Separate Frontend, Backend and Database

Modern applications often separate these components:

```text
Frontend
GitHub Pages / Netlify / Vercel
          │
          │ HTTPS/API
          ↓
Backend API
Node.js / Python / PHP
          │
          ↓
Database Service
PostgreSQL / MySQL / etc.
```

For example:

```text
Vercel
  │
  │ HTTPS
  ↓
Backend/API
  │
  ↓
PostgreSQL
```

The frontend doesn't need to know the database password.

### Environment Variables

Suppose your backend needs:

```text
DATABASE_URL
```

Do **not** write:

```javascript
const DATABASE_URL = "postgres://username:password@server/database";
```

in code that will be exposed publicly.

Instead:

```text
DATABASE_URL
     ↓
Environment Variable
     ↓
Backend
     ↓
Database
```

Conceptually:

```javascript
const databaseURL = process.env.DATABASE_URL;
```

The exact syntax depends on the server-side technology.

Vercel, for example, provides project-level environment-variable configuration.

---

## Complete Modern Deployment Architecture

```text
                         USERS
                           │
                           ↓
                    ┌─────────────┐
                    │  FRONTEND   │
                    │ HTML/CSS/JS │
                    └──────┬──────┘
                           │
                      HTTPS / API
                           │
                           ↓
                    ┌─────────────┐
                    │   BACKEND   │
                    │ Node/PHP/   │
                    │ Python      │
                    └──────┬──────┘
                           │
                    DB connection
                           │
                           ↓
                    ┌─────────────┐
                    │  DATABASE   │
                    │ MySQL /     │
                    │ PostgreSQL  │
                    └─────────────┘
```

And the development/deployment side:

```text
      Developer
          │
          ↓
    Local Development
          │
          ↓
        Git
          │
          ↓
        GitHub
          │
   ┌───────────────┐
   ↓               ↓
Netlify          Vercel
   │               │
   └───────┬───────┘
           ↓
       Frontend
           │
           ↓
       Backend/API
           │
           ↓
        Database
```

---

## Deployment Workflow

### Typical Professional Workflow

```text
1. Develop
      ↓
2. Test locally
      ↓
3. Git commit
      ↓
4. Push to repository
      ↓
5. Build
      ↓
6. Deploy to staging/preview
      ↓
7. Test
      ↓
8. Deploy to production
      ↓
9. Monitor
      ↓
10. Fix → Commit → Deploy again
```

### Example

```bash
git add .
git commit -m "Fix responsive navigation"
git push origin main
```

Then the hosting platform may automatically:

```text
Detect Push
    ↓
Install dependencies
    ↓
Run Build
    ↓
Generate deployment
    ↓
Publish
```

This demonstrates how **Git → CI/CD → Deployment** are connected.

---

## Website Performance Optimization

A website should not only work—it should load efficiently.

### Major Performance Factors

#### Image Optimization

Instead of:

```html
<img src="huge-image.jpg" />
```

Use appropriately sized and compressed images.

Modern formats such as WebP or AVIF can often reduce image size.

```html
<img src="profile.webp" alt="Profile photograph" width="400" height="400" />
```

#### Lazy Loading

Images that are below the initial viewport can use:

```html
<img src="gallery.webp" loading="lazy" alt="Gallery image" />
```

This can reduce the amount of content loaded immediately.

#### Minification

Development:

```javascript
function calculateTotal(price, quantity) {
  return price * quantity;
}
```

A minified production file removes unnecessary whitespace and characters.

```text
development
    ↓
build/minify
    ↓
production files
```

You don't need to manually minify files; modern build tools can do it automatically.

#### Reduce HTTP Requests

Avoid unnecessarily loading:

```text
10 CSS files
15 JavaScript files
20 image files
```

Combine or optimize assets when appropriate.

#### Use Browser Caching

Caching allows browsers to reuse resources instead of downloading everything again.

```text
First visit
Browser → Server → CSS

Later visit
Browser → Cached CSS
```

#### Responsive Images

For different screen sizes:

```html
<img
  src="image-800.jpg"
  srcset="image-400.jpg 400w, image-800.jpg 800w, image-1200.jpg 1200w"
  sizes="(max-width: 600px) 100vw, 800px"
  alt="Example"
/>
```

The browser can select an appropriate resource.

---

### Measuring Performance

Use browser Developer Tools:

```text
Browser
  ↓
Developer Tools
  ↓
Lighthouse / Performance
  ↓
Analyze
```

Useful measurements include:

- Page load performance
- Network requests
- Resource sizes
- JavaScript execution
- Rendering
- Accessibility
- Best-practice checks

> Take a webpage containing five large images. Measure its performance, optimize the images, then measure again.

---

## HTTPS and SSL/TLS Certificates

### HTTP vs HTTPS

#### HTTP

```text
Browser ───────────────→ Server
            HTTP
```

#### HTTPS

```text
Browser ════════════════→ Server
          Encrypted TLS
```

HTTPS protects traffic against interception and tampering. GitHub specifically describes HTTPS as providing encryption against snooping and tampering. ([GitHub Docs][securing-github-pages])

### What is a TLS Certificate?

A TLS certificate helps establish the identity of a website and enables encrypted HTTPS communication.

Simplified process:

```text
User
 ↓
https://example.com
 ↓
Server provides certificate
 ↓
Browser validates certificate
 ↓
TLS connection established
 ↓
Encrypted communication
```

You may often hear the older term **SSL certificate**, but modern HTTPS uses **TLS**.

### HTTP vs HTTPS Example

HTTP:

```text
http://example.com
```

HTTPS:

```text
https://example.com
```

The browser normally displays a lock/security indicator when the HTTPS connection is properly established.

### Mixed Content

A common problem:

```html
<script src="http://example.com/script.js"></script>
```

on an HTTPS page.

Prefer:

```html
<script src="https://example.com/script.js"></script>
```

GitHub's documentation identifies this situation as **mixed content** and recommends serving assets over HTTPS. ([GitHub][securing-github-pages])

---

## Basic Web Security

### Core Security Principles

#### Never expose secrets

Bad:

```javascript
const API_KEY = "123456789SECRET";
```

Do not put:

```text
API keys
passwords
database credentials
private tokens
```

into publicly accessible frontend code or Git repositories.

#### Validate Input

Never blindly trust user input.

Example:

```javascript
const username = document.getElementById("username").value;

if (username.trim() === "") {
  alert("Username is required.");
}
```

Client-side validation improves user experience, but **server-side validation is still required** for applications with a backend.

#### Prevent XSS

Potentially dangerous:

```javascript
output.innerHTML = userInput;
```

Safer when plain text is intended:

```javascript
output.textContent = userInput;
```

Concept:

```text
User Input
    ↓
Validation / Encoding
    ↓
Application
    ↓
Output
```

#### Authentication Security

```text
Authentication = Who are you?
Authorization  = What are you allowed to do?
```

Example:

```text
Login
  ↓
Authentication
  ↓
User identity
  ↓
Authorization
  ↓
Access protected resource
```

Passwords should **never be stored as plaintext**.

#### Use HTTPS

Sensitive communication should use HTTPS.

```text
HTTP  → unencrypted transport
HTTPS → TLS-protected transport
```

#### Keep Dependencies Updated

A web application may depend on:

```text
Node packages
PHP packages
JavaScript libraries
CMS plugins
Themes
```

Outdated dependencies can contain vulnerabilities.

This is especially important for WordPress and WooCommerce projects.

### OWASP Top 10

The current OWASP Top 10 release is **2025**. ([OWASP Foundation][owasp])

The current categories are:

1. Broken Access Control
2. Security Misconfiguration
3. Software Supply Chain Failures
4. Cryptographic Failures
5. Injection
6. Insecure Design
7. Authentication Failures
8. Software or Data Integrity Failures
9. Security Logging and Alerting Failures
10. Mishandling of Exceptional Conditions

---

## Deployment Security Checklist

Before making a project public:

### Code

- [ ] Remove debugging code.
- [ ] Remove test accounts.
- [ ] Remove passwords/API keys.
- [ ] Remove unnecessary files.
- [ ] Check dependencies.

### Configuration

- [ ] Production configuration is correct.
- [ ] Environment variables are configured.
- [ ] Debug mode is disabled where appropriate.
- [ ] Error messages don't expose sensitive information.

### HTTPS

- [ ] HTTPS enabled.
- [ ] No mixed-content resources.
- [ ] HTTP redirects to HTTPS where appropriate.

### Application

- [ ] Forms validated.
- [ ] Authentication protected.
- [ ] Authorization checked.
- [ ] User input handled safely.
- [ ] Sensitive data protected.

### Performance

- [ ] Images optimized.
- [ ] Unnecessary JavaScript removed.
- [ ] CSS optimized.
- [ ] Browser caching considered.
- [ ] Performance tested.

[github-pages]: https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages "What is GitHub Pages? - GitHub Docs"
[netlify-from-repo]: https://docs.netlify.com/start/quickstarts/deploy-from-repository/ "Deploy from your repository | Netlify Docs"
[netlify]: https://docs.netlify.com/start/choose-your-path/ "Choose your path | Netlify Docs"
[vercel]: https://vercel.com/docs/git "Deploying Git Repositories with Vercel"
[vercel-deployments]: https://vercel.com/docs/deployments/overview "Deploying to Vercel"
[securing-github-pages]: https://docs.github.com/en/pages/getting-started-with-github-pages/securing-your-github-pages-site-with-https "Securing your GitHub Pages site with HTTPS - GitHub Docs"
[owasp]: https://owasp.github.io/www-project-top-ten/? "OWASP Top Ten Web Application Security Risks | OWASP Foundation"
