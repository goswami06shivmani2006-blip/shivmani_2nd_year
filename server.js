const express = require('express');

const app = express();

app.use(express.json());

// Initial student records
let students = [
    {
        id: 201,
        rollNumber: "CSE2401",
        name: "Aarav Sharma",
        branch: "CSE",
        semester: 3,
        email: "aarav@example.com"
    },
    {
        id: 202,
        rollNumber: "ECE2402",
        name: "Diya Verma",
        branch: "ECE",
        semester: 3,
        email: "diya@example.com"
    },
    {
        id: 203,
        rollNumber: "CSE2403",
        name: "Kabir Singh",
        branch: "CSE",
        semester: 3,
        email: "kabir@example.com"
    }
];

// GET all students
app.get('/api/students', (req, res) => {
    res.status(200).json(students);
});
// POST a new student
app.post('/api/students', (req, res) => {
    const { rollNumber, name, branch, semester, email } = req.body;

    // Validate required fields
    if (!rollNumber || !name || !branch || !semester || !email) {
        return res.status(400).json({
            message: "All fields are required"
        });
    }

    // Check duplicate roll number
    const existingStudent = students.find(
        student => student.rollNumber === rollNumber
    );

    if (existingStudent) {
        return res.status(400).json({
            message: "Roll number already exists"
        });
    }

    // Generate unique numeric ID
    const newId = Math.max(...students.map(s => s.id)) + 1;

    // Create new student
    const newStudent = {
        id: newId,
        rollNumber,
        name,
        branch,
        semester: Number(semester),
        email
    };

    // Add student to array
    students.push(newStudent);

    // Return created student
    res.status(201).json(newStudent);
});
// GET student by ID
app.get('/api/students/:id', (req, res) => {
    const id = Number(req.params.id);

    const student = students.find(s => s.id === id);

    if (!student) {
        return res.status(404).json({
            message: "Student not found"
        });
    }

    res.status(200).json(student);
});
// PUT - Update student
app.put('/api/students/:id', (req, res) => {
    const id = Number(req.params.id);

    const studentIndex = students.findIndex(s => s.id === id);

    if (studentIndex === -1) {
        return res.status(404).json({
            message: "Student not found"
        });
    }

    const { rollNumber, name, branch, semester, email } = req.body;

    students[studentIndex] = {
        ...students[studentIndex],
        rollNumber,
        name,
        branch,
        semester: Number(semester),
        email
    };

    res.status(200).json({
        message: "Student updated successfully",
        student: students[studentIndex]
    });
});
// DELETE student by ID
app.delete('/api/students/:id', (req, res) => {
    const id = Number(req.params.id);

    const studentIndex = students.findIndex(s => s.id === id);

    if (studentIndex === -1) {
        return res.status(404).json({
            message: "Student not found"
        });
    }

    const deletedStudent = students.splice(studentIndex, 1);

    res.status(200).json({
        message: "Student deleted successfully",
        student: deletedStudent[0]
    });
});
// Start server
const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});