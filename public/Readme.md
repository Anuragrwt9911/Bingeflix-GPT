#netflix gpt

create-vite-app
congigured -tailwind css
routing configuration
login form
signup form
form validation
useRef
firebase setup
firebase configuration
deploy our app to production using firebase
create signup user accout using firebase Authentication
implement sign in user auth
created redux store

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

//two ways to get email and password \_> first is using useState and second is useRef hook for reference of all input boxes.

//how to deployed app to firebase

1. install firebase tools -> npm i -g firebase-tools
2. firebase login
3. firebase init
4. then select hosting("configure files for firebase hosting and optinally set up github action deploys )
   chose a project
   build file --> all our react files bundled in build folder
5. delopy app - firebase deploy

create a sign up user --> i will use firebase api to create user on sign up and then use another firease api for sign in that user .
so in firebase api of creating usre and login -> getauth() function is present in every authentication api so instead of calling get auth every time when implementing firebase api
we call getauth() in a centralized place so that we don't need to call it every time.

so for navigating the sign in or sign up user to the browse page;
so once the user sign in or sign up i will add the user to the redux store and after navigate the user to the browse page.

so for manging state we created redux store, but for dispatching an action we have to provide dispatch in signup and signin , so basically we dispatch an action whenever the signin and signup user state changes. but we have to write dispatch for both sign/signup . so that's why firebase give us a api called onAuthStateChanged which is called whenever the user state changesin sign in and signup form.

but we have to use onAuthStateChanged only once after login or signup , which is achieved by useeffect hook

signout button is only shown when we sign in the app. for that we can use conditional operators

we can also use getauthUpdateProfile to update the profile like it's name and profile photo by just using the firebase api so that when the user signups it will be redireted to browse page with the name he entered and the profile pic which is in our database.
