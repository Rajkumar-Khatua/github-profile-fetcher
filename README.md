## MtechZilla Interview 2nd Assignment

# GitHub User Search

This is my submission for the second assignment as part of the interview process with MtechZilla.
This project is a simple web application that allows you to search for GitHub users and view their public information.

## Features

- Search for GitHub users by username
- View public information of users, including:
  - Avatar Image
  - Username
  - Name
  - Number of public repos
  - Number of public gists
  - Profile creation date in YYYY-MM-DD format
- Additional features
  - Location
  - Bio
  - Link to GitHub profile
  - Link to blog
  - Organization company
  - Link to website
  - Number of followers
  - Bio

## Usage

1. Enter a GitHub username in the input field.
2. Click the 'Submit' button or press 'Enter'.
3. The user's public information will be displayed in a card UI.

## Technologies Used

- React.js
- Next.js
- Tailwind CSS

## API Used

The public information of GitHub users is fetched from the GitHub API:

GET - https://api.github.com/users/{username}

## Future Improvements

- Add error handling for when a username does not exist or the API request fails.
- Improve UI/UX design.

## Author

Rajkumar Khatua

## Acknowledgements

This project was assigned as an interview assignment by MtechZilla.
