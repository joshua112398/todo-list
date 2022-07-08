# ROADBLOCKS

Using "lastChild" to remove the last element child of an element instead of "lastElementChild". Using the former takes into account other things like text content, not just elements. Hence, I needed to use the latter to successfully remove the last child element.

I also had issues with having one "click" eventListener for a checkbox, and another different "click" eventListener for the div container that contains the checkbox. When I click on the checkbox, it performs the event function for the checkbox, but due to the bubbling effect it then propagates and also runs the event function for the div container, which is not what I want. I had to use the event.stopPropagation() method to disable this.

I'm still also having issues with separating the code, especially separating the DOM modification code from the logic code, as well as minimizing coupling between objects and modules. 

Another issue I came up with is in regards to object properties and factory functions in JavaScript. When a factory function returns a data member (like a boolean value or a string) as part of the object, trying to retrieve this value will always give you the same value as when the object was first created from the factory function. This is because the factory function is only ever run ONCE for each object created and thus will return the created object only once. Hence, it will not see any future updates to its data members if you try to retrieve the data members directly. To get around this, you must use a getter function. The getter function will have closure and will see the updated value. 