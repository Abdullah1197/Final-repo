// to do list
//1. add event handler
//2. get input values
//3. add the new item to our data structure
//4. add the new item to the UI.
//5. calculate budget 
//6. update the UI

// BUDGET CONTROLLER
var budgetController = (function() {
    
    var Expense = function (id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };
    
    var Income = function (id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };
    
    
    var data = {
        allItem: {
            exp: [],
            inc: []
        },
        totals: {
            exp: 0,
            inc: 0
        }
    };
    
    return {
        addItem: function(type, des, val) {
            var newItem, ID;
            
        //[1 2 3 4 5], next ID = 6
        //[1 2 4 6 8], next ID = 9
        // ID = last ID + 1
            
            // create new ID
         if(data.allItem[type].length > 0) {
       ID = data.allItem[type][data.allItem[type].length - 1].id + 1;   
            } else  {
                ID = 0;
            }
            
            // create new item based on 'inc' or exp type
        if (type === 'exp') {
          newItem = new Expense(ID, des, val); 
               
        } else if (type === 'inc') {
            newItem = new Income(ID, des, val);
        } 
           // push it into our data structure
        data.allItem[type].push(newItem);
            
        // Return the new element
            return newItem;
       },
        
        testing: function() {
            console.log(data);
        }
   };
    
    
})();



// UI CONTROLLER
var UIController = (function() {
    
    var DOMstrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn'
    };
    
   return {
     getInput: function() {
         return {
         
        type: document.querySelector(DOMstrings.inputType).value, // will be either inc or exp
         
        description: document.querySelector(DOMstrings.inputDescription).value,
         
        value: document.querySelector(DOMstrings.inputValue).value
         
         };
      },
       getDOMstrings: function() {
           return DOMstrings;
       }
   };
    
})();


// GLOBAL APP CONTROLLER
var controller = (function(budgetCtrl, UICtrl) {
    
    
    var setupEventListner = function(){
   
       var DOM = UICtrl.getDOMstrings();
    document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);

    // this code is for when user press enter the data is added to list.
    document.addEventListener('keypress', function(event) {
        if (event.keyCode === 13 || event.which === 13) {
           
            ctrlAddItem();
        }         
    });
};
    
   var ctrlAddItem = function() {
       var input, newItem;
       
       // 1. Get the feild input data
       input = UICtrl.getInput();
       
       // 2. Add the item to the budget controller 
       newItem = budgetCtrl.addItem(input.type, input.description, input.value);
       
        // 3. Add new item ti the UI
       
        // 4. Calculate the budget
       
        // 5. Display the budget on the UI
       
   };
    
    return {
        init: function() {
            console.log('App has started.');
            setupEventListner();
        }
    };
    
})(budgetController, UIController);

controller.init();





















