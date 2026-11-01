# Library Management System

A web-based Library Management System developed using Python, Flask, MySQL, and JavaScript to manage library operations through a simple and user-friendly interface.

## Features

- Admin Login
- Dashboard with Library Statistics
- Manage Books
- Manage Students
- Issue Books
- Return Books
- Overdue Books
- Manage Fines
- Book QR Code Generation
- QR Code Scanning Using Camera
- Automatic Book Selection During Issue
- Automatic Book Return Using QR Scanner
- Manual Book Issue and Return
- Book Availability Management
- Fine Calculation for Late Returns
- MySQL / TiDB Database Integration

## Technologies Used

- **Frontend:** HTML5, CSS3, JavaScript
- **Backend:** Python, Flask
- **Database:** MySQL / TiDB Cloud
- **QR Code Generation:** Python `qrcode[pil]`
- **QR Code Scanning:** `html5-qrcode` JavaScript Library
- **Development Tool:** Visual Studio Code
- **Version Control:** Git and GitHub
- **Deployment:** Render

## Project Structure

```text
Library Management System/
├── app.py
├── base.html
├── config.py
├── db.py
├── check_tables.py
├── create_admin.py
├── test_db.py
├── requirements.txt
├── README.md
├── Dump20260809/
│   └── Dump20260809.sql
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

- Python 3
- MySQL Server or TiDB Cloud
- pip
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

Activate it on Windows:

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
- Keep database passwords and secret keys secure. Never commit them to GitHub.

### 5. Run the Application

```bash
python app.py
```

Open the local URL shown in the terminal in your web browser.

## QR Code Functionality

The system provides QR code functionality for faster book management.

- Each book has a unique QR code.
- QR codes contain the corresponding Book ID.
- Scan book QR codes using the camera.
- Automatically select books during the Issue Book process.
- Automatically identify and return issued books using QR scanning.
- Manual book issue and return options are also available.

**Note:** Camera-based QR scanning requires camera permission and a secure browser context (HTTPS or localhost).

## Security

- Do not commit database passwords or secret keys.
- Keep local environment files out of version control.
- Review the SQL dump before making the repository public.
- Use environment variables for sensitive configuration.

## Author

Developed as a B.Tech Computer Science and Engineering project.