# Portfolio Website Testing

## Before You Begin

Run these tests against the published GitHub Pages website in a browser. The pass results below reflect the user's confirmation that all 23 tests were completed on the live site; they were not independently rerun while updating this document. No Lighthouse scores were provided, so this document does not list numerical scores.

For viewport tests, use the browser's responsive design tools to set the requested screen size. Record the browser, device or viewport, date, and any useful notes when tests are performed.

## Test Cases

### TC-01: Live Home Page Loads
- **Description:** Confirm that the published Home page loads.
- **Steps to perform:** Open the GitHub Pages URL in a browser and navigate to `index.html` if needed. Refresh the page.
- **Expected result:** The Home page loads over the live website without a browser error, and its content and styling appear.
- **Actual result:** Passed on the live GitHub Pages website (user-confirmed).
- **Pass/Fail status:** Pass

### TC-02: Live About Page Loads
- **Description:** Confirm that the published About Me page loads.
- **Steps to perform:** Open the live GitHub Pages URL and navigate to `about.html`. Refresh the page.
- **Expected result:** The About Me page loads without a browser error, and its content and styling appear.
- **Actual result:** Passed on the live GitHub Pages website (user-confirmed).
- **Pass/Fail status:** Pass

### TC-03: Live Projects Page Loads
- **Description:** Confirm that the published Projects page loads.
- **Steps to perform:** Open the live GitHub Pages URL and navigate to `projects.html`. Refresh the page.
- **Expected result:** The Projects page loads without a browser error, and its content, illustrations, and styling appear.
- **Actual result:** Passed on the live GitHub Pages website (user-confirmed).
- **Pass/Fail status:** Pass

### TC-04: Live Skills Page Loads
- **Description:** Confirm that the published Skills page loads.
- **Steps to perform:** Open the live GitHub Pages URL and navigate to `skills.html`. Refresh the page.
- **Expected result:** The Skills page loads without a browser error, and its categories and styling appear.
- **Actual result:** Passed on the live GitHub Pages website (user-confirmed).
- **Pass/Fail status:** Pass

### TC-05: Live Contact Page Loads
- **Description:** Confirm that the published Contact page loads.
- **Steps to perform:** Open the live GitHub Pages URL and navigate to `contact.html`. Refresh the page.
- **Expected result:** The Contact page loads without a browser error, and its contact links and styling appear.
- **Actual result:** Passed on the live GitHub Pages website (user-confirmed).
- **Pass/Fail status:** Pass

### TC-06: Home Page Navigation Links
- **Description:** Check every main navigation link from the Home page.
- **Steps to perform:** On the live Home page, activate Home, About Me, Projects, Skills, and Contact one at a time. Return to Home between checks.
- **Expected result:** Each link opens its matching live page, and the Home link is identified as the current page when Home is open.
- **Actual result:** Passed on the live GitHub Pages website (user-confirmed).
- **Pass/Fail status:** Pass

### TC-07: About Page Navigation Links
- **Description:** Check every main navigation link from the About Me page.
- **Steps to perform:** On the live About Me page, activate Home, About Me, Projects, Skills, and Contact one at a time. Return to About Me between checks.
- **Expected result:** Each link opens its matching live page, and About Me is identified as the current page when open.
- **Actual result:** Passed on the live GitHub Pages website (user-confirmed).
- **Pass/Fail status:** Pass

### TC-08: Projects Page Navigation Links
- **Description:** Check every main navigation link from the Projects page.
- **Steps to perform:** On the live Projects page, activate Home, About Me, Projects, Skills, and Contact one at a time. Return to Projects between checks.
- **Expected result:** Each link opens its matching live page, and Projects is identified as the current page when open.
- **Actual result:** Passed on the live GitHub Pages website (user-confirmed).
- **Pass/Fail status:** Pass

### TC-09: Skills Page Navigation Links
- **Description:** Check every main navigation link from the Skills page.
- **Steps to perform:** On the live Skills page, activate Home, About Me, Projects, Skills, and Contact one at a time. Return to Skills between checks.
- **Expected result:** Each link opens its matching live page, and Skills is identified as the current page when open.
- **Actual result:** Passed on the live GitHub Pages website (user-confirmed).
- **Pass/Fail status:** Pass

### TC-10: Contact Page Navigation Links
- **Description:** Check every main navigation link from the Contact page.
- **Steps to perform:** On the live Contact page, activate Home, About Me, Projects, Skills, and Contact one at a time. Return to Contact between checks.
- **Expected result:** Each link opens its matching live page, and Contact is identified as the current page when open.
- **Actual result:** Passed on the live GitHub Pages website (user-confirmed).
- **Pass/Fail status:** Pass

### TC-11: Phone Layout
- **Description:** Check responsive layout on a phone-sized viewport.
- **Steps to perform:** Set the browser viewport to 375 by 812 pixels. Open each of the five live pages and inspect the header, navigation, content, and footer.
- **Expected result:** Content fits the viewport, text and controls remain readable and usable, and there is no unintended horizontal scrolling.
- **Actual result:** Passed on the live GitHub Pages website (user-confirmed).
- **Pass/Fail status:** Pass

