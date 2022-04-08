# Metro API Data Visualization

**Before final submission, remove italicized instructions!**

*Tell me what you've gotten done so far, what obstacles you have encountered, and whether/how your plans have changed as you have gotten to work. The writing style can be informal.*

The Metro API Data Visualization project aims to deliver a new take on what a metro app can be. Designing this app as a potential option for commuters, riders should be able to know what the status of their train is at a moment's glance. Currently, an arc's length is the singular channel that depicts the train's predicted time from the station (in minutes). Once the arc completes into a full circle, there is an inner circle which further indicates the train is either Arriving (yellow) or Boarding (green). Being able to use p5.js and OpenProcessing for this project, a mobile interface is something we want to consider with each new addition to the visualization.

Our visualization follow's WMATA design philosophy, referencing their Brand and Style Guidelines https://www.wmata.com/business/procurement/solicitations/documents/Metro_Brand_and_Style_Guidelines.pdf. These guidelines outline the exact color values used in their color palette, and the exact fonts used in their corportate typeface. Both these colors and text fonts are used in our visualization to keep it consistent with other WMATA services. 

A functionality we are weary of implementing is the visualization immediately updating when the user selects a new station. When not abused, the feature works as intended. However, if someone was to navigate the selection box very fast, using the up and down arrow, an error related to loading the JSON file appears. When run from a local server (through vscode), this issue does not appear.

One issue that was overcome was a means of selecting different stations. To populate the selection box, a seperate API request from the rail stations link, in tandem with a dictionary that stored each name with its associated location code (ex. Metro Center - A01). To keep the visualization limited to one station at a time, the train prediction API is only using one location code at a time. There is an issue with the API not having a seperate name for different platforms (ex. Metro Center's upper and lower floors). A bandaid fix was to simply add the index of the for loop to the option name to keep them seperate.

P5.js's hour() function displays the current hour from 0 to 24. As this is not the American standard, a condition had to be implemented to keep the clock display in a 12-hour format.

An issue that is popping up again is trains without a line color. For example, WMATA sometimes will run no passenger trains to test them on the circuits before letting passengers on. A condition is made for this, recognizing the "No" and filling it grey. This issue is reappearing in a similar fashion as there are now trains with "null" crashing the sketch. The resolution will be similar, but we don't know what a null train indicates if "No passenger" already exists.

### Readme format: 
*Provide a status update in the readme.md of your project repo (or notebook) that is no more than 250-500 words and includes the following items. This update should be uploaded to your final project repo (do not submit anything to Canvas):*

1. **Images of Prototype** 

Basic Interface

![Basic Interface](https://i.imgur.com/ROLmIH0.png)

Drop-down menu

![Drop-down menu](https://i.imgur.com/FKDDKpz.png)

Interactivity of interface †

![Interactivity of interface](https://i.imgur.com/Fy9WOkT.gif)

Mobile Compatability ‡

![Mobile](https://i.imgur.com/CA98VTb.png)

2.  **Modifications to proposed implementation approach**: *Any modifications to your proposed implementation approach. What libraries have you been using? Has your implementation approach changed significantly? If so, why?*

The sole library we are using is p5.js. Being a heavily graphical library, p5.js offers a means to not only create different shapes, but html elements too. With the potential to post the sketch to the OpenProcessing site, mobile users will be able to use our app/visualization as well (ideal for commuters) https://openprocessing.org/sketch/1524522. P5.js has let us have a much easier time creating this visualization.

3. **Features and schedule**: *How is your project tracking against what you proposed? Are you on schedule? If not, what's blocking you from making progress?*

This project has taken on a much different style since our brainstorming, but lends to a much better visualization. With the data the API provides, a static visualization would not be as useful. Creating a dynamic visualization that does not follow a traditional map, allows for more attention to be given to the data channels.

Currently, we are wortking on:

- Seperating/ordering trains by group
- Fitting in the true time of the trains' predicted times as an integer somewhere within the visual
- Adding more interativity functions, such as showing route destinations and outages, to name a few. 

We aim to complete these items in time by the video demo on Friday, April 15. As of the writing of this readme, we have no issues with reaching the deadline. 


† *There is an issue with Microsoft Game Bar screen recording, where drop-down menus are made invisible in the final recording.*

‡ *Colors based on the WMATA Line color.*
