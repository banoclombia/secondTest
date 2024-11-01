document.getElementById('loginForm').addEventListener('submit', handleLogin);
document.getElementById('gradesForm').addEventListener('submit', handleGrades);

function handleLogin(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const user = authenticateUser(username, password);

    if (user) {
        document.getElementById('responseMessage').innerText = 'Login successful!';
        document.querySelector('.grades-container').style.display = 'block';
        document.querySelector('.login-container').style.display = 'none';
    } else {
        document.getElementById('responseMessage').innerText = 'Invalid credentials.';
    }
}
function handleGrades(event) {
    event.preventDefault();

    const studentName = document.getElementById('studentName').value;
    const grades = getGrades();

    const average = calculateAverage(grades);
    const status = determineStatus(studentName, average);

    document.getElementById('gradesMessage').innerText = status;
}

function authenticateUser(username, password) {
    const users = [
        { username: 'user1', password: 'password1' },
        { username: 'user2', password: 'password2' }
    ];

    return users.find(u => u.username === username && u.password === password);
}

function getGrades() {
    return [
        parseFloat(document.getElementById('grade1').value),
        parseFloat(document.getElementById('grade2').value),
        parseFloat(document.getElementById('grade3').value),
        parseFloat(document.getElementById('grade4').value),
        parseFloat(document.getElementById('grade5').value)
    ];
}

function calculateAverage(grades) {
    return grades.reduce((a, b) => a + b) / grades.length;
}

function determineStatus(studentName, average) {
    if (average < 3.0) {
        return `${studentName} fails.`;
    } else if (average >= 3.0 && average <= 4.0) {
        return `${studentName} passes with difficulties.`;
    } else {
        return `${studentName} passes with excellence.`;
    }
}