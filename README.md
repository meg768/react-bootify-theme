# react-bootify-theme
A module to easily change change Bootstrap themes.

## Installation
````bash
npm install react-bootify-theme --save
````

## Example

import Theme from 'react-bootify-theme';

````javascript
<Theme supplier='bootswatch', name='materia'>
    <App/>
<Theme>
````

````javascript

import Theme from 'react-bootify-theme';

<Theme supplier='bootstrap'>
    <App/>
<Theme>
````

Default styling is Bootstrap 4.
