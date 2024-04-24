alert("Welcome User");


//do not have to declare variable types


//either use no semi colons or always do


let bool = true;


let test = 100;


if (test > 120) {


   alert("Welcome User");
}


document.querySelector('.backgroundChanger').addEventListener('click', function () { //like an anonymous inner class/ function

   const images = [
      'url("/Users/deandwiggins/Downloads/ForestBackground3.jpeg")',
      'url("/Users/deandwiggins/Downloads/pexels-johannes-plenio-1423600.jpeg")'
   ];

   // Ensure we extract only the URL part from the background style (if other properties are mixed in)
   const urlRegex = /url\(["']?(.+?)["']?\)/; // Regex to extract URL within url()
   const style = document.body.style.backgroundImage || document.body.style.background; // Handle both possible properties
   const match = style.match(urlRegex); // Extract URL from the style
   const currentImage = match ? match[1] : ''; // Get the URL or an empty string if no match

   // Find the index of the current image
   let index = images.indexOf(`url("${currentImage}")`); // Adjusted to match the format in the array

   // Increment the index to get the next image
   // If at the end of the array, go back to the first image
   index = (index + 1) % images.length;

   // Change the background image to the next one in the array
   document.body.style.backgroundImage = images[index];
});





//arrays, like an arraylist, akin to a stack
//can add multiple types, but generally not preferred




let todos = [];


todos.push("do your work ");
todos.push("wash dishes");


//you can use JS to access variables and change their contents
