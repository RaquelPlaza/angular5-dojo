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

## Modules 

### Modules Explained

A module is essentially a packet of references that imports modules to be used by its components and exports its components to other modules. By default every angular app will have an app.module.ts file which is the primary module where everything else is referenced. Large sections of the app can then be broken down into child modules.

Lets have a look at our entry point module app.module.ts.

Firstly at the top of the file you will see a list of imports, anything that will be referenced within the module needs to be included here.

```
import { AppComponent } from './app.component';
import { NewPlanComponent } from './components/new-plan/new-plan.component';
import { MyPlansComponent } from './components/my-plans/my-plans.component';
import { MyTagsComponent } from './components/my-tags/my-tags.component';
```
Under declarations you should be able to see AppComponent and the three previous components created. If not you should add them here now. This essential says this component is apart of this module.

```
declarations: [
    AppComponent,
    NewPlanComponent,
    MyPlansComponent,
    MyTagsComponent
  ],
```

The second section is imports, any module or component that is required by one of the declared components needs to be added here. Some of the common project imports used in most projects can be seen below. We will explain more about them later.

```
imports: [
    BrowserModule,
    FormsModule,
    ….
```
There are also two other sections, Providers and Exports which we shall explore later but are generally not used by the app.module.

### Create a module

Let’s create a module for components that are generally shared across multiple modules. We shall create one using the angular cli using…

```
ng g m shared –dry-run
```

Notice all we’ve done is changed “C”omponent to “M”odule. Once again once you’re happy that will do what’s expected run it without the --dry-run flag.

We have our shared module woop! Now let’s add in some common modules and introduce the exports section. Exports make any component / module contained available to any other module that references this shared module. 
```
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [    
    CommonModule,
    FormsModule,
    BrowserModule
  ],
  declarations: []
})
export class SharedModule { }
```

Exports make any component / module contained available to any other module that references this shared module. This means if we have a component declared in a module but not exported, its private! 

Now we have a shared module let’s use it. Head back to app.module.ts and remove the three modules above and replace them with SharedModule. Intelisense should then prompt you to add the import line. If not add...

```
import { SharedModule } from './shared/shared.module';

You’ve now created your first module! We won’t be focusing much more on modules through this dojo but they are worth exploring after this session.

## Routing

###Routing configuration

We shall now consider the three components added earlier as “pages” and to access them we need to set up routes to them. 

Head to app.module.ts and in the inputs add* in…

```
RouterModule.forRoot(appRoutes, {useHash : false})
``` 

You should get an intelisense notification to import the router module too. Then under the imports at the top of the file add in a routes array…

```
const appRoutes: Routes = [
  { path: '', component: NewPlanComponent},
  { path: 'new-plan', component: NewPlanComponent },
  { path: 'my-plans', component: MyPlansComponent },
  { path: 'my-tags', component: MyTagsComponent },
];
```

We have now configured our components to routes! If we go to localhost:4200/my-plan we would access the MyPlanComponent and so on. It should also be noted that providing a blank path like the first item in the array will act as the home page so localhost:4200 will now go directly to the NewPlanComponent.

Now you may be thinking this is all nice but what if my module has a lot of components, won’t this become messy. The answer is yes and it is why its good practise to separate out your routing into its own module!** You can try this now if you want or after the dojo.

* If you were in a sub module and wanted to add in another level of routing, you would use .forChild() instead of .forRoot().

** the Angular CLI provides more magic here, if you know you will be using routing straight from the start you can add the -–routing to instantly create you a routing module for app.module.ts

```
ng new angular5-dojo –routing
```

### Using Routes

Now we have our routes let’s create a navigation menu using bootstrap. Add the following code into app.component.html. It’s simply the demo navigation menu off the bootstrap examples page… 

```
<nav class="navbar navbar-expand-md navbar-dark bg-dark">
  <a class="navbar-brand" href="#"></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbar">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item">
        <a class="nav-link" [routerLink]="['/my-plans']">My Plans</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" [routerLink]="['/my-tags']">My Tags</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" [routerLink]="['/new-plan']">New Plan</a>
      </li>
    </ul>
  </div>
</nav>

<div id="page-container" class="container">
  <router-outlet></router-outlet>
</div>
```

There are two key parts to take note of in this code, firstly the [routerLink]="['/my-plans']" binding. The routerLink binding essentially sets our a tags href parameter to http://localhost:4200/my-plans. Therefore redirecting to it on a click.

Secondly the router-outlet component <router-outlet></router-outlet>. When we click on the link the component will be loaded inside these brackets since were dealing with a Single Page Application.

```
<div id="page-container" class="container">
  <router-outlet>
    // My plans component.html will be inserted here
  </router-outlet>
</div>

With that you should now have a snazzy navigation menu with routing working. For further information on what bootstraps doing at this point, just ask your dojo master.


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



