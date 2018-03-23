# angular5-dojo
A tutorial to get started with Angular 5 and explore its possibilities to put together front end applications

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

To run this project you will need to have the following installed:

* node (https://nodejs.org/en/)
* npm (bundled with node - https://www.npmjs.com/)
* yarn (https://yarnpkg.com/) - yarn is recommended for anyone at Bath due to proxy issues with npm
* angular cli (https://cli.angular.io/)
* visual studio code (https://code.visualstudio.com/)

Angular command line interface (cli) is exactly what it says on the tin, a cli that will speed up the creation of multiple angular components. To install through command prompt type

```
npm install -g @angular/cli 
OR 
yarn global add @angular/cli
```

### Installing

Create a new project with the Angular cli, navigate to the project folder and start the server

```
ng new angular5-dojo --skip-install (create all the files, don't download the modules yet)*
cd angular5-dojo
npm install OR yarn (downloads the required modules)
ng serve OR yarn start
```

You can see the newly create site on http://localhost:4200/

*You may be wondering why we used the --skip-install flag? Simply put, if you've made a typo or made a mistake in your default configuration, you've just downloaded a chunk of files for nothing. By using skip-install you can check what is created before downloading all the required modules. The angular cli has a lot of flags to speed up the creation of projects that you can explore at a later date but its good practise to check what is created from the start.   

### Visual Studio Code

The argument is out there on the best development IDE but we shall use Visual Studio Code, you should have grabbed a copy as part of the prerequisites. Open it up and drag you project folder in. Your project should now be open and to make your life easier you can go to view > integrated terminal to have a cmd terminal open within your environment. Nice!

### Third party components (Bootstrap 4)

If you've not used bootstrap before you're in for a treat! Bootstrap is a nice library of dynamic components and layout tools that are implemented through html classes. It's not the focal point of this tutorial but we will be using it so let’s install it.

Firstly let’s use npm/yarn to grab the files. There are major differences between 3 and 4 so make sure you have version 4.

```
npm install bootstrap
OR
yarn add bootstrap@4
```

Following that command you will find a reference to bootstrap in the projects package.json file under "dependencies". You will also find the Bootstrap files in the node_modules folder. Its worth having a look through these files and understanding what they do at a later date. Finally we have a reference to include to get it off the ground. In the .angular-cli.json under scripts add in     

```
"../node_modules/bootstrap/dist/css/bootstrap.min.css"
```

Congrats bootstrap styling can now be applied across the project. Now styling is present lets enable bootstraps animations, unfortunalty Bootstrap relies on Jquery for them. However we can get away with jquery-slim. Once again use npm or yarn to pull the packages.

```
npm install jquery-slim
OR
yarn add jquery-slim
```

Finally add these references under scripts in the .angular-cli.json file

```
"../node_modules/jquery/dist/jquery.slim.min.js",
"../node_modules/bootstrap/js/dist/util.js",
"../node_modules/bootstrap/js/dist/collapse.js"
```

Basic animations have now been added. We won’t by directly using these but you will see how bootstrap uses them for dynamic purposes through the Dojo. For more information on bootstrap version 4 https://getbootstrap.com/docs/4.0/getting-started/introduction/

## Components

Angular is completely component based, we can use them for full pages or view items that will be used across multiple pages complying with DRY principles. They generally consist of 4 items.

• A Component.ts file which is the angular structure file
• A Component.html for what is displayed, .ts binds to this.
• A Component.css or .sass for the html styling
• A Component.spec.ts for test configuration

Now we don’t want to create all four files every time we need a new component, that’s going to become tedious pretty fast so say hello to the cli. Type into the console window…

```
ng g c components/new-plan –dry-run
```

You should see the following created

```
  create src/app/components/new-plan/new-plan.component.html (28 bytes)
  create src/app/components/new-plan/new-plan.component.spec.ts (643 b)
  create src/app/components/new-plan/new-plan.component.ts (280 bytes)
  create src/app/components/new-plan/new-plan.component.css (0 bytes)
  update src/app/app.module.ts (1597 bytes) 
```

Nice right! By default the cli will create a folder in src/app with the new files and automatically references it in app.module (we shall look into modules later), so let’s break down the cli instruction.

```
ng - angularcli
g - generate me 
c – a “C”omponent
components/new-plan – called new-plan in a directory called components
--dry-run – but only simulate it
```

The syntax is the same for all the angular items that we will create! So we’ve run the command and we’re happy that the component will be created correctly so let’s run the command without the --dry-run flag to actually create the files.

For the purpose of the Dojo we also want another two components called my-plans and my-tags. Have a go at creating them and familiarise yourself with what is created in the files.

## Routing

 -- Next section


## Running the tests

Explain how to run the automated tests for this system

### Break down into end to end tests

Explain what these tests test and why

```
Give an example
```

### And coding style tests

Explain what these tests test and why

```
Give an example
```

## Deployment

Add additional notes about how to deploy this on a live system

## Built With

* Angular 5

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning
 

## Authors

* **Raquel Plaza**

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Hat tip to anyone who's code was used
* Inspiration
* etc


