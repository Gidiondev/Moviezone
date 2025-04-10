const API_KEY = process.env.API_KEY;

import React from 'react';

export default async function Page({ searchParams }) {
  const genre = searchParams.genre || "fetchTrending";

  const url = `https://api.themoviedb.org/3${
    genre === 'fetchTopRated' ? '/movie/top_rated' : '/trending/all/week'
  }?api_key=${API_KEY}&language=en-US&page=1`;

  const response = await fetch(url, { next: { revalidate: 3600 } }); // optional caching
  if (!response.ok) {
    throw new Error("Something went wrong while fetching movies");
  }

  const data = await response.json();
  const results = data.results;
   console.log(data.results);
  return (
    <div>
    
    </div>
  );
}
