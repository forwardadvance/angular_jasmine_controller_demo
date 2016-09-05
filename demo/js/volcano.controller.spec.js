// Karma
// Introducing Node
// Introducting npm
// init
// describe
// it
// expect
// toBe
// not
// toEqual
// beforeEach
// toBeDefined

describe('volcanoController', function() {

  // Load the module with volcanoController
  beforeEach(module('app'));

  var scope;
  // inject the $controller and $rootScope services
  beforeEach(inject(function($controller, $rootScope) {
    // Create a new scope from $rootScope
    scope = $rootScope.$new();
    // Instantiate the controller
    $controller('volcanoController', {
      $scope: scope
    });
  }));

  it('should have a volcano', function() {
    expect(scope.volcano).toBeDefined();
  });

  it('should be able to make the volcano erupt', function() {
    scope.erupt();
    expect(scope.volcano.erupting).toBe(true);
  });

  // it('is able to add numbers', function() {
  //   expect( {} ).toEqual( {} );
  //   // expect( 1 + 1 ).toEqual(2);
  //   // expect( 1 + 1 ).not.toEqual(3);
  // });
  // it('is able to subtract numbers', function() {
  //   expect( 1 - 1 ).toEqual(0);
  // });
});


  // // Load the module with volcanoController
  // beforeEach(module('app'));


  // var scope, ctrl;
  // // inject the $controller and $rootScope services
  // beforeEach(inject(function($controller, $rootScope) {
  //   // Create a new scope from $rootScope
  //   scope = $rootScope.$new();
  //   // Instantiate the controller
  //   ctrl = $controller('volcanoController', {
  //     $scope: scope
  //   });
  // }));

  // it('should work wonderfully', function() {
  //   expect(1+1).toBe(2)
  // })





// Initial State
// describe('Unit: volcanoController', function() {

// });


// Final State


// describe('Unit: volcanoController', function() {

//   // it('should do nicely', function() {
//   //   expect({}).toEqual({});
//   // })

//   // Load the module with volcanoController
//   beforeEach(module('app'));

//   var scope;
//   // inject the $controller and $rootScope services
//   beforeEach(inject(function($controller, $rootScope) {
//     // Create a new scope from $rootScope
//     scope = $rootScope.$new();
//     // Instantiate the controller
//     $controller('volcanoController', {
//       $scope: scope
//     });
//   }));

//   it('should have a hamster', function() {
//     expect(scope.hamster).toBeDefined();
//   });

//   it('should say hello to Hammy', function() {
//     scope.sayHello();
//     expect(scope.greeting).toBe('Hello Hammy');
//   });

//   it('should say hello to Marty', function() {
//     scope.hamster = "Marty";
//     scope.sayHello();
//     expect(scope.greeting).toBe('Hello Marty');
//   });

// });
