<?php
// register.php
$host = 'localhost'; // или другой хост базы данных
$dbname = 'aniworld';
$username = 'root';
$password = 'root';

// Подключение к базе данных
$pdo = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);

// Получение данных из POST-запроса
$username = $_POST['username'];
$age = $_POST['age'];
$about = $_POST['about'];
$city = $_POST['city'];
$favorite_animal = $_POST['favorite_animal'];
$email = $_POST['email'];
$password = password_hash($_POST['password'], PASSWORD_DEFAULT); // Хеширование пароля

// Запрос на добавление пользователя в базу данных
$sql = "INSERT INTO users (username, age, about, city, favorite_animal, email, password) VALUES (?, ?, ?, ?, ?, ?, ?)";
$stmt = $pdo->prepare($sql);
$stmt->execute([$username, $age, $about, $city, $favorite_animal, $email, $password]);

header('Location: login.html');
exit();
?>
