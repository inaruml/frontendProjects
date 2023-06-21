# Project no. 1 

Assignment: 

1. Decomponent the user interface indicated in the following figure (the layout was the same as my finished product) according to the rules of the component approach of application development. Lay out the user interface into components along with their interfaces.
2. Implement the designed components in a stack built on top of React.js.
3. Required component properties:
  - The top components will have a value and a unit as input
  - All sections that have a title will be handled using content components (a component that contains child components)
  - The "contact" button will invoke the callback passed to the component via props
  - Data will be passed to the table via props

  NOTE: picture does not show complete content of finished work

<img width="1437" alt="image" src="https://github.com/inaruml/frontendProjects/assets/54745005/106e5506-86b2-4e3e-b061-14a921cbb861">

# Project no. 2 

Assignment: 

1. Implement a manual counter of people in the shopping center in a new route, use components with hooks.
2. Required component properties:
  - The new route will be placed in the menu (it will not be launched via the welcome route)
  - The content of the route will be counters for several shops separately, the route will also contain information on how many people are currently shopping in the center (sum of all shops)
  - Each shop will have its own limit for the number of people, it must be visually visible on the route that other people are not allowed to enter the shop
  - The route will include hours, between 22:00 and 06:00 it will no longer be possible to add shoppers in any store
  - Implement a suitable graphical display of individual elements (use the properties of uu5 components in the case of using the uu5 library)

  NOTE: picture does not show complete content of finished work

<img width="1324" alt="image" src="https://github.com/inaruml/frontendProjects/assets/54745005/f70e2440-2e07-4d69-b5ed-9065d9fef44a">


# Project no. 3

Assignment: 

1. Implement a new route in the application called Dashboard, which will be available from the menu and will be the default route for the application.
2. In this route, use BarChart from the uu5Chart library (link to the documentation), or a similar library (e.g. Recharts).
   - There will be several graphs in the route that will display population statistics in the Czech Republic for the last 5 years (number, number of births, number of deaths - source data will be a constant passed directly to the components)
3. The number of years for which the data should be displayed will be configurable in the application, in the range of 1 - 5.

NOTE: picture does not show complete content of finished work


<img width="1408" alt="image" src="https://github.com/inaruml/frontendProjects/assets/54745005/4ffebc32-d81a-4595-bf3d-f51f4c307910">



# Project no. 4

Assignment: 

1. Create a form to search for cars in the car dealership menu.
2. Create a new route for the car dealership, on the route there will be a list of ads (table, tile - not important) and a button to open a modal window with a form. The form will contain at least fields for:
   - brand selection (select) - at least 2 brands
   - brand model selection (select - reacts to the selected brand) - at least 2 models from each brand
   - number of kilometers from - to
   - price from - to
   - fuel (radio buttons with petrol, diesel, electricity options)
3. There will be a button in the form that will start the search and display only those that meet the specified criteria in the list of advertisements.

NOTE: picture does not show complete content of finished work


<img width="1418" alt="image" src="https://github.com/inaruml/frontendProjects/assets/54745005/2b890cbd-7002-4f4a-a755-2569987bbf8b">


# Project no. 5

Assignment: 

1. Implement a context named ColorSchemaContext.
2. Context will provide:
  - color Scheme - current color scheme value, default will be "blue"
  - setColorSchema - a function that allows changing the color scheme
3. The context will be provided for the entire page, i.e. any route.
4. Create a new route or use one of the current ones for a new component:
  - ColorSchemaChanger:
    -component that contains Uu5Forms.FormSelect or a similar type of component to change the value on the context
    -the component will offer several color schemes to change
5. There will also be two other components on the route that support colorSchema and which will take colorSchema from the context. Using the ColorSchemaChanger component, it will be possible to switch schemes.

NOTE: picture does not show complete content of finished work

<img width="1432" alt="image" src="https://github.com/inaruml/frontendProjects/assets/54745005/1542d0ac-f95a-441b-a5dc-d0e3f23708b0">



# Development and Usage

See following guidelines:

- [uuAppg01Devkit Documentation](https://uuapp.plus4u.net/uu-bookkit-maing01/e884539c8511447a977c7ff070e7f2cf/book)
- [uuSubApp Instance Descriptor](https://uuapp.plus4u.net/uu-bookkit-maing01/289fcd2e11d34f3e9b2184bedb236ded/book/page?code=uuSubAppInstanceDescriptor)
- [uuApp Server Project (NodeJs)](https://uuapp.plus4u.net/uu-bookkit-maing01/2590bf997d264d959b9d6a88ee1d0ff5/book/page?code=getStarted)
- [uuApp Client Project (UU5)](https://uuapp.plus4u.net/uu-bookkit-maing01/ed11ec379073476db0aa295ad6c00178/book/page?code=getStartedHooks)
