One of the first steps in becoming proficient in React is to learn how to break an app down into *components*.  Each component encapsulates a piece of the functionality of the whole, with its own markup and behavior.

To practice making components, we've provided all the markup and styling for a static webpage.  Your job is to look at the page, think about how you would break it up into individual pieces, and then create a React component for each piece, moving the markup and styling rules into the appropriate places.  Your final product should look the same as the original static site.

## Instructions

* fork and clone this repo and navigate into the `dwarf-underground` directory
* view the static website by typing `open static.html`
* ponder how it could be broken up into components
* create React components based upon your ponderings
* run your React version by typing `yarn start` and navigating to `localhost:3000`
* check to make sure that your React version looks the same as the original

### Basic Requirements

* Split the page into at least 6 total components

### Bonus Credit

* Split the page into at least 10 total components, including components *in* components

### Super Bonus Credit

* Render the four article links at the bottom of the screen using `map` and passing in the props they need

### Super Mega Bonus Credit

* Make a component that contains a text field for leaving a comment
* Have the text field appear only when the 'comments' link at the bottom of the article is clicked

### Super Mega Bonus Credit Hyper Fighting

* Actually display comments that are entered and submitted