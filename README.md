# 🎬 Movie Search App  

A simple Next.js application that allows users to search for movies using the OMDB API.  

## 🚀 Features  
- 🔍 Search for movies by title  
- 📜 Fetch movie results dynamically based on user input  
- 🖼️ Display movie posters, titles, and release years  
- 📱 Fully responsive design with Tailwind CSS  
-click on each movie card to see a pop-up of the movie image

## 🛠️ Tech Stack  
- **Next.js** (React Framework)  
- **Tailwind CSS** (Styling)  
- **OMDB API** (Movie data)  

## 📥 Installation & Setup  

1. **Clone the repository:**  
   ```bash
   git clone https://github.com/your-username/movie-search-app.git

#install dependencies
npm install
# or
yarn install

#run the serve
npm run dev
# or
yarn dev

#run on the server
npm run dev
# or
yarn dev


<!-- show in browser -->
Visit: http://localhost:3000

cd OMBD

#How It Works
Search Box (page.js):

#Users enter a movie title.
The query is passed to the URL (/search?query=movie-name).
Search Results ([id]/page.js):

Fetches movies based on the search query from OMDB API.
Displays movie posters, titles, and release years.



<!-- the global css contains the default css for things like h1 h2 h3.. and padding so anywhere we wnt to make use of h1 i wont need to be styling the font-size or weight same for padding which is attached t the container clss-->