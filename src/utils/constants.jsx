export const LOGO =
  // "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";
  "https://iconape.com/wp-content/files/jb/280585/svg/xfinity-streampix-seeklogo.com.svg";

export const API_READ_ACCESS_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYmQ4NTMwODY3ZGMyNjUwNThmYTQxYjYyZDkwOWQ0OCIsInN1YiI6IjY1ZmQ4NTJmMDQ3MzNmMDE3ZGVhY2JhZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HkxkikkeBzKSORVwr4eCxhSMmZXvMGi7OSjuo_hh7G4";

export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer " + import.meta.env.VITE_TMDB_KEY,
  },
};

export const FIREBASE_API_KEY = import.meta.env.VITE_FIREBASE_CONFIG_API_KEY;

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w400";
export const BANNER_IMG_CDN_URL = "https://image.tmdb.org/t/p/original";

//creating a constant for all languages supported
export const SUPPORTED_LANGUAGES = [
  { identifier: "english", name: "English" },
  { identifier: "hindi", name: "Hindi" },
  { identifier: "spanish", name: "Spanish" },
];

export const OPENAI_API_KEY = import.meta.env.VITE_OPENAI_KEY;
("");
