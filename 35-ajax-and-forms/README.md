## AJAX and Forms

Today, we'll learn how to work with AJAX forms and the different strategies we can employ. 

## Agenda
After this lesson, you should have an understanding of:

  * Binding event handlers to a form
  * Serializing form data for an AJAX request
  * Sending AJAX requests with request methods other than GET
  * Responding to form posts via AJAX

## Revisiting the robots app 

* The app already shows us how to manage a JSON response, use the JSON data to construct HTML elements via JS, and place these newly created elements somewhere on the page 
* For this lesson, we've added the ability to view a list of Robots, an individual robots's details, create a new robot, update and delete a robot synchronously

## The Plan 
* Explore some of the robot app CRUD using Ajax
  * We'll try with HTML responses
  * We'll try with JSON responses

## AJAXifying the front-end with JavaScript 
* Waiting for the `DOMContentLoaded` event
* intercepting the event
* `axios` - url, method, responseType, data
* `.then()`and `.catch()`
* Test it at every stage!
* What do our responses look like? 

## The response 
* How does our front-end change when we change the response from HTML to JSON?

## Wrap-up 
