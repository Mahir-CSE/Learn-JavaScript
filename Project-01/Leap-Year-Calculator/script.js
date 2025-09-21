// Leap Year Checker JavaScript

// Main function to check if a year is a leap year
function checkLeapYear() {
    const yearInput = document.getElementById('yearInput');
    const resultDiv = document.getElementById('result');
    const button = document.querySelector('button');
    
    // Get the year from input and convert to integer
    let year = parseInt(yearInput.value);
    
    // Add loading effect
    button.classList.add('loading');
    
    // Simulate a small delay for better UX
    setTimeout(() => {
        button.classList.remove('loading');
        
        // Validation - check if input is valid
        if (isNaN(year) || year <= 0) {
            showResult(resultDiv, false, 'Please enter a valid year!', 'Invalid input. Please enter a positive number.');
            return;
        }
        
        // Leap year logic
        let isLeapYear = false;
        let explanation = '';
        
        // Method 1: Using logical operators (most concise)
        if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
            isLeapYear = true;
            
            // Provide detailed explanation
            if (year % 400 === 0) {
                explanation = `${year} is divisible by 400, so it's a leap year!`;
            } else {
                explanation = `${year} is divisible by 4 but not by 100, so it's a leap year!`;
            }
        } else {
            isLeapYear = false;
            
            // Explain why it's not a leap year
            if (year % 4 !== 0) {
                explanation = `${year} is not divisible by 4, so it's not a leap year.`;
            } else if (year % 100 === 0) {
                explanation = `${year} is divisible by 100 but not by 400, so it's not a leap year.`;
            }
        }
        
        // Display result
        const resultText = isLeapYear ? `🎉 ${year} is a LEAP YEAR!` : `❌ ${year} is NOT a leap year`;
        showResult(resultDiv, isLeapYear, resultText, explanation);
        
    }, 300);
}

// Function to display the result with proper styling
function showResult(resultDiv, isLeapYear, resultText, explanation) {
    const resultClass = isLeapYear ? 'leap-year' : 'not-leap-year';
    
    resultDiv.innerHTML = `
        <div class="result ${resultClass}">
            ${resultText}<br>
            <small>${explanation}</small>
        </div>
    `;
}

// Alternative method using nested if-else (for learning purposes)
function checkLeapYearNested(year) {
    if (year % 4 === 0) {
        if (year % 100 === 0) {
            if (year % 400 === 0) {
                return true; // Divisible by 400
            } else {
                return false; // Divisible by 100 but not 400
            }
        } else {
            return true; // Divisible by 4 but not 100
        }
    } else {
        return false; // Not divisible by 4
    }
}

// Alternative method using ternary operator
function checkLeapYearTernary(year) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0 
        ? `${year} is a leap year` 
        : `${year} is not a leap year`;
}

// Event listener for Enter key press
document.addEventListener('DOMContentLoaded', function() {
    const yearInput = document.getElementById('yearInput');
    
    // Allow Enter key to trigger the check
    yearInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            checkLeapYear();
        }
    });
    
    // Focus on input when page loads
    yearInput.focus();
    
    // Clear result when user starts typing new number
    yearInput.addEventListener('input', function() {
        const resultDiv = document.getElementById('result');
        if (resultDiv.innerHTML !== '') {
            resultDiv.innerHTML = '';
        }
    });
});

// Console testing (for development/learning purposes)
console.log("=== Leap Year Checker Loaded ===");

// Test function for various years
function testLeapYears() {
    const testYears = [2024, 2023, 2000, 1900, 2004, 1800, 2400];
    
    console.log("Testing leap years:");
    testYears.forEach(year => {
        const isLeap = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
        console.log(`${year}: ${isLeap ? 'Leap Year' : 'Not Leap Year'}`);
    });
}

// Uncomment the line below to run tests in console
// testLeapYears();

// Function to validate year input
function validateYear(year) {
    return !isNaN(year) && year > 0 && Number.isInteger(year);
}

// Function to get current year for default suggestions
function getCurrentYear() {
    return new Date().getFullYear();
}

// Add placeholder with current year
document.addEventListener('DOMContentLoaded', function() {
    const yearInput = document.getElementById('yearInput');
    const currentYear = getCurrentYear();
    yearInput.placeholder = `e.g., ${currentYear}`;
});