# 🏏 Browser Blitz - Cricket World Cup 2026
## Debugging Challenge

Welcome to the Browser Blitz debugging challenge! Your mission is to fix a broken cricket website.

---

## 🎯 Your Mission

This is a Cricket World Cup 2026 website with **8 functional bugs** hidden in the JavaScript code. Your job is to find and fix all of them.

**Important:** There are also visual bugs (weird animations and effects) - these are **decoys**! Ignore them and focus only on broken functionality.

---

## 🚀 Setup Instructions

### Prerequisites
- Node.js (v14 or higher)
- A code editor (VS Code recommended)
- A modern web browser (Chrome, Edge, or Firefox)

### Installation

1. **Extract the files** to a folder
2. **Open terminal** in that folder
3. **Install dependencies:**
   ```bash
   npm install
   ```

4. **Start the development server:**
   ```bash
   npm run serve
   ```

5. **Open your browser** to http://localhost:8000

---

## 📁 Project Structure

```
participant-package/
├── index.html           # Home page
├── pages/
│   ├── matches.html     # Matches listing
│   ├── stats.html       # Statistics page
│   └── tickets.html     # Ticket booking
├── css/
│   └── style.css        # All styles
├── js/
│   └── main.js          # ⚠️ ALL 8 BUGS ARE IN THIS FILE
├── package.json
└── README.md
```

**Key Point:** All JavaScript bugs are in `js/main.js` - you won't need to edit HTML or CSS files.

---

## 🔍 How to Find Bugs

### Step 1: Explore the Website
Open http://localhost:8000 and click through all the pages:
- **Home** - Featured match, player search, run counter
- **Matches** - Upcoming matches, notify buttons, team filter
- **Stats** - Statistics, strike rate calculator, rankings
- **Tickets** - Ticket selection, price calculator, contact form

### Step 2: Test Every Feature
Try to use every interactive element:
- Click all buttons
- Type in all input fields
- Submit all forms
- Check if things work as expected

### Step 3: Identify What's Broken
When you find something that doesn't work:
- What did you expect to happen?
- What actually happened?
- Is there an error in the Console?

### Step 4: Find the Bug in Code
- Open `js/main.js`
- Search for the feature that's broken
- Look for the bug in that section
- Use `console.log()` to debug

### Step 5: Fix and Test
- Make your fix
- Save the file
- Refresh the browser (Ctrl+Shift+R for hard refresh)
- Test the feature again
- Move to the next bug

---

## 💡 Debugging Tools

### Browser DevTools (F12 or Right-click → Inspect)

**Console Tab:**
- Shows JavaScript errors in red
- Use `console.log(variable)` to check values
- Errors will tell you what's wrong

**Elements Tab:**
- Inspect HTML structure
- Check if element IDs and classes match your JavaScript
- Verify elements exist on the page

**Sources Tab:**
- Set breakpoints in JavaScript
- Step through code execution
- Watch variables change

### Common Console Commands:
```javascript
console.log(variableName);           // See value
console.log(typeof variableName);    // Check data type
console.log(element);                // See if element exists
```

---

## 🐛 Common Bug Patterns to Look For

### Pattern 1: String vs Number
JavaScript treats strings and numbers differently:
```javascript
// Problem: String concatenation
"4" + "6"  = "46"

// Solution: Convert to number first
parseInt("4") + parseInt("6") = 10
Number("4") + Number("6") = 10
```

### Pattern 2: Case Sensitivity
Searches and filters might not handle uppercase/lowercase:
```javascript
// Problem: Case-sensitive
"India".includes("india")  // false

// Solution: Make both lowercase
"India".toLowerCase().includes("india".toLowerCase())  // true
```

### Pattern 3: Wrong Selectors
Typos in class names or IDs:
```javascript
// Problem: Typo
document.querySelector('.notify-button')  // null (doesn't exist)

// Solution: Check HTML for correct class
document.querySelector('.notify-btn')     // works!
```

### Pattern 4: Wrong Element ID
Trying to access element with wrong ID:
```javascript
// Problem: Wrong ID
document.getElementById('rankings-table')  // null

// Solution: Check HTML for actual ID
document.getElementById('rankings-list')   // works!
```

---


## 📚 Helpful Resources

### JavaScript Documentation
- [MDN Web Docs - JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [parseInt() function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt)
- [String methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)

### DOM Manipulation
- [querySelector()](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector)
- [getElementById()](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById)
- [addEventListener()](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)

### Debugging Tips
- [Chrome DevTools Guide](https://developer.chrome.com/docs/devtools/)
- [Console API Reference](https://developer.mozilla.org/en-US/docs/Web/API/console)

---

## 🆘 Stuck? Try This:

1. **Read the error message** - Console errors tell you what's wrong
2. **Check data types** - Use `console.log(typeof variable)`
3. **Verify selectors** - Make sure class/ID names match HTML
4. **Test incrementally** - Fix one thing, test, then move on
5. **Use console.log()** - Liberally! See what values you're getting
6. **Compare HTML and JS** - Do the IDs and classes match?
7. **Check for typos** - Common in class names, IDs, variable names

### Still Stuck?
- Try using `console.log()` before and after suspicious code
- Check if elements exist: `console.log(document.getElementById('element-id'))`
- Verify event listeners are attached to correct elements
- Look at the patterns section above - most bugs follow these patterns

---

## 🎓 What You'll Learn

By completing this challenge, you'll gain experience with:

- **JavaScript Debugging** - Finding and fixing real bugs
- **Type Coercion** - Understanding string vs number issues
- **DOM Manipulation** - Working with HTML elements in JavaScript
- **Event Handling** - Attaching and debugging event listeners
- **Browser DevTools** - Using Console, Elements, and Sources tabs
- **Problem Solving** - Systematic debugging approach
- **Code Reading** - Understanding existing code quickly


## 🏆 Success Criteria

You've completed the challenge when:

- ✓ All interactive features work as expected
- ✓ No errors in the browser Console
- ✓ All searches work regardless of capitalization
- ✓ All numbers/calculations are correct
- ✓ All buttons trigger their intended actions
- ✓ All data loads and displays properly

---

## 🎉 After You Finish

Once you've fixed all bugs:
1. Test the entire site one more time
2. Make sure there are no Console errors
3. Celebrate! 🎊
4. Review your fixes - what did you learn?
5. Compare with others - did you fix bugs differently?

---

## 📞 Support

If you encounter setup issues:
- Ensure Node.js is installed: `node --version`
- Delete `node_modules` and run `npm install` again
- Try a different browser
- Check that port 8000 isn't already in use

For debugging help:
- Read the error messages carefully
- Use the patterns section above
- Check the common bug patterns
- Don't hesitate to ask for hints (but try first!)

---

Good luck and happy debugging! 🏏

**Remember:** The goal isn't just to fix bugs - it's to learn debugging skills you'll use in real development!

---

*Browser Blitz - Cricket World Cup 2026 Challenge*  
