# ShowCase

An application to make life easier for the sales department. One of the most annoying moments at work was the return from trade fairs. After 3-4 days spent at the fair, it turned out that we have 300 business cards, which always get lost somewhere. ShowCase is supposed to keep all business cards in one place.

## Info

The application is based on framework react and JSON server. This is my finnal project application on Coderslab course on Front-End Developer: React.

## Set up.

In order to use the application fully, it is necessary to run the terminal on the local JSON server and fetch. We could download a database of basic users and their contacts (business cards).

```bash
json-server -p 4000 data.json
```

The application allows old users to log in, and create new accounts.

Each user is assigned a unique ID, after logging in to the main panel, the contacts that were entered to the person are assigned by userId on column array of object. Each new contact that will be entered by a user will receive a key in the userID object. Thanks to this, each contact is selected by this value and displayed on the board of the appropriate person.
It is also possible to edit your profile or edit/delete your contacts.

## End.

Enjoy and feel free to use my beta version as well. If you see the possibilities of coda refactoring, I am open to suggestions, ideas and solutions.
