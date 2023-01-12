**Argentina Programa**

**[🇪🇸] Trabajo Práctico Obligatorio (TPO)**

**[🇬🇧] Mandatory Practical Project**

January 2023, Buenos Aires

<br>
Author: Carlos Higuerey

***

**Table of Contents:**

- [Time and Work Management](#time-and-work-management)
- [Application Requisites](#application-requisites)
  * [Database](#database)
  * [Back-end](#back-end)
  * [Planning](#planning)
  * [Database](#database-1)
  * [Back-End](#back-end)
  * [Front-End](#front-end)
  * [Deploy](#deploy)
  * [Documentation](#documentation)
- [Conclusion](#conclusion)


***

# Time and Work Management
All the work stated in here is created for a first timer on the creation of a web app. During this time I will be learning how to use and implement correctly all the technologies, analysis and design interfaces, models and architechture and software requiered for this web application.

## Estimations and Sections
For each part we have:

| Subject       | Time        | Technologies                                                         |
| ------------- | ----------- | -------------------------------------------------------------------- |
| Planning      | 3 Days      | Excel, SCRUM, Microsoft To Do, <br>Figma.                            |
| Database      | 3 Days      | MySQL, XAMPP.                                                        |
| Back-End      | 7 Days      | Java, Spring Boot, Postman.                                          |
| Front-End     | 14 Days     | HTML, CSS, JavaScript, Bootstrap, <br> Angular, Node.JS, Typescript. |
| Deploy        | 3 Days      | Clevercloud, Koyeb, Firebase.                                        |
| Documentation | 2 Days      | Github, Markdown.                                                    |
| **Total**     | **32 Days** |


The time dedicated for this project is planned to be attended **from 4 to 6 hours each day**, mainly taking the weekdays, from *Monday to Friday*, without exception of using *Weekends* if required.

<br>

# Application Requisites

## Database

The first affair required to this appliaction is a place to storage our information, since we plan to build a simple **CRUD** to display projects information, the data stored.


## Back-end

An API is required to exchange information from our **CRUD**, so the back-End consists on a standard repository and creation of the class *Project*  that will store the fields and its type as:

- `ID`: *Number*

- `Title`: *String*

- `Tech`: *String*

- `Link`: *String*
<br>

Also we will have functions that will get all projects, a single project, add a new one, edit an existing and delete using HTTP protocols:

- `GET` allProjects() - To recieve all the data stored.

- `GET` getProject(*id*) - To pick an entry by *id* and recieve it´s data.

- `POST` addProject(*project*) - To include a new entry using *project* data.

- `PUT` editProject(*id*, *project*) - To find an entry by *id* and replace its data with the existing in *project*.

- `DELETE` deleteProject(*id*)- To erase an entry from our database following *id*.
<br>

## Front-End
It´s required to create a preview of our webpage style, as well as add information relevant to make it a Portfolio that displays our own information as well as our projects stored, making possible to use our Add, Get, Edit and Delete function using forms or menus when needed.


# Action Taken per Section

## Planning

To start this project I needed to clarify what was required, so to take time to organize the needed, establish objectives and review the information available and documentation as to beginning point.

## Database

We start with the part to storage our data; the Database. We reviewed Database design, patterns and good practices, reaching a script fitting for this aplication and storing any project information inside.

The script can be found as `DBMyProjects Script.sql` in [Back-End Repository][Back-End Repository].

## Back-End

With our DB created we proceed to make our Back-end to send, fetch and delete data. We use Postman to try the connection using HTTP protocols for each action available. The full repository of Back-End can be see in [Back-End Repository][Back-End Repository].

## Front-End

Using the template for the application that was created with Figma, we proceed to create the overview of the page using HTML, CSS and Bootstrap.

In [Front-End Repository](https://github.com/carlohigue/AP-TPO-Front-End "Front-End Repository") you will find `MyProjects-FigmaDesign.fig`.

For the list of projects, which would be displayed determined on the amount of projects gathered from our API, we listed them using an Angular iteration, granting each entry the same characteristics so edition could be done comfortably.
Addition was implemented in a modal, since it doesn´t require the list of projects, on the other hand edition needed to pick a project by clicking so it was added as a menu displayed only when selecting an item. Finally deletion, since is a dangerous section was  implemented with a warning, using browser alerts and confirmation, making clear it´s a grave action.

## Deploy

We had our application running locally correctly, so we proceed to deploy each part on a different server, for the:
- `DB` Clevercloud.
- ` Back-End API` Koyeb.
- `Front-End` Firebase.
This last deployment arose new issues that were addressed and fixed to display our functioning app.

## Documentation

Now with  our project done, we document their sections, technologies, and add everything to our repository in order to allow anyone else to review and understand the use  given for each.

# Conclusion

The created app from time to time shows little to no response due to the free services used to deploy it. Despite this issue, it's working as intended, retrieving, editing and deleting information as a CRUD and displaying a good design of th e creator curriculum as static web page.

[Back-End Repository]: https://github.com/carlohigue/AP-TPO-Back-End "Back-End Repository"
