<?php
// login.php
$host = 'localhost'; // или другой хост базы данных
$dbname = 'aniworld';
$username = 'root';
$password = 'root';

// Подключение к базе данных
$pdo = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);

// Получение данных из POST-запроса
$email = $_POST['email'];
$password_input = $_POST['password']; // Пароль, введенный пользователем

// Поиск пользователя по email
$sql = "SELECT * FROM users WHERE email = ?";
$stmt = $pdo->prepare($sql);
$stmt->execute([$email]);
$user = $stmt->fetch();

if ($user) {
    // Проверка пароля
    if (password_verify($password_input, $user['password'])) {
        // Начало сессии пользователя
        session_start();
        $_SESSION['user_id'] = $user['id'];
        $_SESSION['username'] = $user['username'];
        // Переадресация или вывод сообщения о успешном входе
        echo "Вы успешно вошли! Добро пожаловать, " . htmlspecialchars($user['username']) . ".";
    } else {
        echo "Неверный пароль!";
    }
} else {
    echo "Пользователь с таким email не найден.";
}
header('Location: index.html');
exit();
?>
