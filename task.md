# Create a list of users using JavaScript
We want to display the users from https://jsonplaceholder.typicode.com/users in a simple neat list.

The container should have a padding of 10 pixels in any screen resolution.
Font size: 16px.

Each user is displayed as a line of:

- A circle-shaped avatar thumbnail (just use https://via.placeholder.com/150/1F83B3 for all users) followed by 20px spacing to the right
- The user name linked to the website (color: #222222), if the user has a website
- The company name in parentheses (color: #999999), if there is a company in the user data

Each user item must not clash with the next column, so there must be 20 pixels of space before the next column.

A user item is not allowed to break in multiple lines. Instead, the line must be truncated (displaying an ellipsis where cut off), if the text is too long to fit (see the mobile/narrow screen screenshot).

The columns container has a maximum width of 100% of the screen on narrow screens, 800 pixels when the screen width is greater than or equal to 1024 pixels and less than 1400 pixels, and 1400 pixels on 1400 pixels wide or wider screens.


You can create the list using vanilla JavaScript or your favourite framework (React, Vue.js, Angular, whatever). You can add CSS any way you see fit. If CSS is not your greatest talent, feel free to use e.g. Material UI  or Bootstrap.

- Display in 1 column on narrow screens (width < 1024 pixels).
- Display in 2 columns on wider screens (1024 pixels <= width < 1400 pixels).
- Display in 4 columns on large screens (width >= 1400 pixels). Wrap the list in a centered container with a maximum width of 1400 pixels.

For inspiration/reference you can look at these 3 images:
- https://github.com/ColourboxDevelopment/frontend-assignment/blob/master/1024.png
- https://github.com/ColourboxDevelopment/frontend-assignment/blob/master/1800.png
- https://github.com/ColourboxDevelopment/frontend-assignment/blob/master/mobile.png

# Optional

You can add this to the HTML HEAD to get the same font as in the screenshots, but it is not required:

```
<link rel="preconnect" href="https://fonts.gstatic.com">
<link href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap" rel="stylesheet">

<style>
    html, body, #__APP_ROOT__ {
        height: 100%;
        font-family: Lato, sans-serif;
    }
</style>
```

