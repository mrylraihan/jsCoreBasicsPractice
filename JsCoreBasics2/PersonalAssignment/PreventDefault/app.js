// The Event interface's preventDefault() method tells the user agent //that if the event does not get explicitly handled, its default
//action should not be taken as it normally would be.
// preventDefault stops the default behavior of what your trying to do

const googleLink = document.querySelectorAll('.google')
const form = document.querySelectorAll('.forms')
const chb = document.getElementById('chb')

//you would think this works because we are targeting the element
// and preventing the Default on that Element, this is wrong though
// function stopLink() {
//     googleLink.preventDefault();
// }

// you need to target the event

function stopDefaultActions(event) {
    //if the box ix checked 
    if (!chb.checked) {
        event.preventDefault();
        console.log(event);
    }
}
// this is adding the prevent default function on the google a tag
googleLink[0].addEventListener('click', stopDefaultActions)

// lets add it to this form too
//we can literally add the same function to a different element
form[0].addEventListener('click', stopDefaultActions)