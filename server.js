const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Pre-registered students
let registeredStudents = [
  { name: "Rahul Kumar", roll: "2024001", className: "10A" },
  { name: "Priya Sharma", roll: "2024002", className: "10A" },
  { name: "Amit Singh", roll: "2024003", className: "10A" },
  { name: "Neha Verma", roll: "2024004", className: "10A" },
  { name: "Karan Mehta", roll: "2024005", className: "10B" },
  { name: "Sakshi Gupta", roll: "2024006", className: "10B" },
  { name: "Vikram Chauhan", roll: "2024007", className: "10B" },
  { name: "Anjali Yadav", roll: "2024008", className: "10C" },
  { name: "Mohit Rathi", roll: "2024009", className: "10C" },
  { name: "Pooja Nair", roll: "2024010", className: "10C" }
];

// Attendance records
let studentsAttendance = [];

// ✅ Get attendance records
app.get("/attendance", (req, res) => {
  res.json(studentsAttendance);
});

// ✅ Mark attendance (Present/Absent)
app.post("/attendance", (req, res) => {
  const { roll, status } = req.body;
  const time = new Date().toLocaleTimeString();

  // Lookup student
  const student = registeredStudents.find(s => s.roll === roll);
  if (!student) {
    return res.status(400).json({ message: "❌ Student not registered." });
  }

  const record = {
    name: student.name,
    roll: student.roll,
    status: status || "Present",
    time
  };

  studentsAttendance.unshift(record);
  res.json({ message: `Attendance marked as ${record.status} for ${student.name}`, record });
});

// ✅ Get registered students (for UI list)
app.get("/students", (req, res) => {
  res.json(registeredStudents);
});

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
