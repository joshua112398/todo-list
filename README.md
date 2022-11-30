#  To-Do List

This is my take on the classic to-do list. Users can add tasks that need to be completed and assign due dates to each task. They can also add descriptions to the tasks and modify any information on the task. Clicking the tick box will "complete" the task and remove it from the to-do list. 

Users can also create Projects as a way to group tasks into certain categories. They can choose to see only the tasks inside a specific project or all the tasks across all projects. They can also set a task as a "High Priority" task.

# Implementation

The project was written in vanilla JavaScript bundled with Webpack. The project makes use of OOP principles and JavaScript ES6 modules to reduce coupling between objects.

# Roadblocks

Using "lastChild" to remove the last element child of an element instead of "lastElementChild". Using the former takes into account other things like text content, not just elements. Hence, I needed to use the latter to successfully remove the last child element.

I also had issues with having one "click" eventListener for a checkbox, and another different "click" eventListener for the div container that contains the checkbox. When I click on the checkbox, it performs the event function for the checkbox, but due to the bubbling effect it then propagates and also runs the event function for the div container, which is not what I want. I had to use the event.stopPropagation() method to disable this.

I'm still also having issues with separating the code according to OOP principles, especially separating the DOM modification code from the logic code, as well as minimizing coupling between objects and modules. 

Another issue I came up with is in regards to object properties and factory functions in JavaScript. When a factory function returns a data member (like a boolean value or a string) as part of the object, trying to retrieve this value will always give you the same value as when the object was first created from the factory function. This is because the factory function is only ever run ONCE for each object created and thus will return the created object only once. Hence, it will not see any future updates to its data members if you try to retrieve the data members directly. To get around this, you must use a getter and a setter function. The getter and setter functions will have closure and will see the updated value. Either that, or make sure that you are modifying the value directly AND also accessing the value directly. You can't set the value with a setter function and then proceed to retrieve it directly (aka you can't mix and match). The getter and setter functions have closure and will refer to a different value than the directly-accessed value.

It's helpful to remember that factory functions are run only ONCE and then return an object ONCE.  
