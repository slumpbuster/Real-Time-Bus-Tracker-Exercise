# Real Time Bus Tracker
# <img src="publicTransportation.jpg" height="150px" width="300px"/>

## Description 
This shows the location of public vehicles in transit that are associated with the Massachusetts Bay Transportation Authority (MBTA).
Originally, this showed the progrewssion of stops from MIT to Harvard. Now it will show all vehicles in transit throught the Bay area with information about each vehicle.

---------

## How to Run 
- When the browser is loaded, all current vehicles associated with the MBA that are in transit will be displayed
- Initially, to show all vehicles, the map is zoomed out. To zoom, one can either use their scroll mouse, double click on the map, but not a marker, or if using a touch enabed device, use their fingers.
- The live data of the vehicles is updated every 15 seconds, but not populated to the map. This was left as a manual process. To refresh the location of the vehicles on the map, simply click on the button that states "Update location of public vehicles currently in transit".
- If you would like to gather more information on a particular vehicle, simply click on it's marker. It will provide you with the vehicle number, it's status, where it is in it's list of stops, it's availalbe occupancy, and the last time the data was updated.

---------

## Roadmap of future improvements
- Add the ability to enable/disable refresh as well as setting the interval
- Add the ability to filter out vehicles by their vehicle numbers
- Use different marker for vehicles based on their occupancy: Red = Full / Yellow = Few Seats Avaiable / Green = Many Seats Available
---------

## Files 
- **/publicTransportation.jpg** - Used in the Readme file 
- **/index.html** - Start-up file to be opened by browse 
- **/styles.css** - Stylesheet file that positions objects, controls text, colors, and layout
- **/mapanimation.js** - Javascript file manipulating what is occuring in the browser 

---------

## Purpose 

This was done as an assignment in the MIT course - Full Stack Development with Mern

---------

The MIT License (MIT)
=====================

Copyright © 2022 slumpbuster

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the “Software”), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.


<a href='https://www.freepik.com/vectors/people'>People vector created by pch.vector - www.freepik.com</a>
