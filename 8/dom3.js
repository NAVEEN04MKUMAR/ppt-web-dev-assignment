<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <h1>Hello PW Skills</h1>
    <!-- create the paragraph  -->
    <p id="js"></p>
    <!-- when we are click the button then hey function will active -->
     <button onclick="hey()" id="jss">Submit</button> 

    <script>
    //when mouse enter into the  area then it will enable the function uch as the hello
      document.addEventListener("mouseenter", hello);
      function hello() {
    //when the mouse enter into this area then js will become the namaste bachho
        document.getElementById("js").innrText = "Namaste Bachho";
      }
    //namaste will change towards the pw skills 
      function hey() {
        document.getElementById("jss").innerText = "PW SKills";
        document.getElementById("jss").style.color = "red";
        document.getElementById("jss").style.backgroundColor = "black";
        document.getElementById("jss").style.padding = "16px";
        document.getElementById("jss").style.border = "2px solid yellow";
      } 
    </script>
  </body>
</html>