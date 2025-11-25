# Task 1: Image Gallery with SimpleLightbox

An interactive image gallery created using data from a JavaScript array and rendered dynamically in the DOM.
All modal functionality (open/close, keyboard navigation, captions) is provided by the SimpleLightbox library.

Features
- Dynamic creation of gallery markup based on the images array.
- Completely handled modal behavior using SimpleLightbox.
- Lightbox captions displayed at the bottom with a 250ms delay.
- Fully responsive layout according to the project mockup.
- Correct updating and functioning of SimpleLightbox after new images are added.
- Clean and optimized DOM manipulation (markup inserted in one operation).
- Library installed and imported via npm (no CDN links).

# Task 2: Feedback Form with Local Storage

A feedback form that saves its state to localStorage as the user types.
Upon page reload, the form automatically restores the previously entered data.

Features
- Form state stored in a single formData object.
- Input handling through event delegation on the entire form.
- Real-time saving of form state to localStorage.
- Automatic repopulation of inputs after page reload.
- Validation on submit: if any field is empty, user gets a warning.
- On successful submit: current form data logged to the console,
form and storage fully cleared.
