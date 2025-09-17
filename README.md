Smart School Attendance System - README
Overview
The Smart School Attendance System is a web-based application designed to help rural schools manage student attendance and mid-day meal tracking efficiently. It provides a simple, user-friendly interface for teachers to mark attendance, register new students, generate reports, and track meal distribution.

Features
Teacher Authentication

Secure login with username and password

Default credentials: username="teacher", password="1234"

Dashboard

Real-time statistics showing total students, present today, and absent today

Visual representation with gradient cards

Attendance Management

Mark students as present or absent with a single click

View current attendance status for all students

Delete student records when needed

Student Registration

Add new students with name and roll number

Simple form with validation

Reporting

View attendance reports in tabular format

Export data to CSV for record-keeping

Meal Tracking

Automatically track mid-day meals based on attendance

Display list of students receiving meals

Show total meals distributed for the day

Technical Details
Frontend: HTML5, CSS3, JavaScript (ES6)

Storage: LocalStorage for data persistence

Styling: Custom CSS with gradient backgrounds and responsive design

Icons: Font Awesome for UI icons

Responsive Design: Works on both desktop and mobile devices

Installation & Usage
Download or copy the HTML file

Open it in any modern web browser

Login with the default credentials

Start managing attendance and meals

Data Structure
Students are stored as objects with the following properties:

javascript
{
  id: Number (unique identifier),
  name: String,
  roll: String,
  present: Boolean (attendance status)
}
Browser Compatibility
Compatible with all modern browsers that support:

ES6 JavaScript features

CSS Grid and Flexbox

LocalStorage API

Security Notes
This is a frontend-only application with basic authentication

For production use, consider adding:

Backend authentication

Data encryption

Secure database storage

Proper user session management

Customization
The system can be easily customized by:

Modifying the CSS variables for different color schemes

Adding new student fields in the registration form

Extending the reporting functionality

Integrating with backend services

Limitations
Data is stored locally in the browser (cleared if cache is cleared)

No multi-user support

No historical data tracking (only current day attendance)

Future Enhancements
Potential improvements for the system:

Monthly/yearly attendance tracking

Student performance records

Parent portal access

SMS notifications for absent students

Data backup functionality

Multi-class support

Support
For questions or issues with the Smart School Attendance System, please ensure:

You're using a supported browser

JavaScript is enabled

You're using the correct login credentials