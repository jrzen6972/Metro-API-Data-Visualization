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