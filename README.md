Use npm run devStart to start the app


Install and use postman to update the database

To Delete
create a new request
Set the request method to DELETE.
Enter the URL endpoint of the book you want to delete, for example: http://localhost:3000/books/123456789 (where 123456789 is the ID of the book you want to delete).
Click the Send button to send the request to the server.
If the book was successfully deleted, you should see a status code of 204 No Content in the response. If the book was not found or there was an error deleting it, you will see a different status code and an error message in the response body.

To Update
create a new request
Set the request method to PUT
Enter the URL endpoint http://localhost:3000/books/123456789
In the Body tab, select the raw option and choose JSON as the format.
Enter the new details for the book you want to update in the request body. For example:

{
  "author": "New Author"
}
Click the Send button to submit the request.
If everything is set up correctly and the book with the specified id exists in the database, you should receive a response with status code 200 OK and the updated book object. If the book with the specified id does not exist, you will receive a response with status code 404 Not Found.

To Get
create a new request
Set the request method to GET.
Enter the URL of your application,  http://localhost:3000/books.
Click the Send button to submit the request.
If everything is set up correctly, you should receive a response with status code 200 OK and a list of all the books in the database.


To Add
create a new request
Set the request method to POST.
Enter the URL of your application http://localhost:3000/books.
In the Body tab, select the raw option and set the Content-Type to application/json.
Paste the following JSON data in the request body:

{
  "title": "The Hitchhiker's Guide to the Galaxy",
  "author": "Douglas Adams"
}

Click the Send button to submit the request.
If everything is set up correctly, you should receive a response with status code 201 Created and the book data that you posted.