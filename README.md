# Library Management System

A web-based Library Management System developed using Python, Flask, and MySQL to manage library operations through a simple and user-friendly interface.

## Features

- Admin Login
- Dashboard with library statistics
- Manage Books
- Manage Students
- Issue Books
- Return Books
- Manage Fines
- MySQL database integration

## Technologies Used

- **Frontend:** HTML, CSS
- **Backend:** Python, Flask
- **Database:** MySQL
- **Development Tool:** Visual Studio Code
- **Version Control:** Git and GitHub

## Project Structure

```text
Library Management System/
├── app.py
├── base.html
├── db.py
├── check_tables.py
├── create_admin.py
├── test_db.py
├── requirements.txt
├── Dump20260809/
│   └── Dump20260809.sql
└── templates/
    ├── books.html
    ├── dashboard.html
    ├── issue_book.html
    ├── login.html
    ├── manage_fine.html
    ├── return_book.html
    └── students.html
```

## Prerequisites

- Python 3
- MySQL Server
- pip
- Git

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

### 4. Configure MySQL

- Start your MySQL server.
- Create or restore the `library_management` database.
- Import the provided SQL dump using MySQL tools.
- Configure your local database connection settings without committing passwords or secret keys to GitHub.

### 5. Run the Application

```bash
python app.py
```

Open the local URL shown in the terminal in your web browser.

## Security

- Do not commit database passwords, secret keys, or personal information.
- Keep local configuration files out of version control.
- Review the SQL dump before making the repository public.

## Author

Developed as a B.Tech Computer Science and Engineering project.
