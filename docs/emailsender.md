My website is already built. I do NOT need a full contact page rebuild.

I only need to implement the existing “预约” button so that when a user submits the booking form, all information is sent to my dedicated email.

Please inspect my current project structure and do the smallest clean change needed.

Goal:
- wire the existing 预约 button and form to send booking details to my email
- preserve current styling and UI
- do not redesign the page unless necessary
- use a production-friendly approach

Preferred implementation order:
1. If this is a Next.js app with server capabilities, implement using Resend
2. If a simpler direct form integration fits better, use Formspree
3. Only use Nodemailer + Gmail if the project structure makes that the easiest option

Requirements:
- keep secrets server-side if using Resend or Nodemailer
- if using Formspree/Web3Forms, integrate safely with existing form
- validate required fields
- include all submitted booking info in the email
- show loading, success, and error states
- do not break current components
- keep code minimal and typed

Booking email should include:
- name
- email
- phone/wechat
- selected service
- preferred appointment time
- message/notes
- submitted timestamp

Please:
1. inspect existing button and form components
2. find the current 预约 click flow
3. implement the smallest necessary change
4. list exactly which files you changed
5. explain how I should configure env vars or third-party keys