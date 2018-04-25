# Angular5-dojo
A tutorial to get started with Angular 5 and explore its possibilities to put together front end applications

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

To run this project you will need to have the following installed:

* Node (https://nodejs.org/en/)
* npm (bundled with node - https://www.npmjs.com/)
* Yarn (https://yarnpkg.com/) - yarn is recommended for anyone at Bath due to proxy issues with npm
* Angular CLI (https://cli.angular.io/)
* Visual Studio Code (https://code.visualstudio.com/)

Angular command line interface (CLI) is exactly what it says on the tin, a CLI that will speed up the creation of multiple Angular components. To install through command prompt type

```
npm install -g @angular/cli 
OR 
yarn global add @angular/cli
```

### Installing

Create a new project with the Angular CLI, navigate to the project folder and start the server with the following:

```
ng new angular5-dojo --skip-install (create all the files, don't download the modules yet)*
cd angular5-dojo
npm install OR yarn (downloads the required modules)
ng serve OR yarn start
```

You can see the newly create site if you head to http://localhost:4200/ on your browser of choice.

*You may be wondering why we used the --skip-install flag? Simply put, if you've made a typo or made a mistake in your default configuration, you've just downloaded a chunk of files for nothing. By using skip-install you can check what is created before downloading all the required modules. The Angular CLI has a lot of flags to speed up the creation of projects that you can explore at a later date but it's a good practise to check what is created from the start.   

### Visual Studio Code

The argument is out there on the best development IDE but we shall use Visual Studio Code, you should have grabbed a copy as part of the prerequisites. Open it up and drag you project folder in. Your project should now be open and to make your life easier you can go to view > integrated terminal to have a CMD terminal open within your environment. Nice!

### Third party components (Bootstrap 4)

If you've not used bootstrap before you're in for a treat! Bootstrap is a nice library of dynamic components and layout tools that are implemented through html classes. It's not the focal point of this tutorial but we will be using it so let’s install it.

Firstly let’s use npm/Yarn to grab the files. There are major differences between 3 and 4 so make sure you have version 4.

```
npm install bootstrap
OR
yarn add bootstrap@4
```

Following that command you will find a reference to bootstrap in the projects package.json file under "dependencies". You will also find the Bootstrap files in the node_modules folder. It’s worth having a look through these files and understanding what they do at a later date. Finally we have a reference to include to get it off the ground. In the .angular-cli.json file, within the styles array, add the following to the end:     

```
"../node_modules/bootstrap/dist/css/bootstrap.min.css"
```

Congrats bootstraps base styling can now be applied across the project. Let’s now enable Bootstraps animations, unfortunately Bootstrap relies on JQuery for them. However we can get away with JQuery-slim. Once again use npm or Yarn to pull the packages.

```
npm install jquery-slim
OR
yarn add jquery-slim
```

Then, so our application knows about JQuery and the animation scripts, add the following references in the scripts array found in the .angular-cli.json file:

```
"../node_modules/jquery-slim/dist/jquery.slim.min.js",
"../node_modules/bootstrap/js/dist/util.js",
"../node_modules/bootstrap/js/dist/collapse.js"
```

Basic animations have now been added. We won’t be directly using these but you will see how Bootstrap uses them for dynamic purposes through the Dojo. For more information on bootstrap version 4, visit https://getbootstrap.com/docs/4.0/getting-started/introduction/

## Components

Angular is completely component based, we can use them for full pages or for view items that can be used across multiple pages complying with DRY principles. They generally consist of 4 items.

* A Component.ts file which is the Angular structure file.
* A Component.html for what is displayed, .ts binds to this.
* A Component.css or .sass for the html styling.
* A Component.spec.ts for test configurations.

Now we don’t want to create all four files every time we need a new component, that’s going to become tedious pretty fast so say hello to the CLI. Type into the console window…

```
ng g c components/new-plan –dry-run
```

You should see the following created.

```
  create src/app/components/new-plan/new-plan.component.html (28 bytes)
  create src/app/components/new-plan/new-plan.component.spec.ts (643 b)
  create src/app/components/new-plan/new-plan.component.ts (280 bytes)
  create src/app/components/new-plan/new-plan.component.css (0 bytes)
  update src/app/app.module.ts (1597 bytes) 
```

Nice right! By default the CLI will create a folder in src/app with the new files and automatically reference it in app.module (we shall look into modules later), so let’s break down the CLI instruction.

```
ng – Angular CLI
g - generate me 
c – a “C”omponent
components/new-plan – called new-plan in a directory called components
--dry-run – but only simulate it
```

The syntax is the same for all the Angular items that we will create! So we’ve run the command and we’re happy that the component will be created correctly so let’s run the command without the --dry-run flag to actually create the files.

For the purpose of the Dojo we also want another two components called my-plans and my-tags. Have a go at creating them and familiarise yourself with what is created in the files.

## Modules 

### Modules Explained

A module is essentially a packet of references. They import other modules to be used by its components and exports there components to other modules. By default every Angular app will have an app.module.ts file which is the primary module where everything else is referenced. Large sections of the app can then be broken down into child modules.

Let’s have a look at our entry point module app.module.ts.

Firstly at the top of the file you will see a list of imports, anything that will be referenced within the module needs to be included here.

```
import { AppComponent } from './app.component';
import { NewPlanComponent } from './components/new-plan/new-plan.component';
import { MyPlansComponent } from './components/my-plans/my-plans.component';
import { MyTagsComponent } from './components/my-tags/my-tags.component';
```
Under declarations you should be able to see AppComponent and the three previous components created. If not you should add them here now. This essential says these component are a part of this module.

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
There are also two other sections, Providers and Exports which we shall explore later but are generally by design are not used by the app.module except in specific cases.

### Create a module

Let’s create a module for components that are shared across multiple modules in general. We shall create one using the Angular CLI using:

```
ng g m shared –dry-run
```

Notice all we’ve done is changed “C”omponent to “M”odule. Once again, when you’re happy that will do what’s expected run it without the --dry-run flag.

We have our shared module! Now let’s add in some common modules and introduce the exports section.

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

Now we have a shared module let’s use it. Head back to app.module.ts and remove the three modules above and replace them with SharedModule. intelisense should then prompt you to add the import reference. If not add...

```
import { SharedModule } from './shared/shared.module';
```

You’ve now created your first module! We won’t be focusing much more on modules since this is a small application but they are worth exploring after this session.

## Routing

### Routing configuration

We shall now consider the three components added earlier as “pages”. To access them we need to set up routes to them. 

Head to app.module.ts and in the inputs add**:

```
RouterModule.forRoot(appRoutes, {useHash : false})
``` 

You should get an intelisense notification to import the router module. Then under the imports at the top of the file add in a routes array…

```
const appRoutes: Routes = [
  { path: '', component: NewPlanComponent},
  { path: 'new-plan', component: NewPlanComponent },
  { path: 'my-plans', component: MyPlansComponent },
  { path: 'my-tags', component: MyTagsComponent },
];
```

We have now configured our components to routes! Once we've configured our app core view we will be able to visit these routes. 

Now you may be thinking this is all nice but what if my module has a lot of components, won’t this become messy. The answer is yes and it is why its good practise to separate out your routing into its own module!*** You can try this now if you want or after the dojo.

** If you were in a sub module and wanted to add in another level of routing, you would use .forChild() instead of .forRoot().

*** the Angular CLI provides more magic here, if you know you will be using routing straight from the start you can add the -–routing to instantly create you a routing module for app.module.ts

```
ng new angular5-dojo –routing
```

### Using Routes

Now we have our routes, let’s create a navigation menu using bootstrap. Add the following code into app.component.html. It’s simply the demo navigation menu off the bootstrap examples page:

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

There are two key parts to take note of in this code, firstly the [routerLink]="['/my-plans']" binding. The routerLink binding essentially sets our “a” tags href parameter to http://localhost:4200/my-plans. Therefore redirecting to it on a click.

Secondly the router-outlet component <router-outlet></router-outlet>. When we click on the link the component will be loaded inside these brackets since we’re dealing with a Single Page Application (SPA).

```
<div id="page-container" class="container">
  <router-outlet>
    // My plans component.html will be inserted here
  </router-outlet>
</div>
```

With that you should now have a snazzy navigation menu with the routing working.

## Bindings

Binding allows us to pass data from the component to the html elements.
We need to be able to send data to the form in HTML Elements, Directives and in our own Components with custom properties and events.

### Handlebars

We use handlebars binding in our new-plan template, for example, as we'll see when we build the form, in the categories dropdown options:
```
<option *ngFor="let cat of categories">{{ cat.body }}</option>
```

### Brackets

In our application we will use bindings in several places, for example, in the new-plan component, we bind the formGroup property to our reactive form, getting [] the data and we bind to the ngSubmit event so setting () the values back to the component.
```
<form [formGroup]="newPlanForm" (ngSubmit)="onSubmit()">
```

## Reactive Forms

In the reactive approach, the form is created in the component, in Typescript and binded to the html markup for the form.
To get started we need to import the ReactiveFormsModule, we'll add this to our shared.component.ts file:

```
import { ReactiveFormsModule } from '@angular/forms';
```
Don't forget to add it to the exports array in the same file.

Now we can look at our new-plan component. First we import FormGroup, FormControl and Validators from angular/forms:

```
import { FormControl, FormGroup, Validators } from '@angular/forms';
```
We want the form to be created when we initialize the component, so we'll implement OnInit in our class:

```
export class NewPlanComponent implements OnInit {
  newPlanForm: FormGroup;

  ngOnInit() {
    this.newPlanForm = new FormGroup({
      'name': new FormControl(null, Validators.required),
      'description': new FormControl(null, Validators.required),
      'date': new FormControl(null, Validators.required),
      'startingTime': new FormControl(null, Validators.required),
      'finishingTime': new FormControl(null, Validators.required),
      'category': new FormControl(null),
      'location': new FormControl(null, Validators.required)
    });

```
Here we have added some controls for each of the fields we want in the form and the will be referenced in the html code. For each form control we can pass some parameters, the first one is the initial value, the second parameter in this case is a validator. Validator.required will check that the form field contains a value.
We have created a reactive form, however, we need to add the markup in our html file, so in new-plan.component.html we have to add the markup for each of the fields in the form. Here is an example of an input field in the form:

```
<form [formGroup]="newPlanForm">
    <div class="form-group">
    <label for="name">
      <b>Name</b>
    </label>
    <input id="name" type="text" formControlName="name" class="form-control" placeholder="" name="name" />
    <span *ngIf="!newPlanForm.get('name').valid && newPlanForm.get('name').touched" class="error">Please enter a plan name</span>
  </div>

  <div class="form-group">
    <label for="description">
      <b>Description</b>
    </label>
    <input id="description" type="text" formControlName="description" class="form-control" placeholder="" name="description"
    />
    <span *ngIf="!newPlanForm.get('description').valid && newPlanForm.get('description').touched" class="error">Please enter a plan description</span>
  </div>
</form>

```
In this example we have synced the form and form field binding the formGroup directive [formGroup]="newPlanForm">
And the name field using the formControlName=”name” directive
Since we added a validator to the form in the component, let’s add a message here in case the form field is invalid. That is the <span> tag:
*ngIf="!newPlanForm.get('name').valid && newPlanForm.get('name').touched"

We can complete the form with a submit button:

```
<div class="row">
    <div class="col-12">
      <button type="submit" class="btn btn-success btn-block" [disabled]="!newPlanForm.valid">Add Plan</button>
    </div>
  </div>
```
The disabled directive is binding to the newPlanForm.valid property in order to disable the button if the form is not valid.

Our form is created, however, nothing happens when we submit it because we have not binded it to a submit event. To see this working we are going to create a method in our component file:

```
onSubmit() {
       console.log('Submitted');
}
```
and create the binding in the html form:

```
<form [formGroup]="newPlanForm" (ngSubmit)="onSubmit()">
```

ngSubmit is a default Angular directive that will trigger when the form gets submitted.

### Adding bootstrap components

We have a couple of fields that we could improve, date and starting and finishing time are a bit boring as input fields. Let’s make use of ngx-bootstrap https://valor-software.com/ngx-bootstrap/
```
npm install ngx-bootstrap --save
OR
yarn add ngx-bootstrap
```
We'll import a couple of components into our app.module file:
```
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';

```
and add them to the imports array:
```
BsDatepickerModule.forRoot(),
TimepickerModule.forRoot(),
```

The date picker also has a custom styling so let's also add that into the styles array in angular-cli.json

```
"../node_modules/ngx-bootstrap/datepicker/bs-datepicker.css"
```

The component are now available to be used in our new-plan component markup:
```
  <div class="form-group">
    <label for="date">
      <b>Date</b>
    </label>
    <input id="date" type="text" bsDatepicker formControlName="date" class="form-control" placeholder="" name="date" />
    <span *ngIf="!newPlanForm.get('date').valid && newPlanForm.get('date').touched" class="error">Please enter a plan date</span>
  </div>
```
```
<div class="form-group" ngClass="row">
    <div class="col-md-6">
      <label for="startingTime">
        <b>Starting time</b>
      </label>
      <timepicker id="startingTime" formControlName="startingTime" name="startingTime"></timepicker>
      <span *ngIf="!newPlanForm.get('startingTime').valid && newPlanForm.get('startingTime').touched" class="error">Please enter a plan date</span>
    </div>
    <div class="col-md-6">
      <label for="finishingTime">
        <b>Finishing time</b>
      </label>
      <timepicker id="finishingTime" formControlName="finishingTime" name="finishingTime"></timepicker>
      <span *ngIf="!newPlanForm.get('finishingTime').valid && newPlanForm.get('finishingTime').touched" class="error">Please enter a plan date</span>
    </div>
  </div>
```
There is an extra component we'll be using. When the form gets submitted, we want to inform the user that their plan has been added to My Plans. We'll use an alert component for this.
```
import { AlertModule } from 'ngx-bootstrap/alert';
```
And add the markup above all form fields:
```
  <alert type="success" dismissOnTimeout="3000" *ngIf="submitted">
    <strong>Yes!</strong> We have a plan.
  </alert>
```
The *ngIf directive is checking for a property called "submitted". We have to set this up in our component and then make it true inside our onSubmmit method:
```
submitted = false;
```

```
onSubmit() {
   this.submitted = true;
  }
```

You may have noticed a field in the form called "Category". This is not a simple input field, we'll have a dropdown selector here so we can pick one of the existing categories available from an API. The html markup will look like this:

```
<div class="form-group">
    <label for="category">
      <b>Category</b>
    </label>
    <select id="category" type="text" formControlName="category" class="form-control" placeholder="" name="category">
      <option *ngFor="let cat of categories" [value]="cat.name">{{ cat.name }}</option>
    </select>
  </div>

```
The *ngFor directive loops over an array of categories that will ultimately be provided by a service, meanwhile, we'll create an array in the component file:

```
categories: any[] = [];
```
### Working out the bootstrap components output

Bootstrap's timepicker returns a datetime format with today's date and the time selected, we need to tidy up the data we collect in the form before posting to an API. We'll create a method that compiles the date selected in the datepicker with the times selected for Starting and Finishing time, therefore, Starting and Finishing will contain timestamps with the selected date and times. We don't need to pass the Date output to the API anymore, as it will be contained within the time fields.

In the component we'll create the following method:

```
resolvePlan() {

    const planStart = new Date(this.newPlanForm.value.date.setHours(
                                this.newPlanForm.value.startingTime.getHours(),
                                this.newPlanForm.value.startingTime.getMinutes(),
                                this.newPlanForm.value.startingTime.getSeconds()));
    const planFinish = new Date(this.newPlanForm.value.date.setHours(
                                this.newPlanForm.value.finishingTime.getHours(),
                                this.newPlanForm.value.finishingTime.getMinutes(),
                                this.newPlanForm.value.finishingTime.getSeconds()));

    return ({
    'name': this.newPlanForm.value.name,
    'description': this.newPlanForm.value.description,
    'starting': planStart,
    'finishing': planFinish,
    'category': this.newPlanForm.value.category,
    'location': this.newPlanForm.value.location
  });
  }
```
And in our post service we'll pass this.resolvePlan().

Now we have our inputs created and acting in a reactive manor lets tidy them up a bit. Open up the my-plans.css file and insert the following styles:
```
.form-field {
  width: 70%;
}
```

This styling will only work on our component so we can easily defined specific styles and extract whole components nicely. If we wanted a global style then we can set it in the master style.css. Since our fixed navigation model hovers over our page, lets add some padding to the page in the global .css to account for that.
```
#page-container{
    padding-top:56px;
}
```

Now every page will have the padding applied to it.

Time to get into Services!

## Services

Services in Angular are where we manage our API calls. For the purpose of this Dojo we shall be using JSON Server, a mock API tool so we don’t have to create an API. 

### JSON-Server

Let’s install and start-up our API mocker json-server.js. In the terminal enter

```
npm install -g json-server
Or
Yarn add global json-server
```

Once done, grab the db.json file provided and place it in your projects route directory. To start the server open a new terminal window and enter 

```
json-server --watch db.json
```
  
Now if you head to http://localhost:3000 you should get a nice response listing all the mocked data responses available. JSON server is a great little tool if you’re co-developing with someone on the back end who may not know what responses you require. With this you can outline what you’re expecting and vice versa just by modifying the db.json file.

### Create a service

Using the CLI and the syntax from the previous sections, add a service to app/shared/services/ called plans. 

```
Do it yourself section
```

We also need to add the service to our module. Pop into app.module.ts and add a reference to PlansService under the final declaration type that we will cover, Providers.

A service declared in the providers array is accessible globally, therefore if we had another module, we can access the service without defining it in that module. There is one exception to this but I’ll direct you to the reason why and where in further resources at the end.

Okay on to the service file, firstly we need to declare the components we require

```
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
```

The HTTP items are self-explanatory but he RxJS stands for Reactive Extensions for Javascript and allows for the simplification of asynchronous calls through observables and subscriptions. It’s a fairly large library so to reduce the size of our application, we’re only including the parts we need as opposed to the full library.

Since were using HttpClient ect.. The module needs to know that we’re using them and they exist within the HTTPModules so import the following in your app.component.

```
import { HttpClientModule } from '@angular/common/http';
```

Next we need to inject the HTTP Client into the service through the constructor, include the following.

```
constructor(private _http: HttpClient) 
```

Now we’re ready to create an API caller.

### HTTPGET

Let’s add in a function to head off to an API and grab some plans

```
getPlans(): Observable<any> {
  return this._http.get<any>(http://localhost:3000/ + “plans")
    .do(data => {
      // Log, set flags, the data will not change if modified here
    })
    .catch(this.handleError);
}

private handleError(err: HttpErrorResponse) {
  console.log(err.message);
  return Observable.throw(err.message);
}
```

Notice the reference to “any” at the moment. If you don’t know what format the data will be in at first, use any and then map to a class or interface at a later stage before finalising your service. 

We can now set up a subscription to this function in any component that has access to the service so let’s do that. Open my-plans.component and inject the service through the constructor. 

```
(private _myPlansService : PlansService){
```

Then we will make a call to get the plans during the components initialisation through a subscription. Within the onInit lifecycle hook add the following.

```
ngOnInit() {
    this._myPlansService.getPlans()
      .subscribe(
        response => {
          this.myPlans = response;
        },
        error => {
          console.log("MyPlans getPlans: FAILED");
        }
      )
  }
````

What will now happen is as the component initialises, an asynchronous call is made to the service which in turn makes a call to the API. It will continue to process through the component until a responses is passed back to the service and then back on to the component. If it’s valid the data will be passed into the response call back or if an error has occurred it will be passed into the error call-back.  

To view what is returned lets quickly throw a for loop binding into the my-plans.html file and view the results.

```
  <div class="row "*ngFor="let plan of myPlans">
    {{plan.id}}
  </div>
```

You should see a list of Ids’ on the my-plans page if the call has been successful or an error in the console if something has gone wrong. While we are here and we know data is being returned, change the for loop from above into the following:

```
<div class="row">
  <div class="col-12">
    <table class="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Description</th>
          <th>Location</th>
          <th>Category</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let plan of myPlans">
          <td>{{plan.name}}</td>
          <td>{{plan.description}}</td>
          <td>{{plan.location}}</td>
          <td>{{plan.category}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
```

We now have a Bootstrap styled dynamic table! Simple really.
 
We do have one more API get call to create. In our reactive form we set up a dropdown field to display categories coming from an API endpoint and we need to create a method in our service to pull that information into our component. Let's try creating this new method getCategories, very similar to getPlans but the end point will be /categories instead of /plans.

```
    Do it yourself section
```

Then in our new-plan component we add the following code, inside ngOnInit:

```
this._myPlansService.getCategories()
      .subscribe(
        data => {
          this.categories = data;
          return data;
        },
        error => {
          console.log("NewPlan getCategories: FAILED");
        }
      );
```

We are assigning the object from our call to the categories array we declared previously. Now our dropdown will have options coming from the API following a successful response.

### HTTPPost

Posting works with promises in exactly the same way as the GET calls except we have to pass in some headers and a body. Let’s create a function to post a plan back to the JSON server.

```
postPlan(plan:any): Observable<any> {
	const body = JSON.stringify(plan);
	const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
	const options = {headers: headers};
	return this._http.post<any>("http://localhost:3000/" + 'plans', body, options)
	  .do(data => {
	  })
	  .catch(this.handleError);
}
```

So firstly we stringify the passed object to the function which will act as our body. We then specify what headers to pass back, in this case we are just passing back the content-type header. Finally we wrap the header in an options object, you can explore what else you can do here at a later date. Finally we send off the post call with the data and options.

We can now use the post call within the new-plan component we created earlier, head back into the newPlan component and within the onSubmit function add the following subscription:

```
this.plansService.postPlan(this.resolvePlan())
  .subscribe(
	data => {
	  this.submitted = true;
	  this.newPlanForm.reset();
	  return true;
	},
	error => {
	  console.error('Error!');
	  return Observable.throw(error);
	}
  );
```

Hey presto our form can now submit data correctly. Ultimately up until this point we've been a bit naughty, we've been using the any type everywhere which completely removes the power of typescript. If we know what data is being returned from our calls we should define the responses as a class or an interface.

###Interfaces

Let’s create an Interface through the Angular CLI, since a plan could be used across the product lets create it in our shared directory under models.
```
ng g i shared/models/IPlan 
```

As a first pass we're going to define our response type as strings and numbers
```
export interface IPlan {
    name: string;
    description: string,
    starting: string,
    finishing: string,
    location: string,
    id: number
}
```

Then to use this interface lets replace the returned type of getPlans to an Observable<IPlan[]> and variable myPlans in the my-plans component to IPlan[]. Run the app and head to the My Plans page to see what happens.

All our data loads the same so it's working the same; why bother? Well by defining our response types as interfaces we can get on the fly intellisense recommendations and compile time errors within the development environment. The typescript compiles down to JS so it does not affect the running of the application. 

However, this can throw up some issues. HTTP GET and POST responses can get past the interface definitions so objects could be missing fields. They cannot however be bypassed if they are mapped after the call. Mapping also allows us to split out fields if we require it.

Let’s have a quick look at the GetPlans HTTP GET call again

```
return this._http.get<IPlan[]>("http://localhost:3000/" + 'plans')
  .do(data => {})
  .map(results => {
     return results.map(res => {
         return {
            name : res.name,
            description : res.description
          }
     })
   })
   .catch(this.handleError);

    Also add "import 'rxjs/add/operator/map';" to our imports;
```

With the map function we can pick out what fields to pass on to our subscriptions whereas the do function is great for logging or conditional setters. If we want to enforce all fields of the interface we can define it here.

```
let result : IPlan;
result = {
    name : res.name,
    description: res.description,
    starting: res.starting,
    finishing: res.finishing,
    location: res.location,
    id: res.id
}
return result;
```

This allows us the option to check each value of the response to make sure any items that are critical are not null and we can separate combined data items like date times into separate variables if we need too! 

### Components as Components

So far we’ve looked at components in the context of pages, however, they are much more powerful than that. Let’s say we have a feature that needs to work in exactly the same way where ever it is used. In our case an error notification. We don’t want to duplicate the html and functionality on every page. 

Let’s create a new component called error-notification in the shared folder

```
ng g c shared/components/error-notification –m shared
```

Notice the new –m on the end, with this flag we can specify what module to define a component on its creation. Nice! This component will be exported so you will need to add it to the exports array manually.

Let’s head into the error-notification.html file and add a nice alert warning…

```
<div class="alert alert-danger">
  An error has occurred
</div>
```

Job done. We now have a very quick error notification which will look and act in the same way where ever we use it. But how do we use it?

Have a look in the error-notifications component.ts file, you should see that in the component declaration we have 

```
selector: 'app-error-notification',
```

This is essentially an ID to the component and with this ID we can insert the component into any other component that has access to the component through…

```
<app-error-notification></app-error-notification>
```   

Let’s place this at the top of the new plans components html file and run the application to see what happens. You should see an alert bar at the top of the page, nice! You’ve just created you’re first modular component. Of course there’s much more we can do with this. Different pages may require a different error message, let’s explore this next. 

## Component Input

Head to the error-notification.ts file and add the following  
```
export class ErrorNotificationComponent implements OnInit {
       @Input() message : string = "";
```

The component now knows to expect a string called message to be passed in, or if it’s not then it defaults to an empty string. We can now bind the value into our html using handlebars.
```
<div class="alert alert-danger">
  Error: {{message}}
</div>
```

Finally we need to pass the input message into the component, we can bind this on each page that uses the component through its declaration.

```
<app-error-notification [message]="'An unknown error has occurred'"></app-error-notification>
```

We can now pass in custom messages to our component, nice!

##Outputs

Outputs in child components are a little more complex and require an EventEmitter, we can consider them to be callbacks. To pass an output value back to a top level component requires some bindings and use of the EventEmitters .emit function.

Firstly add an output declaration under the existing input declaration.

```
@Output() dismissError : EventEmitter<boolean> = new EventEmitter<boolean>();
```  

For proof of concept we’re going to pass back a boolean value. We then need to create a function to call the emitter.

```
onDismissError(){
  this.dismissError.emit(true);
}
```

Let’s add a button within the components html file that binds to this function.

```
<div class="row">
  <div class="col-8"></div>
  <div class="col-4">
    <button class="btn btn-primary btn-block" (click)="onDismissError()">Dismiss Error</button>
  </div>
</div>

```

At this point our component now has a functional output binder but we’ve not configured anywhere to use it yet. It should also be noted that the component will work without a top level binding so you can use it as you require it. For the next step we shall configure the new-plan page to bind to this callback.

Firstly lets add a Boolean to monitor if an error has occurred within the new-plan component. For now it will be set to true to show our component.
```
hasErrorOccurred : boolean = true;
```

Secondly in the html file lets wrap our component in an if binded div based on this new variable, the plan is to hide the error once it’s dismissed.

```
<div *ngIf="hasErrorOccurred">
  <app-error-notification [message]="'An unknown error has occurred'"></app-error-notification>
</div>
```

Back to the .ts file, now we need to create the callback function, this will simply set hasErrorOccured to false if it is called.

```
onErrorDismissed() {
  this.hasErrorOccurred = false;
}
```

We can then bind this to our child component in the html file using () brackets.

```
(dismissError)="onErrorDismissed()"
```

We now have a working output callback, give the button a go.

The final note to make on this is that the emitter can pass back an object, we originally passed back a Boolean value of “true” but it’s currently not being used. We can easily configure the last two code snippets to work with the any object.

```
(dismissError)="onErrorDismissed($event)"
```
And 

```
onErrorDismissed(result : boolean) {
  this.hasErrorOccurred =!result;
}
```

With this knowledge you can go forward and make completely dynamic components ultimately reducing duplications and creating consistent application behaviour.

### Dynamic Configuration

So far we’ve been hard coding our URLs into our services. What happens when we release the application and localhost is no longer our API location? Bring in the configuration files.

Firstly let’s create some JSON files for our configurations, create a folder under src called config followed by three new files called…

```
config.development.json
config.release.json
env.json
```

With this type of set up we can have different configurations for our development and production environments and can switch between them by changing a single parameter in the env.json file.

In env.json add the following…

```
{
  "env": "development"
}
```

Then in config.development.json add in the db.json root…
```
{
  "apiRoot": "http://localhost:3000"
}
```

This should also be mimicked in the config.production.json file too. Next we need to allow access to the new folder. In the angular-cli.json file under assets add in “config” to the array.

For the next step grab the provided app.config.ts file provided and place it under the app directory. Have a look through to see what it’s doing in terms of loading the env.json file and then how it goes on to load up the parameters defined in either of the config files.

Almost there, we now need to add the references to load the config on the loading of the application in the app.module.ts. Open it up and add in the reference to the app.config file we just added, a reference to the APP_INITIALIZER and a quick function to load the config.

```
import { APP_INITIALIZER } from '@angular/core';
import { AppConfig }       from './app.config';

function initConfig(config: AppConfig){
  return () => config.load() 
 }
```

The app requires the APP_INITIALIZER declaration on any provider that requires a pre configuration routine. Finally we can add the AppConfig class and configure the loading in the provider array by adding the items shown below.

```
AppConfig,
    { provide: APP_INITIALIZER, useFactory: initConfig, deps: [AppConfig], multi: true }
```

And with that we can now use our configurations anywhere in the app as if it was a service. Just add a reference in the constructor of a service that requires it, in our case our plans service and pull through the configuration by parameter name:

```
constructor( private config : AppConfig){
}

onInit() {
	this.apiRoot = config.getConfig('apiRoot');
}
```

Then wherever we have already hard coded "http://localhost:3000", just replace it with this.apiRoot. Next up testing.


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



