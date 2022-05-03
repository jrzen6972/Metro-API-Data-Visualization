let pieArray = []; //create empty array for chartClass objs

let mobile = false //status if in mobile mode
//station routes in order by line
redLine = ['Shady Grove', 'Rockville', 'Twinbrook', 'White Flint', 'Grosvenor-Strathmore',
'Medical Center', 'Bethesda', 'Friendship Heights', 'Tenleytown-AU', 'Van Ness-UDC',
'Cleveland Park', 'Woodley Park-Zoo/Adams Morgan', 'Dupont Circle', 'Farragut North', 'Metro Center',
'Gallery Pl-Chinatown', 'Judiciary Square', 'Union Station', 'NoMa-Gallaudet U', 'Rhode Island Ave-Brentwood',
'Brookland-CUA', 'Fort Totten', 'Takoma', 'Forest Glen', 'Wheaton', 'Glenmont'
]
blueLine = ['Franconia', 'Franconia-Springfield', 'Van Dorn Sreet', 'King St-Old Town',
'Braddock Road', 'Ronald Reagan Washington National Airport', 'Crystal City', 'Pentagon City',
'Pentagon', 'Arlington Cemetery', 'Rosslyn', 'Foggy Bottom-GWU', 'Farragut West',
'McPherson Square', 'Metro Center', 'Federal Triangle', 'Smithsonian', "L'Enfant Plaza",
'Federal Center SW', 'Capitol South', 'Eastern Market', 'Potomac Ave', 'Stadium-Armory',
'Benning Road', 'Capitol Heights', 'Addison Road-Seat Pleasant', 'Morgan Boulevard', 'Largo Town Center'
]
orangeLine = ['Vienna/Fairfax-GMU', 'Dunn Loring', 'West Falls Church', 'East Falls Church', 'Ballston-MU',
'Virginia Sq-GMU', 'Clarendon', 'Court House', 'Rosslyn', 'Foggy Bottom-GWU', 'Farragut West',
'McPherson Square', 'Metro Center', 'Federal Triangle', 'Smithsonian', "L'Enfant Plaza", 'Federal Center SW',
'Capital South', 'Eastern Market', 'Potomac Ave', 'Stadium-Armory', 'Minnesota Ave', 'Deanwood', 'Cheverly',
'Landover', 'New Carrollton'
]
greenLine = ['Greenbelt', 'College Park-U of Md', "Prince George's Plaza", 'West Hyattsville',
'Fort Totten', 'Georgia Ave-Petworth', 'Columbia Heights', 'U Street/African-Amer Civil War Memorial/Cardozo',
'Shaw-Howard U', 'Mt Vernon Sq 7th St-Convention Center', 'Gallery Pl-Chinatown',
'Archives-Navy Memorial-Penn Quarter', "L'Enfant Plaza", 'Waterfront',
'Navy Yard-Ballpark', 'Anacostia', 'Congress Heights', 'Southern Avenue',
'Naylor Road', 'Suitland', 'Branch Ave'
]
yellowLine = ['Greenbelt', 'College Park-U of Md', "Prince George's Plaza", 'West Hyattsville', 'Fort Totten', 'Georgia Ave-Petworth', 'Columbia Heights', 'U Street/African-Amer Civil War Memorial/Cardozo',
'Shaw-Howard U', 'Mt Vernon Sq 7th St-Convention Center', 'Gallery Pl-Chinatown', 'Archives-Navy Memorial-Penn Quarter', "L'Enfant Plaza", 'Pentagon',
'Pentagon City', 'Crystal City', 'Ronald Reagan Washington National Airport', 'Braddock Road',
'King St-Old Town', 'Eisenhower Avenue', 'Huntington'
]
silverLine = ['Wiehle Rest', 'Wiehle-Reston East', 'Spring Hill', 'Greensboro', 'Tysons Corner', 'McLean',
'East Falls Church', 'Ballston-MU', 'Virginia Sq-GMU', 'Clarendon', 'Court House', 'Rosslyn',
'Foggy Bottom-GWU', 'Farragut West', 'McPherson Square', 'Metro Center', 'Federal Triangle',
'Smithsonian', "L'Enfant Plaza", 'Federal Center SW', 'Capitol South', 'Eastern Market', 'Potomac Ave',
'Stadium-Armory', 'Benning Road', 'Capitol Heights', 'Addison Road-Seat Pleasant', 'Morgan Boulevard', 'Largo Town Center'
]

//WMATA line color & stations by line dictionary
let lineInfo = {
	'RD': [[191, 13, 62],redLine],
	'BL': [[0, 156, 222],blueLine],
	'OR': [[237, 139, 0],orangeLine],
	'SV': [[145, 157, 157],silverLine],
	'GR': [[0, 177, 64],greenLine],
	'YL': [[255, 209, 0],yellowLine],
	'No': "gray",
	'--': "gray"
}

let monthDict = {
	"January": 1, 
	"February": 2,
	"March": 3, 
	"April": 4, 
	"May": 5, 
	"June": 6,
	"July": 7,
	"August": 8,
	"September": 9,
	"October": 10,
	"November": 11,
	"December": 12
}

let hexArr1 = [
	"#003f5c","#58508d","#bc5090","#ff6361","#ffa600"
]

let hexArr2 = ["#ea5545", "#f46a9b", "#ef9b20", "#edbf33", "#ede15b", "#bdcf32", "#87bc45", "#27aeef", "#b33dc6"]
// let hexArr3 = ["#020bb3","#7400b3","#ab00b1","#d800ac","#ff00a6"]
let hexArr3 = ["#7462b3","#945cbc","#b84fbd","#dd3ab6","#ff00a6"]
hexArr3=hexArr3.reverse()