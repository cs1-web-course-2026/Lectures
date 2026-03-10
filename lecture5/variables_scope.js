// 1. GLOBAL SCOPE
const globalVar = 'I am everywhere';

function scopeShowcase() {
  // 2. FUNCTION SCOPE
  // Accessible anywhere inside this function
  var functionScoped = 'I am function-scoped (var)';
  let functionLet = 'I am function-scoped (let)';

  function testVisibility() {
    var isVisible = true;
    let isAvailable = false;
  }

  if (true) {
    var isVisible2 = false;
    let isAvailable2 = false;

    for (let i = 0; i < 10; i++) {
      var isVisible3 = false;
      let isAvailable3 = false;
    }

    const getElement = () => {};
  }

  // console.log('isVisible -', isVisible); // Error
  console.log('isVisible 2 -', isVisible2);
  // console.log('isAvailable -', isAvailable);
  console.log('isVisible3 -', isVisible3);
  // console.log('isAvailable3 -', isAvailable3);

  if (true) {
    // 3. BLOCK SCOPE (Inside { })
    var stillFunctionScoped = 'I leaked out of the block!'; // var ignores blocks
    let blockScoped = 'I am trapped in this IF block'; // let/const stay here
    const alsoBlockScoped = 'Me too';

    console.log(blockScoped); // "I am trapped..." (Works)
    console.log(functionScoped); // "I am function-scoped..." (Works)
    console.log(functionLet); // "I am function-scoped..." (Works)
  }

  // --- Checking the results outside the block ---
  console.log(stillFunctionScoped); // "I leaked..." (var is visible here!)

  try {
    console.log(blockScoped);
  } catch (e) {
    console.log('blockScoped is NOT defined here'); // Error: let/const are block-scoped
  }

  console.log(globalVar); // "I am everywhere" (Global is accessible)
}

scopeShowcase();

// 4. ACCESS FROM OUTSIDE
try {
  console.log(functionScoped);
} catch (e) {
  console.log('functionScoped is NOT accessible outside the function');
}

try {
  console.log(functionLet);
} catch (e) {
  console.log('functionLet is NOT accessible outside the function');
}
