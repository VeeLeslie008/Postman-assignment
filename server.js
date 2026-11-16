const express = require('express');
const app = express();
const PORT = 3000;

//Middleware to receive JSON data
app.use(express.json());

// Hardcoded students data

let students = [
    {
        id: 1,
        name: 'Leslie',
        email: 'leslie@gmail.com',
        course: 'Backend Development'
    },
    {
        id: 2,
        name: 'Mary',
        email: 'mary@gmail.com',
        course: 'Frontend Development'
    },
    {
        id: 3,
        name: 'Peter',
        email: 'peter@gmail.com',
        course: 'Mobile Development'
    }
];

students.push({
    id: 4,
    name: 'Douglas',
    email:'douglas@gmail.com',
    course:'App Development',
});

// get all CRUD METHOD(Read to be precised)

app.get('/api/students', (req, res) => {
    res.status(200).json({
        success: true,
        message: 'All the students',
        data: students
    });
});

// get only the student with id 2 CRUD METHOD(Read)

app.get('/api/students/2', (req, res) => {
    res.status(200).json({
        success: true,
        message: 'Student 2',
        data: students[1],
    });
});

// change the course of the student with id 3 to UI/UX CRUD METHOD(Update)

app.put('/api/students/3', (req, res) => {
    students[2].course = 'UI/UX';
    
    res.status(200).json({
        success: true,
        message: 'Student updated successfully',
        data: students[2]
    });
});

//Start server

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
});