### TC-12: Laptop Layout
- **Description:** Check responsive layout on a laptop-sized viewport.
- **Steps to perform:** Set the browser viewport to 1366 by 768 pixels. Open each of the five live pages and inspect the header, navigation, content, and footer.
- **Expected result:** Each page uses its desktop layout, content remains readable, and elements do not overlap or create unintended horizontal scrolling.
- **Actual result:** Passed on the live GitHub Pages website (user-confirmed).
- **Pass/Fail status:** Pass

### TC-13: Mobile Menu Opens
- **Description:** Confirm the hamburger menu opens on a phone-sized viewport.
- **Steps to perform:** At 375 by 812 pixels, open each live page and activate its Menu button using a mouse or touchscreen.
- **Expected result:** The navigation links become visible, and the menu button reports that the menu is expanded.
- **Actual result:** Passed on the live GitHub Pages website (user-confirmed).
- **Pass/Fail status:** Pass

### TC-14: Mobile Menu Closes
- **Description:** Confirm the mobile menu can be closed.
- **Steps to perform:** Open the menu on each live page. Close it using the Menu button. Reopen it and select a navigation link.
- **Expected result:** The button closes the menu, and selecting a link navigates to the selected page and leaves the menu closed.
- **Actual result:** Passed on the live GitHub Pages website (user-confirmed).
- **Pass/Fail status:** Pass

### TC-15: Theme Toggle
- **Description:** Confirm visitors can switch between dark and light themes.
- **Steps to perform:** On each live page, activate the theme toggle twice.
- **Expected result:** The first activation changes to light theme; the second changes back to dark theme. The theme button's label and pressed state match the active theme.
- **Actual result:** Passed on the live GitHub Pages website (user-confirmed).
- **Pass/Fail status:** Pass

### TC-16: Theme Preference Persists After Refresh
- **Description:** Confirm the selected theme is remembered after a refresh.
- **Steps to perform:** On a live page, select light theme and refresh. Then select dark theme and refresh again.
- **Expected result:** After each refresh, the page keeps the theme selected before refreshing.
- **Actual result:** Passed on the live GitHub Pages website (user-confirmed).
- **Pass/Fail status:** Pass

### TC-17: Keyboard Navigation on Every Page
- **Description:** Check that page controls and links can be reached and activated by keyboard.
- **Steps to perform:** On each live page, use Tab and Shift+Tab to move through links and buttons. Use Enter to activate the focused link or button. On mobile width, also use Enter or Space on the Menu button.
- **Expected result:** Focus is visible, the focus order is understandable, and Enter activates the focused control without requiring a mouse.
- **Actual result:** Passed on the live GitHub Pages website (user-confirmed).
- **Pass/Fail status:** Pass

### TC-18: Mobile Menu Keyboard Dismissal
- **Description:** Confirm the mobile navigation menu supports keyboard dismissal.
- **Steps to perform:** At phone width on each live page, use Tab to focus the Menu button and press Enter or Space to open it. Press Escape.
- **Expected result:** The menu opens from the keyboard, Escape closes it, and keyboard focus returns to the Menu button.
- **Actual result:** Passed on the live GitHub Pages website (user-confirmed).
- **Pass/Fail status:** Pass

### TC-19: Contact Email Opens Gmail
- **Description:** Confirm the Contact page email link opens a Gmail compose window addressed to Israel.
- **Steps to perform:** On the live Contact page, activate the email link. If required, sign in to Gmail in the new tab.
- **Expected result:** Gmail opens in a new tab with `ig229@njit.edu` in the recipient field.
- **Actual result:** Passed on the live GitHub Pages website (user-confirmed).
- **Pass/Fail status:** Pass

### TC-20: GitHub Link Opens the Correct Profile
- **Description:** Confirm the Contact page GitHub link opens the intended profile.
- **Steps to perform:** On the live Contact page, activate the GitHub link.
- **Expected result:** A new tab opens to `https://github.com/ig229-svg` and displays the matching profile.
- **Actual result:** Passed on the live GitHub Pages website (user-confirmed).
- **Pass/Fail status:** Pass

### TC-21: Lighthouse Accessibility Score
- **Description:** Measure accessibility on every live page using Lighthouse.
- **Steps to perform:** In Chrome DevTools, run a Lighthouse report for the live Home, About Me, Projects, Skills, and Contact pages. Record the accessibility score for each page.
- **Expected result:** Each of the five pages receives an accessibility score of at least 90 out of 100.
- **Actual result:** Passed on the live GitHub Pages website (user-confirmed); numerical scores were not provided.
- **Pass/Fail status:** Pass

### TC-22: Page Content and Visual Assets
- **Description:** Check that the live pages display their intended content and visual assets.
- **Steps to perform:** Visit all five pages on the live site. Inspect the page headings, project illustrations, skill categories, education details, and contact information.
- **Expected result:** Content appears on the correct page, project illustrations load, and no broken or unintended placeholder content is visible.
- **Actual result:** Passed on the live GitHub Pages website (user-confirmed).
- **Pass/Fail status:** Pass

### TC-23: Accessibility and Color Contrast
- **Description:** Check visible focus indicators, readable text, and accessible names on the live pages.
- **Steps to perform:** Use the keyboard to focus links and buttons on every page. Inspect the theme toggle and mobile menu labels. Run Lighthouse accessibility checks and review any contrast findings.
- **Expected result:** Interactive controls have visible focus, accessible names, and readable contrast. Any Lighthouse issues are recorded for follow-up.
- **Actual result:** Passed on the live GitHub Pages website (user-confirmed).
- **Pass/Fail status:** Pass