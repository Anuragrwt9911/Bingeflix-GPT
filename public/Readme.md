#netflix gpt

create-vite-app
congigured -tailwind css

#features :
First we have to build the Sign in/Sign out page bcoz if you try to directly go to browse page it neglects the request because you have not signed in.
-Sign/sign out page
-sign/sign out form
-redirected to Browse page after successfully signed in.

😑 when signin succesffully only then you can go to browse page.
-browse page
-header
-Main movie
-trailer in background
-title and description
-movie suggestions
-movies list \* n(horizontally scrollling in movies container)

Anohter page - special features(integrated chatgpt api for movies suggestions by entering what type of movies we want to see.)
-Search bar
-Movies suggestions

//so our body contains either Login page or Browse page because wehen succsesfuly login the page redirects to browse page.

//form handling --> using Formik
