# minimal react app

I wanted to figure out what was minimally required to write a React
"single page app" using JSX.

I tried using just babel (and no webpack) but I don't think this is possible?

Out of the box this repo should transpile the stuff in src into
dist/bundle.js. Nothing else is set up, though. It's adapted from
something I was messing around with on glitch.com.

## notes/todo

- use 'jsx-loader' instead of 'babel-loader'
- is it cool to exclude react etc from the bundle and instead load it as a script tag in the HTML?
