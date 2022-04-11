//let allTrains
let pieArray = []

//colors identical to WMATA
let lineColors = {
	'RD': [191, 13, 62],
	'BL': [0, 156, 222],
	'OR': [237, 139, 0],
	'SV': [145, 157, 157],
	'GR': [0, 177, 64],
	'YL': [255, 209, 0],
	'No': "gray"
}

redLine = ['Shady Grove', 'Rockville', 'Twinbrook', 'White Flint', 'Grosvenor-Strathmore',
 'Medical Center', 'Bethesda', 'Friendship Heights', 'Tenleytown-AU', 'Van Ness-UDC',
  'Cleveland Park', 'Woodley Park', 'Dupont Circle', 'Farragut North', 'Metro Center',
  'Gallery Pl-Chinatown', 'Judiciary Square', 'Union Station', 'NoMa-Gallaudet U', 'Rhode Island Ave',
    'Brookland-CUA', 'Fort Totten', 'Takoma', 'Forest Glen', 'Wheaton', 'Glenmont']
blueLine = ['Franconia','Franconia-Springfield', 'Van Dorn Sreet', 'King St-Old Town',
	'Braddock Road','Ronald Reagan Washington National Airport', 'Crystal City', 'Pentagon City',
	'Pentagon', 'Arlington Cemetery', 'Rosslyn', 'Foggy Bottom-GWU', 'Farragut West',
	'McPherson Square', 'Metro Center', 'Federal Triangle', 'Smithsonian', "L'Enfant Plaza",
	'Federal Center SW', 'Capitol South', 'Eastern Market', 'Potomac Ave', 'Stadium-Armory',
'Benning Road', 'Capitol Heights', 'Addison Road-Seat Pleasant', 'Morgan Boulevard', 'Largo Town Center']
orangeLine = ['Vienna/Fairfax-GMU', 'Dunn Loring', 'West Falls Church', 'East Falls Church', 'Ballston-MU',
	'Virginia Sq-GMU', 'Clarendon', 'Court House', 'Rosslyn', 'Foggy Bottom-GWU', 'Farragut West',
	'McPherson Square', 'Metro Center', 'Federal Triangle', 'Smithsonian', 'Lenfant Plaza', 'Federal Center SW',
	'Capital South', 'Eastern Market', 'Potomac Ave', 'Stadium-Armory', 'Minnesota Ave', 'Deanwood', 'Cheverly',
	'Landover', 'New Carrollton']
greenLine = ['Greenbelt', 'College Park-U of Md', "Prince George's Plaza", 'West Hyattsville',
 'Fort Totten', 'Georgia Ave-Petworth', 'Columbia Heights', 'U Street/African-Amer Civil War Memorial/Cardozo',
  'Shaw-Howard U','Mt Vernon Sq 7th St-Convention Center', 'Gallery Pl-Chinatown',
  'Archives-Navy Memorial-Penn Quarter', "L'Enfant Plaza", 'Waterfront',
  'Navy Yard-Ballpark','Anacostia', 'Congress Heights', 'Southern Avenue',
  'Naylor Road', 'Suitland', 'Branch Ave']
yellowLine = ['Greenbelt', 'College Park-U of Md', "Prince George's Plaza", 'West Hyattsville','Fort Totten','Georgia Ave-Petworth', 'Columbia Heights', 'U Street/African-Amer Civil War Memorial/Cardozo', 
	'Shaw-Howard U', 'Mt Vernon Sq 7th St-Convention Center', 'Gallery Pl-Chinatown', 'Archives-Navy Memorial-Penn Quarter', "L'Enfant Plaza", 'Pentagon', 
	'Pentagon City', 'Crystal City', 'Ronald Reagan Washington National Airport', 'Braddock Road', 
	'King St-Old Town', 'Eisenhower Avenue', 'Huntington']
silverLine = ['Wiehle Rest','Wiehle-Reston East', 'Spring Hill', 'Greensboro', 'Tysons Corner', 'McLean',
	'East Falls Church', 'Ballston-MU', 'Virginia Sq-GMU', 'Clarendon', 'Court House', 'Rosslyn',
	'Foggy Bottom-GWU', 'Farragut West', 'McPherson Square', 'Metro Center', 'Federal Triangle',
	'Smithsonian', "L'Enfant Plaza", 'Federal Center SW', 'Capitol South', 'Eastern Market', 'Potomac Ave',
	'Stadium-Armory', ' Benning Road', 'Capitol Heights', 'Addison Road-Seat Pleasant', 'Morgan Boulevard', 'Largo Town Center']

let lineStops = {
	'RD': redLine,
	'BL': blueLine,
	'OR': orangeLine,
	'SV': silverLine,
	'GR': greenLine,
	'YL': yellowLine,
}