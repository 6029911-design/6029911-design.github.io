$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "rgb(118, 0, 233)"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    toggleGrid();


    // TODO 2 - Create Platforms
   createPlatform(600, 650, 300, 10, "hotpink");
   createPlatform(900, 550, 200, 10, "hotpink");
   createPlatform(1350, 400, 50, 10, "hotpink");
   createPlatform(1100, 450, 300, 10, "hotpink");
   createPlatform(700, 400, 300, 10, "hotpink");
   createPlatform(400, 300, 300, 10, "hotpink");
   createPlatform(100, 200, 300, 10, "hotpink");
    // TODO 3 - Create Collectables
   createCollectable("steve", 200, 185);
   createCollectable("steve", 800, 385);
  createCollectable("diamond", 500, 280);

    
    // TODO 4 - Create Cannons
  createCannon("top", 200, 500);
  createCannon("right", 300, 2000);
  createCannon("top", 900, 900);
    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
