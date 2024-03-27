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
implement signout
update profile and name when user sign ups
bugfix : sign up user displayname and prfiole picture not updated
bugfix : if the usre is not logged in Redirect /browse page and vice versa
unsubscribe our onauthSateChanged for
add hardcoded values to the constant file
register tmdb api a create an app & get accesss token and api key
Get data from the tmdb now playing movies list api
created custom hook for movies fetching logic
updating store wit

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

bug 1 -> we can directly access the browse page by /browse in the url , without logging in.
resolve --> if user tries to directly access the browse page without logging in we should directly redirect tat user to login page.
so for that we can use navigate but we can't navigate our user in body component bcoz it is the parent component instead we use the onAuthStateChanged logic in that child component which is always present in body component like header. which is always present whether goes to browse page or another page header always available. so we will paste our authChanged logic there and navigate from there.

onAuthStatechaned is like a event listserners which runs everytime the authenctication state is changed(login/signup/signout) but it is inside a useeffect which has an empty dependancy array means this will run only one time. but useEffec runs once and the onauthstatechanged runs everytime when user Login/logoutsigups state changed so for cleaning that i wil have to unscubscribe to onauthStateChanged . so we return a a cleanup function for our eventlistener

api is calling two times because in react strict mode it cals everything two times. if you remove it it will just call api once.

putting our movie data into redux store.so we can access it when the authentication changed we dispatch an action which to show movie data in browse page.
now after creating movieslice we have to add movie data so we pass json.results to movieslice.

extracting the fetching moviedata logic by a custom hook;

//building browse page : plan :
1.main movie section
-video background
-video title

2. secondary container
   -movies list in grid container
   -movies card

so our movie data is stored in our store . so we have to fetch the main container data from the store.

we use early return to access one movie because when we loads the page there is sometime during the api call . so we are accessing that one movie in that time but in that time the api is not present. so what we do that we ue early return to say that if(movies === null) reutrn; means if movies is not there don't go for finding the movie which we hhave to display in the main container.

so for finding the vidoe trailer we have to go to imdb videos section and choose any video it gives the movie vidoes ,sons, trailer, teaser but we only need trailer but in this api the trailer is in the youtube . so we fetch the trialer from the youtube and show.

so basically the vidoeBackground component takes a movide id

//dynamically fetching trailer vidoes of each movies for that we can use a iframe tag and passing a dynamic key /how to pass a dynamic key? so for htat we can also create state variales and also create a slice in redux store --> create a slice -> dispatch an action("pass the trailerVideo") -> subscribing to our slice in the redux store -> using useSelector then passing this dynamic key to the url of the youtube video.

putting the trailer into store for dynamic change of videos background of each video

//extracting the logic of fetching api data for trailer vidoes api.

//so we are fetching movie hardcoded url for make it dynamic we need a movieid -> if we dont' do this it will only show only the trailer of that vidoe which we are fetching from the movie vidoes api.
for this we have destrcture movie id --> and then we pass this movie id to our custom hook and we use this movie id in the url to fetch movies trailer dynamically.

so for getting all imges of all the movies --> we need a cdn url of the movie because all movies only have the query string . we need the constant url of all movies. so for htat we find it on goggle.

you can fetch another movies data = trending, toprated, upcomgin etc
by making a slice in the store and passing an action to store the api data in redux store.

first make a custom hook with a changed name component and set the api according to trending, popular, upcoing etc. and dispatch an action which is specific to that movie niche.eg addTrendingMovies to store data.
instead of making new slice for all kinds of movie api data (trending, popular etc) -> we can only make reducer which dispatch an action of addingTrendingMovies and exporting that action.
aFter that add your custom hook logic inside browse page.
and after thatgo to secondary component where we mapped all our moviesList container and provide that action which you have made in your movieSlice. and then the movies appear.

//Additional feature - gpt integration in netflix
//Bonus feature --> creating language constants for convertng out whole page text from english to hindi.
we can achieve this by creating a constant file and put all those languages we want in our page. and then put wherever we want after then we make a toggle functionality to toggle our desired langugage to the specified area where we have put the lang constant.
//for togglling to another language we have to create a new slice because we have to change the language when the option is changed.

//showing language button only when in gpt page not in home page.
//registering gpt api
//prevent default in gpt form

we can't call open api on client side so the browser returns with a warning that we should not make this api call becuse it woud leak our api key for secruity purposes bcoz all this work is done by backend like nodejs but if we want to do it in client side we can use a keypair of dangerouslyAllowed : true, which lets u do openapi call on client side.

//on click of search button we have to fetch the input store in input box then we call the openai api and get some results but before getting results we have to prompt it throughly , for thta we can use a variable and pass a query like "acts as a movie assitant""result examples of movies i want : "andaz-apna apan " "hera Pheri" ....

//securing api keys

step 1. creating .env file:
keeping api keys in .env file
REACT*APP*(YOUR API KEY)

step 2. IN constants file -> process.env.

step 3 : add .env file to gitignore file

my ui layer doesn't have gpt fetature it is stored in data layer.
tailwind breakpoints :
md: desktop
sm : mobiles
