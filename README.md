# todoList-Virtuo

Simple todo list with status handling and local save of the list and status

### Stack

- React JS v16
- Redux v4
- Semantic UI

The boilerplate was created using create-react-app npm package

### Installing

First you need to clone the GIT project:

```
> git clone https://github.com/Kazidoman/todoList-Virtuo.git
```

After go in the project folder and start npm install

```
> cd todolist-virtuo
> npm install
```

Now you can run the projet

```
> npm start
```

### How to use it

By default, the project will open automaticaly in a new tab of your web browser

The default port will be 3000

If it didn't open automaticaly, the url is http://localhost:3000/


### Development

It took me total, 2 hours to make it.

First i started by creating an empty project using the npm package create-react-app
I added Redux and started cleaning all useless files and changing the files/folders structure

When everything was ready, i added semantic UI to use the GRID system, the inputs and checkboxs. I made 3 components for the todo list:
  - Title: the title of the todolist
  - ListView: the view of the list of the tasks
  - AddBar: the input to add todo in the list

In my Redux actions i created two actions : ADD_TODO (to add a todo) and CHANGE_TODO (to change the todo status)

When everything was done i started adding a simple save system using the localstorage, pushing the array of todos inside and getting it at startup


### Problems encountered

- I lost a lot of time setting up everything, it took me around 1h, had to check redux doc not to make mistakes by adding it
- My id system didn't work well at first with the localstorage system, the ids where used mone than once so the checkbox was triggering many todos
- Semantic UI changed their GRID system i was little bit confused


### Enhancement

- Make an other system for the storage and implement it a different way
- Add unit tests TDD/e2e
- Clean code (the components)
- I should have used a boilerplate with redux and better file structure, i lost too much time
- Rename the functions/Vars
- Make a better errors handling (especially for the storage)
- Make possible to delete the storage / todos




