# Age Calculator 🎂

A simple and user-friendly web application to calculate your exact age in years, months, and days.

## 📋 Overview

Age Calculator is a lightweight web application built with vanilla HTML, CSS, and JavaScript. It allows users to calculate their precise age and provides additional information like days until the next birthday and the day of the week they were born.

## ✨ Features

- **Precise Age Calculation**: Calculate age in years, months, days, hours, and minutes
- **Birthday Countdown**: Shows days remaining until next birthday
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Real-time Results**: Instant calculation upon date input
- **Clean UI**: Simple and intuitive user interface
- **Birth Day Info**: Shows which day of the week you were born
- **Multiple Age Formats**: Display age in different units (days, hours, minutes)

## 🚀 Technologies Used

- **HTML5**: Structure and markup
- **CSS3**: Styling and responsive design
- **Vanilla JavaScript**: Logic and calculations
- **No external dependencies**: Pure web technologies only

## 📦 Installation & Setup

### Quick Start

1. Clone or download the repository:
```bash
git clone https://github.com/yourusername/age-calculator.git
cd age-calculator
```

2. Open `index.html` in your web browser, or serve it locally:
```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx serve .

# Using PHP
php -S localhost:8000
```

3. Navigate to `http://localhost:8000` or simply double-click `index.html`

## 🔧 How to Use

1. **Enter Birth Date**: Select your birth date using the date picker
2. **Click Calculate**: Press the "Calculate Age" button
3. **View Results**: See your age displayed in multiple formats:
   - Age in years, months, and days
   - Total days lived
   - Age in hours and minutes
   - Days until next birthday
   - Day of the week you were born

## 📁 Project Structure

```
age-calculator/
│
├── index.html          # Main HTML file
├── css/
│   └── style.css       # Main stylesheet
├── js/
│   └── script.js       # JavaScript logic
├── assets/
│   └── favicon.ico     # Site icon
├── README.md           # Project documentation
└── LICENSE             # Project license
```

## 🎯 Code Example

```javascript
// Example of age calculation function
function calculateAge(birthDate) {
    const today = new Date();
    const birth = new Date(birthDate);
    
    let years = today.getFullYear() - birth.getFullYear();
    let months = today.getMonth() - birth.getMonth();
    let days = today.getDate() - birth.getDate();
    
    if (days < 0) {
        months--;
        days += getDaysInMonth(today.getMonth() - 1, today.getFullYear());
    }
    
    if (months < 0) {
        years--;
        months += 12;
    }
    
    return { years, months, days };
}
```

## 🎨 Customization

### Changing Colors
```css
:root {
    --primary-color: #007bff;
    --secondary-color: #6c757d;
    --success-color: #28a745;
    --background-color: #f8f9fa;
    --text-color: #333;
}
```

### Modifying Layout
The CSS uses Flexbox for responsive layout. You can easily modify the layout by editing the CSS classes in `style.css`.

### Adding Features
The JavaScript is modular and well-commented, making it easy to add new features like:
- Different date formats
- Age in weeks
- Zodiac sign calculation
- Age comparison with famous people

## 🧪 Testing

Test the application with various scenarios:
- Different birth dates (past and present)
- Leap years (February 29th)
- Edge cases (today's date as birth date)
- Different browsers and devices
- Future dates (should show error)

## 🤝 Contributing

Contributions are welcome! To contribute:

1. Fork the project
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 Future Enhancements

- [ ] Add age comparison with celebrities
- [ ] Include zodiac sign calculation
- [ ] Add age in weeks calculation
- [ ] Implement date validation
- [ ] Add print/export functionality
- [ ] Include age milestones (Sweet 16, 18, 21, etc.)
- [ ] Add multiple language support
- [ ] Include age statistics and facts

## 🐛 Bug Reports

If you find a bug or have a suggestion:

1. Check existing issues first
2. Create a new issue with detailed
