# Purpose
The Northwind Web App is for those interested in learning more about C# ASP.NET  Web API with Angular. The near real-world solution provides a minimally scaffolded Angular Web App project with partially functioning software.

It is intended that the reader clone this repo and run the web application, review the working Gherkin feature tests, fix the broken tests, and push themselves to complete the challenge requests.

# Prerequistes
Either [Visual Studio Community](https://visualstudio.microsoft.com/vs/community/) (or higher) or [Visual Studio Code](https://code.visualstudio.com) works with the solution. If you are just starting, I recommend downloading [Visual Studio Community](https://visualstudio.microsoft.com/vs/community/) and reading the [Getting Started](https://code.visualstudio.com/docs/) docs.

Make sure to also have the following installed on your machine:
* [Dotnet CLI](https://dotnet.microsoft.com/download) I used .NET 5
* [Node JS](https://www.nodejs.org/) (I recommend LTS) I used version 14.16.1
* [Angular](https://angular.io) the Angular project template is on version 8.2

Additional resources 
* [Cucumber](https://cucumber.io) is used to run the Angular Gherkin tests as well as the xUnit C# tests. The project already has installed the tests.
  * Thanks to Wael Fezai [BDD with Angular and CucumberJS](https://codeburst.io/bdd-with-angular-and-cucumberjs-8cb4c33c2dff) article which help me get cucumber started for the Angular e2e tests.
  * Thanks to [Xunit.Gherkin.Quick](https://github.com/ttutisani/Xunit.Gherkin.Quick) easy to use xUnit package for .NET tests.
* Useful Visual Studio Code Extensions
  * [.NET Core Test Explorer](https://github.com/formulahendry/vscode-dotnet-test-explorer) helps run the xUnit tests
  * [Cucumber (Gherkin) Full Support](https://github.com/alexkrechik/VSCucumberAutoComplete) adds rich Gherkin language support making it easier to read and write .feature files


# About the Northwind Web App
The Northwind Web App name is a nod to  [Microsoft's Northwind database](https://docs.microsoft.com/en-us/dotnet/framework/data/adonet/sql/linq/downloading-sample-databases) even though the solution does not use the database. It represents a simplified project that an engineer would encounter in the workplace or when starting a project from scratch.

The scaffold consists of a simple Angular counter component and a fetch-data to a weather forecast WebApi directly from the Angular Web App template. The WeatherForecastController has been refactored with inversion of control (IoC) by moving the controller logic to a WeatherForecastService class and interface. This makes easier to write .NET tests. The e2e tests have been altered to leverage cucumber (Gherkin) feature testing.

The solution was created using the dotnet cli and can similiarly be created with Visual Studio Community using the New Project Angular template. The following dotnet commands were used to create the solution:

```sh
mkdir Northwind
cd Northwind

mkdir src
cd src
mkdir Northwind.Web
cd Northwind.Web
dotnet new angular

cd ..
mkdir Northwind.Test
cd Northwind.Test
dotnet new xunit
dotnet add package Xunit.Gherkin.Quick

cd ../..
dotnet new sln
dotnet sln add src/Northwind.Web/Northwind.Web.csproj
dotnet sln add src/Northwind.Test/Northwind.Test.csproj
```

# Getting Started
Open the Northwind.sln file in Visual Studio Community or open the folder in Visual Studio Code and start debugging (F5 for most keyboard layouts). The web application should look and feel like the standard Angular Web App template.

Next you should run the .NET backend Gherkin tests, then the frontend e2e Gherkin tests as well as the unit tests.


# Backend tests (WebAPI, .NET 5, C#)
The backend tests are powered by xUnit and are found at "./src/Northwind.Test/". To run the tests, build the solution and open the "Test Explorer". For Visual Studio Code, you will need to click the "Refresh" button on the .NET Core Test Explorer extension.

### Backend example test 
**Feature Location**: /src/Northwind.Test/Features/WeatherForecast.feature  
**Steps Location**: /src/Northwind.Test/Steps/WeatherForecast.Steps.cs  
**Scenario**: Get the weather forecase for tomorrow  

Review this successfully passing test and use it as a guide for the next tasks.

### Backend broken test
**Feature Location**: /src/Northwind.Test/Features/WeatherForecast.feature  
**Steps Location**: /src/Northwind.Test/Steps/WeatherForecast.Steps.cs  
**Scenario**: Cannot forecast the past  

Investigate why this test is not throwing an ArgumentException when the forecast target date is in the past. You will need to change the functionality of the code to meet the test's expectations as well as follow proper exception handling practices.

### Backend challenge test
After you have mastered fixing the broken test, QA has described the problem that when the tempature is 70 F that the weather forecast summary is "Freezing" when it should be "Mild".

Create a new scenario that reproduces the bug, then make the appropriate code changes to fix the bug.

# Frontend tests (Angular 8)
The frontend tests are powered by protractor, karma, jasmine, chai, and cucumber. Use the following command in the "/src/Northwind.Web/ClientApp" folder to run the end-to-end (e2e) tests:

```npm run e2e```

To run the unit tests use:

```npm run test```


### Frontend example test 
**Unit test location**: /src/Northwind.Web/ClientApp/src/app/counter/counter.component.spec.ts  

**Feature Location**: /src/Northwind.Web/ClientApp/e2e/src/features/counter.feature  
**Steps Location**: /src/Northwind.Web/ClientApp/e2e/src/steps/counter.steps.ts  
**Scenario**: Basic increment scenario


Review the feature and steps files to determine how the test properly works. 

### Frontend broken test
**Unit test location**: /src/Northwind.Web/ClientApp/src/app/counter-two/counter-two.component.spec.ts

**Feature Location**: /src/Northwind.Web/ClientApp/e2e/src/features/counter-two.feature  
**Steps Location**: /src/Northwind.Web/ClientApp/e2e/src/steps/counter-two.steps.ts  
**Scenario**: Basic increment two scenario

Invetigate why the tests are failing, then make the appropriate code changes to fix the problem.

### Frontend challenge test
After you have mastered fixing the broken test, the Product Owner says that the customer wants to increment by N where N is inputted by the customer. Create an Angular component using [ng generate component](https://angular.io/cli/generate) command. The CounterNComponent should be similar to the CounterComponent but has an input field of N which is used to increment by N. Include an e2e test.

# License
Copyright (c) Tom Mayfield. All rights reserved.

Licensed under the [MIT](LICENSE.txt) license.