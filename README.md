# Student Grade Management System — Arrays in Action

A responsive educational website demonstrating a real-world use of arrays. Users can add and remove student records, view scores, and calculate class statistics.

## Files
- `index.html` — website structure and educational content
- `style.css` — responsive styling
- `script.js` — array-based application logic

## Array concepts demonstrated
- Parallel arrays store student names and scores.
- Array indexes associate each name with its score.
- `push()` adds a student record.
- `splice()` removes a record.
- Loops process scores to calculate the average, highest score, and lowest score.

## Run locally
Open `index.html` in a modern browser. No installation or build step is required.

## Deploy with GitHub Pages
1. Create a GitHub repository.
2. Upload `index.html`, `style.css`, `script.js`, and `README.md` to the repository root.
3. Open the repository's **Settings** → **Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Choose the `main` branch and `/ (root)` folder, then save.
6. Wait for GitHub Pages to publish the site. Open the URL shown in the Pages section and test the app.

## Deploy with Vercel
1. Push these files to a GitHub repository.
2. Sign in to Vercel and choose **Add New → Project**.
3. Import the repository.
4. For this static HTML project, no build command is needed; use the project root as the output directory if prompted.
5. Deploy and test the live URL.

## Important
This demo stores data in JavaScript arrays while the page is open. It does not send student data to a server or permanently save changes.
