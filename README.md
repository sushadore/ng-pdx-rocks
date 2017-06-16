# PDX Rocks!

An Epicodus Angular2 Code Review


## KNOWN BUGS
App does not list member details, update or delete members or filter members.

### Description
This app saves and displays members of a local rock climbing community. Member details such as email, phone number, climbing preference and bio are stored in Firebase as new members are added.

### Prerequisites
Proper installation of:
  * Git
  * Node.js
  * Bower
  * Angular

### Setup
  * Follow [these instructions](https://www.learnhowtoprogram.com/javascript/angular-extended/firebase-introduction-and-setup) ignoring the __Typescript Configurations__ , __Important Note on Hiding Firebase Credentials__, and __Initializing Firebase__  sections to add Firebase to the app.

  * In desired folder run `git clone https://github.com/sushadore/ng-pdx-rocks.git`
  * `cd ng-pdx-rocks`
  * `npm install`
  * `bower init` accept the preset options
  * `bower install bootstrap --save`
  * Instructions for seeding Firebase
    * Select recently created project.
    * Choose _Database_ in the left-hand navigation menu.
    * Choose the 3 vertical dots on the right hand side of the grey database nav bar.
    * Choose _Import JSON_ from this menu.
    * Upload the sample-members.json associated with PDX Rocks project.
  * `ng serve`
  * Navigate to `http://localhost:4200/`

### Stretch Goals
  * Return to landing page after adding a new member
  * Add other activity categories including: Dancing, Skiing, Motorcycling
  * Add external links

### Author
Susha Dore
### Legal
MIT License
