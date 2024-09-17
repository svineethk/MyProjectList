**Projects Showcase App**

Project Video:
    https://assets.ccbp.in/frontend/content/react-js/projects-showcase-success-output.mp4

Overview
This React-based application displays a showcase of projects based on category selection. It fetches data from an API and renders a list of projects. The app supports different categories and uses the setState callback function to update the UI dynamically after data is fetched.

Functionalities:
Displays a list of projects from an API.
Category-based filtering of projects.
Shows loader while fetching data from API.
Handles both success and failure scenarios for the API call.
Live Demo
Here's a quick video demonstration of the application functionality:



Click the image to watch the demo video.

API Details
Base URL: https://apis.ccbp.in/ps/projects
Method: GET
Query Parameters:
category: The category id selected (initial value: ALL)
API Response Example:
json
Copy code
{
  "projects": [
    {
      "id": "f680c5fb-a4d0-4f43-b356-785d920208df",
      "name": "Music Page",
      "image_url": "https://assets.ccbp.in/frontend/react-js/projects-showcase/music-page-img.png"
    },
    ...
  ],
  "total": 34
}
Design and UI
For a consistent UI, make sure to follow the provided design files and styling:


Setup Instructions
Clone the repository.
Run npm install to install the necessary dependencies.
Start the application using npm start.
Important Notes
Make sure each category option in the select element has value and displayText as provided in the categoriesList.
Add data-testid="loader" for the Loader component.
Colors Used
#f1f5f9 (Background)
#475569 (Primary)
#328af2 (Button)
Font
Roboto
