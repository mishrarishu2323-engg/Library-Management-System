# Library Management System

A web-based **Library Management System** developed using Python, Flask, MySQL, and JavaScript to simplify and manage library operations through a user-friendly and responsive interface.

The system provides essential library management features, including book and student management, book issuing and returning, overdue book tracking, fine management, and QR code-based book operations.

## Features

### Admin & Dashboard
- Admin Login and Authentication
- Dashboard with Library Statistics
- Overview of Books, Students, Categories, and Issued Books
- Overdue Books Tracking

### Book & Student Management
- Add, View, and Manage Books
- Add, View, and Manage Students
- Book Availability Management
- Student Active/Inactive Status Management

### Book Issue & Return
- Issue Books to Students
- Return Issued Books
- Manual Book Issue and Return
- Due Date Management
- Automatic Book Availability Updates

### QR Code Functionality
- QR Code Generation for Books
- Camera-Based QR Code Scanning
- Automatic Book Selection During Issue
- QR-Based Book Identification During Return

### Fine Management
- Fine Calculation for Late Returns
- Manage and View Fines
- Fine Payment Management
- Paid and Unpaid Fine Tracking

### Responsive User Interface
- Mobile-Friendly and Responsive Design
- Desktop and Mobile Compatibility
- Mobile Hamburger Menu and Sidebar Navigation
- Responsive Dashboard and Page Layouts
- Horizontally Scrollable Tables on Small Screens
- Mobile-Optimized Forms and Buttons
- Improved Mobile Navigation and Logout Button Layout

## Technologies Used

| Component | Technology |
|---|---|
| Frontend | HTML5, CSS3, JavaScript |
| Backend | Python, Flask |
| Database | MySQL / TiDB Cloud |
| QR Code Generation | Python `qrcode[pil]` |
| QR Code Scanning | `html5-qrcode` JavaScript Library |
| Development Tool | Visual Studio Code |
| Version Control | Git and GitHub |
| Deployment | Render |

## Project Structure

```text
Library Management System/
│
├── app.py
├── base.html
├── config.py
├── db.py
├── check_tables.py
├── create_admin.py
├── test_db.py
├── requirements.txt
├── README.md
│
├── Dump20260809/
│   └── Dump20260809.sql
│
├── static/
│   ├── responsive.css
│   └── js/
│       └── responsive.js
│
└── templates/
    ├── books.html
    ├── dashboard.html
    ├── issue_book.html
    ├── login.html
    ├── manage_fine.html
    ├── return_book.html
    ├── overdue_books.html
    └── students.html
```

## Prerequisites

Before running the project, make sure you have:

- Python 3
- MySQL Server or TiDB Cloud account
- pip (Python Package Installer)
- Git
- Visual Studio Code (Recommended)

## Installation and Setup

### 1. Clone the Repository

```bash
git clone https://github.com/mishrarishu2323-engg/Library-Management-System.git
cd Library-Management-System
```

### 2. Create a Virtual Environment

```bash
python -m venv venv
```

Activate the virtual environment on Windows:

```powershell
.\venv\Scripts\Activate.ps1
```

### 3. Install Dependencies

```bash
pip install -r requirements.txt
```

### 4. Configure the Database

- Start your MySQL server or configure your TiDB Cloud database.
- Create or restore the `library_management` database.
- Import the provided SQL dump if required.
- Configure database connection details using environment variables.
- Ensure that the database credentials and secret keys are properly configured.

**Important:** Never commit database passwords, secret keys, or other sensitive credentials to GitHub.

### 5. Run the Application

```bash
python app.py
```

Open the local URL displayed in the terminal in your web browser.

## QR Code Functionality

The system provides QR code functionality to make book operations faster and more convenient.

- Each book can be identified using its unique QR code.
- QR codes contain the corresponding Book ID.
- Scan book QR codes using a device camera.
- Automatically select the corresponding book during the Issue Book process.
- Identify issued books through QR scanning during the Return Book process.
- Manual book issue and return options are also available.

**Note:** Camera-based QR scanning requires camera permission and a secure browser context (HTTPS or localhost).

## Responsive Design

The application includes a responsive interface designed for both desktop and mobile devices.

- Desktop layout is maintained.
- Mobile navigation uses a hamburger menu.
- Sidebar navigation is optimized for smaller screens.
- Dashboard cards and page content adjust to screen size.
- Tables support horizontal scrolling on mobile devices.
- Forms, buttons, and navigation elements are optimized for mobile use.

## Database Information

The project uses MySQL / TiDB Cloud for storing and managing library records.

The database includes the following main tables:

- `admin`
- `books`
- `categories`
- `students`
- `book_issues`
- `fines`

A database SQL dump is provided in the `Dump20260809/` directory.

## Deployment

The application can be deployed using **Render** with a configured MySQL-compatible database such as TiDB Cloud.

Deployment requires the appropriate environment variables and database connection settings.

## Security

- Do not commit database passwords or secret keys.
- Keep local environment files out of version control.
- Use environment variables for sensitive configuration.
- Review the SQL dump before making the repository public.
- Use secure database credentials and appropriate access permissions.

## Author

Developed as a **B.Tech Computer Science and Engineering project**.

**GitHub Repository:**  
https://github.com/mishrarishu2323-engg/Library-Management-System