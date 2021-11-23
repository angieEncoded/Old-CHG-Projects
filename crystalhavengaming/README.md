# Administrator's Handbook


## Jobs Module

- This module is required for the advanced jobs listing in the Event scheduler
    - Administrators of the system will add new jobs into the database as Square Enix adds them. 
        - Ex. Square Enix adds Gunbreaker and Dancer in the new expansion, so the administrator adds those jobs to the database so we can now allow them in scheduling
    - The Event scheduler will read the database for the current existing possible jobs in Final Fantasy and then add them as selectable.

## Duties Module

- This is required for the event scheduler module
    - Crystal Haven leadership will decide which duties are popular at any given time and will add them to the system
        - Leadership can also add some 'generic' duties to classify things like Doggo farms, etc. under
    - Event leaders will select the Duty and then Schedule their event for that duty. 
        - The reason I designed it this way was to lower the number of 'free text' sections that would add confusion.

## Events module

- This is dependant on the Duties and Jobs modules
    - The Event leader will select the duty to schedule an event against
    - The Leader will fill in the relevant details and select either the default set of roles for that duty, or the more granular control over specific jobs
    - Once the event is scheduled, the bot will do 'things' that we still have to discuss

## Modules that are not important at this time

- Jobs Module
    - This is something we'll use once an xpac at most. I don't envision this seeing much traffic and worst case is I add to the database manually. 
- Merlwyb's stuff
    - Again, this is something we'll use so seldom that I might as well not even have built her a module. Probably wasted more time than was necessary. But I love her!


## What we need to work on at the moment

- The general 'look and feel' of the site and exactly how to present the landing page. 
    - What do we want to see there? 
    - Do we want some kind of 'Crystal Haven News' thing? 
    - Streamer details - I didn't think about it until just now but probably need a module to add the Streamer details as people come and go
        - I'll wait and see how Lumber and Leo want to handle that before going ham on another module. If we have 5 streamers total and only change details once a year... It's not worth it.
- The Duties module
    - Adding and adjusting duties needs to work, and if we want to store any additional information\fields. 
- The Events module
    - Of course, the bread and butter here is Event Scheduling. 
    - Making sure it works
    - Making sure that Event Leaders think that the module stores enough relevant data about their events to communicate what they need to players
    - And then we need to start working on Merlwyb's integration and how everyone expects sign ups to work. 

## Letter from the developer


This project has been a labor of love for me over the past month. I know that it took a really long time for me to get back to 'normal' after the bad stuff, but having this Discord group with all you amazing folks has really made the difference. 

This place was founded to be a refuge, a 'safe haven' away from drama and toxicity and we've accomplished that goal. The group has grown larger than I ever expected it would, and now it's time for me to give back.

I can't wait for us to take this project live and start seeing Merlwyb slumming around the Discord again. It's been far too long. 

Thank you, everyone. 

~ Last Hero, also known as 'Josie'