# Calender-App

This is an application for bookings
# Getting Started with Create React App



## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:8080](http://localhost:8080) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.


### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!



| API  | Description | type  | Default Value |
| ------------- | ------------- | ------------- | ------------- |
| startDate  | you have to add a value for starting date from where the calendar will start in format of "YYYY MM DD"  | String  | "2022-03-01"  |
| endDate  | this is the date where the calender will end  | string  | "2022-03-25"  |
| disabledDates  | these are the date in the calendar that are either already booked or not available for booking  | array   |  ["2022-03-05", "2022-03-18","2022-03-21","2022-03-24","2022-03-27"]  |
| arrows  | arrows are attached with carousel to move it either forward or backwward  | boolean  | true  |
| pauseOnHover  | when the user hovers on the carousel it will not move forward or backward  | boolean  | true  |
| slidesToShow  | tells the carousel how many cards to show at a time  | number  | 3  |
| slidesToScroll  | how many card to skips to move forward or backward when the carouel scrolls  | number  | 1  |
| dots  | dots at the bottom of the carousal   | boolean  | false  |
| speed  | how quickly the carousel swipes  | number  | 300  |
| infinite  | either the carousel should start automaticaly after it reacher last card without freezing the arrows or it should stop at last card  | boolean  | false  |
