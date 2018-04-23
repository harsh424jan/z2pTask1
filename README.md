# z2pTask1
Express.js app based on Mongodb database.
A form is used to add and update the database.
The database can be seen by clicking on the playlist.
To run the app, first install the dependencies which can be easily done using npm
Install nodemon and then run 'npm run start'

Various functionalities in the app:
A form for changing and adding data on database.
From the radio buttons any of the 3 collection can be selected.
The form data is different for each type of collection.
In Each form, there is a datalist as suggestion for the names of the stored artist,album or track.
If the name is present in the datalist then, the record corresponding to it will be updated else a new record is created.
For the albums and tracks form, there is a dropdown list for the artists and albums respectively linked with there ids.
That's how only ids are stored in the database and not the complete names.

For testing purposes, first add some artists, then some albums and then tracks otherwise there will be no options in the dropdown list.

Functionalities remaining: 
In the playlist view, the album_id and artist_id are shown and not the corresponding name.
Some more form validations.
Due to some errors, the form validation output is not shown on the page. These are not so big errors and can be fixed eaily.

The code is completely modular in structure.

Technology used:
Node.js
Express.js
Javascript
Html
Css
Bootstrap
Jquery
Ajax
Mongodb
Mongoose
