<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Simple Quiz</title>
  
  <!-- Link to your external CSS file -->
  <link rel="stylesheet" href="styles.css">

</head>
<body>
  <div class="quiz-container">
    <h1>Simple Quiz</h1>
    <div id="question-container">
      <p id="question">What is your favorite color?</p>
      <button onclick="selectAnswer('Pink')">Pink</button>
      <button onclick="selectAnswer('Blue')">Blue</button>
      <button onclick="selectAnswer('Yellow')">Yellow</button>
      <button onclick="selectAnswer('Green')">Green</button>
    </div>
    <p id="score"></p>
  </div>

  <!-- Link to your external JavaScript file -->
  <script src="app.js"></script>

</body>
</html>
