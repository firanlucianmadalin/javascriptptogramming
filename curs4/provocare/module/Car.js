class Car {
 
    constructor(){
        //the private access modifier denies access to the method from outside the class scope
      this._model = '';
    }
   
    //the public access modifier allows the access to the method from outside the class
    setModel(model)
    {
      //validate that only certain car models are assigned to the $carModel property
      let allowedModels = ["Mercedes benz","BMW"];
      if(allowedModels.includes(model))
         this._model = model;
      else
         this._model = "not in our list of models.";
    }
    
    getModel()
    {
      return "The car model is " + this._model;
    }
  }
   
   
//   let mercedes = new Car();
//   //Sets the car model
//   mercedes.setModel("Mercedes benz");
//   //Gets the car model
//   console.log(mercedes.getModel());
  