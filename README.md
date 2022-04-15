# Real Time Bus Tracker
<img src="./images/publicTransportation.png" height="250px" width="400px"/>

## Description 
This shows the location of public vehicles in transit that are associated with the Massachusetts Bay Transportation Authority (MBTA).
Originally, this showed the progrewssion of stops from MIT to Harvard. Now it will show all vehicles in transit throught the Bay area with information about each vehicle.

## Purpose 
This was done as an assignment in the MIT course - Full Stack Development with Mern

---------

## Technologies Used 
- HTML
- CSS
- Javascript

---------

## Installation 
- Clone this repository to your local machine

## How to Run 
- Browse to the directory where you cloned this repository
- Open the .html file in a browser (Chrome, Edge, Safari, Firefox)
- When the browser is loaded, all current vehicles associated with the MBA that are in transit will be displayed
- Initially, to show all vehicles, the map is zoomed out. To zoom, one can either use their scroll mouse, double click on the map, but not a marker, or if using a touch enabed device, use their fingers.
- The live data of the vehicles is updated every 15 seconds, but not populated to the map. This was left as a manual process. To refresh the location of the vehicles on the map, simply click on the button that states "Update location of public vehicles currently in transit".
- If you would like to gather more information on a particular vehicle, simply click on it's marker. It will provide you with the vehicle number, it's status, where it is in it's list of stops, it's availalbe occupancy, and the last time the data was updated.

## Generate a Mapbox API key
1. Create a [Mapbox account](https://account.mapbox.com/auth/signup/?route-to=%22/%22)
2. Go to [account page](https://account.mapbox.com/) and log in
3. Scroll down till you see **Access tokens**
4. Copy the **Default public token**
5. Replace the **YOUR TOKEN HERE** in the section of code mapboxgl.accessToken = 'YOUR TOKEN HERE'; in the mapanimation.js file

---------

## Improvements Made
- 2022-02-03: Use different color marker for vehicles based on their occupancy: RED: No Occupancy / ORANGE: Close to Full / YELLOW: Few Seats / GREEN: Many Seats
- 2022-02-03: Changed Map view to Street View for more detail
- 2022-02-05: Added Legend for Marker Colors
- 2022-02-05: Added Purple Color Marker for Unknown / Unprovided Occupancy Status
- 2022-02-05: Removed Occupancy Status from Popup as no longer needed
- 2022-02-05: Added opacity

## Roadmap of Future Improvements
- Add the ability to enable/disable refresh as well as setting the interval
- Add the ability to filter out vehicles by their vehicle numbers

---------

## Files 
- **/images/publicTransportation.png** - Used in the Readme file 
- **index.html** - Start-up file to be opened by browser
- **styles.css** - Stylesheet file that positions objects, controls text, colors, and layout
- **mapanimation.js** - Javascript file manipulating what is occuring in the browser 

---------

## Contributing 
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
[The MIT License (MIT)](https://github.com/slumpbuster/Real-Time-Bus-Tracker-Exercise/blob/main/LICENSE)
