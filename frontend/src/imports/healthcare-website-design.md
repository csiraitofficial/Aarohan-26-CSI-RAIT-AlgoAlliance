<<<<<<< HEAD
Design a modern, clean, healthcare website frontend for an AI-powered public health assistant platform. The design should take visual inspiration from the attached reference image: rounded cards, soft pastel blocks, bold hero section, spacious layout, clean typography, calm healthcare tone, modern dashboard feel, mobile + desktop friendly, and visually segmented modules. Use a premium but approachable style. The interface should feel trustworthy, warm, and easy to use for both young users and families.

Important design language to follow:
- Large rounded rectangles and cards
- Soft pastel palette inspired by the reference image: navy/indigo primary, mint, soft yellow, pastel pink, light blue, off-white backgrounds
- Clean bold heading typography with strong visual hierarchy
- Friendly healthcare illustrations/icons
- Spacious sections with modular card-based layout
- Modern SaaS/health-tech landing page aesthetic
- Smooth, minimal, elegant interface
- Responsive design for desktop, tablet, and mobile
- UI should be frontend-ready and backend/AI-integration friendly, with clear component boundaries and reusable sections

Brand/Product context:
This is an AI-powered preventive healthcare and public health awareness website. It does NOT primarily focus on direct diagnosis. It focuses on symptom awareness, precautionary guidance, medical report simplification, medicine management, chronic disease support, post-treatment recovery support, early deterioration monitoring, healthcare navigation, and location-aware health alerts.

Design the following pages/screens and sections in one consistent design system:

1. Landing Page / Homepage
Create a visually impressive homepage with:
- Top navigation bar with logo, menu items, sign in, sign up, and emergency help CTA
- Hero section with bold healthcare headline such as:
  “Smarter Preventive Healthcare for Everyday Life”
  or similar
- Short supporting line explaining AI-based health assistance, symptom guidance, medicine tracking, and local health alerts
- Primary CTA buttons:
  “Start Health Check”
  “Upload Report”
  “Explore Features”
- Secondary trust indicators:
  privacy-first, non-diagnostic guidance, multilingual-ready, location-aware
- Right side of hero can have a healthcare illustration/dashboard preview inspired by the attached design
- Below hero, create modular quick-access feature cards inspired by the image layout

2. Feature Cards Section
Create clickable dashboard cards for the main modules:
- AI Symptom Guidance
- Medical Report Simplifier
- Outbreak Alerts
- Medication Tracker
- Chronic Care Coach
- Recovery Monitoring
- Early Warning Monitor
- Doctor / Hospital Navigator
- Health Awareness Library
- Emergency Guidance
Each card should have:
- title
- 1-line description
- icon/illustration
- CTA arrow/button
Use colorful pastel blocks similar to the inspiration image

3. AI Symptom Guidance Page
Design a chat-based symptom assistance interface with:
- left panel for past conversations / health history categories
- main chat panel
- symptom input box
- quick symptom chips like fever, cough, headache, fatigue, chest pain, stomach pain
- a simple symptom intake form section with fields:
  name
  age
  gender
  location
  symptoms
  duration
  severity
  existing conditions
  current medications
  allergies
- output cards for:
  possible precautionary guidance
  urgency indicator
  suggested next steps
  when to consult doctor
  location-aware risk context
Important: keep layout structured so backend AI responses can populate cards dynamically later

4. Medical Report Understanding Page
Design a report upload and summary page with:
- upload area for PDF/image reports
- report type selector: blood test, scan, prescription, discharge summary, other
- simple patient details form
- extracted findings section
- simplified explanation cards
- abnormal values highlight section
- “questions you may ask your doctor” section
- safety notice that this is informational and not a confirmed diagnosis
Keep the UI modular so parsed backend data can fill each component

5. Medication Adherence & Smart Medicine Management
Design a medicine tracking dashboard with:
- add medicine form
- fields:
  medicine name
  dosage
  frequency
  timings
  before/after food
  duration
  prescribed for
  prescribing doctor
  notes
- medication schedule timeline/calendar
- reminder cards
- missed dose tracker
- conflict warning section
- refill reminder section
- adherence percentage widget
- caregiver access option
Structure must support future backend logic for reminders, conflict checks, and adherence analytics

6. Chronic Disease Lifestyle Management
Design a dedicated page for ongoing conditions like diabetes, hypertension, thyroid, PCOS
Include:
- disease selection tabs/cards
- daily logging forms for condition-specific data:
  blood sugar
  BP
  weight
  sleep
  water intake
  meals
  activity
  stress
  symptoms
- dashboard widgets:
  trends
  today’s recommendations
  healthy habits tracker
  alerts
  weekly progress
- AI micro-recommendation card
- routine planner
This page should be dashboard-like, highly modular, and data-widget friendly

7. Post-Treatment Recovery Monitoring
Design a recovery support page for patients after discharge or treatment
Include:
- treatment/surgery summary form
- discharge date
- doctor instructions
- medication continuation
- wound care / exercise / diet restrictions
- follow-up appointment tracker
- symptom check-in cards
- “how are you feeling today?” daily form
- warning signs section
- recovery progress timeline
- caregiver companion panel
Make it visually reassuring and easy for non-technical users

8. Early Health Deterioration Monitoring
Design a monitoring page that tracks subtle health changes at home
Include:
- daily health log form
- wearable/manual entry fields:
  temperature
  pulse
  oxygen
  BP
  sleep
  fatigue level
  pain level
  breathing difficulty
- trend charts placeholders
- anomaly or warning cards
- “changes from your baseline” section
- emergency escalation CTA
- AI insights panel
Keep charts and data blocks ready for future backend integration

9. Healthcare Navigation Assistant
Design a page that helps users decide where to go for care
Include:
- symptom summary
- urgency selector
- question flow or guided assistant
- outputs:
  general physician or specialist
  clinic or hospital
  emergency or non-emergency
  suggested medical department
  nearby options placeholder
  wait-time placeholder
  booking CTA
- include a clean decision-support UI
This should look like a guided healthcare assistant, not just a list

10. Location-Based Symptom Context Awareness
Design a location intelligence page/module
Include:
- location input or auto-detect
- seasonal health risk card
- local outbreak alert widgets
- “your symptoms + location context” section
- environment-related risk insights
- district/city alert map placeholder
- local preventive tips
Design should clearly support future map API and public health data integration

11. Health Awareness & Education Hub
Create a content section with:
- searchable articles
- disease awareness cards
- prevention guides
- FAQs
- nutrition and wellness section
- mental health awareness cards
- category filters
Use the same colorful card-based style as the inspiration image

12. User Dashboard
Create a logged-in dashboard that gives a full overview:
- greeting header
- current health status card
- medication reminders
- daily logs pending
- recent reports
- active recovery plans
- local outbreak alerts
- AI recommendations
- quick action shortcuts
- upcoming follow-ups
This should feel like a personalized healthcare command center

13. Authentication / Onboarding
Design simple, elegant flows for:
- Sign up
- Sign in
- Forgot password
- Initial health profile setup
Collect basic onboarding fields:
  full name
  age
  gender
  city
  chronic conditions
  medication use
  allergies
  emergency contact
  caregiver contact optional
  consent/preferences
Make forms simple, minimal, and user-friendly

14. Reusable Components / Design System
Create a scalable design system with:
- buttons
- inputs
- dropdowns
- chips/tags
- cards
- status badges
- alert banners
- file upload blocks
- charts placeholders
- chat bubbles
- form steps
- sidebar/navigation
- bottom nav for mobile
Design should be consistent and developer-friendly for implementation

UX requirements:
- Keep forms simple and divided into logical steps
- Use sectioned components to make backend integration easier
- Each major feature should have clearly named cards/containers for dynamic AI/API output
- Avoid overly artistic or hard-to-code layouts
- Prefer practical, reusable UI blocks
- Make space for loading states, empty states, success states, and error states
- Add tooltips or info icons for medical terms
- Include disclaimer areas where needed
- Keep accessibility in mind: readable contrast, large touch targets, intuitive navigation

Frontend implementation friendliness:
- Use clear layout hierarchy and reusable card/grid patterns
- Avoid unnecessarily complex shapes that are difficult to code
- Components should map easily to React or other frontend frameworks
- Use predictable spacing, standard modal/drawer patterns, tabs, accordions, and tables/cards where appropriate
- Forms should be designed with validation-ready fields and clean labels
- Ensure all data-heavy sections can later connect to APIs without redesign

Overall feel:
=======
Design a modern, clean, healthcare website frontend for an AI-powered public health assistant platform. The design should take visual inspiration from the attached reference image: rounded cards, soft pastel blocks, bold hero section, spacious layout, clean typography, calm healthcare tone, modern dashboard feel, mobile + desktop friendly, and visually segmented modules. Use a premium but approachable style. The interface should feel trustworthy, warm, and easy to use for both young users and families.

Important design language to follow:
- Large rounded rectangles and cards
- Soft pastel palette inspired by the reference image: navy/indigo primary, mint, soft yellow, pastel pink, light blue, off-white backgrounds
- Clean bold heading typography with strong visual hierarchy
- Friendly healthcare illustrations/icons
- Spacious sections with modular card-based layout
- Modern SaaS/health-tech landing page aesthetic
- Smooth, minimal, elegant interface
- Responsive design for desktop, tablet, and mobile
- UI should be frontend-ready and backend/AI-integration friendly, with clear component boundaries and reusable sections

Brand/Product context:
This is an AI-powered preventive healthcare and public health awareness website. It does NOT primarily focus on direct diagnosis. It focuses on symptom awareness, precautionary guidance, medical report simplification, medicine management, chronic disease support, post-treatment recovery support, early deterioration monitoring, healthcare navigation, and location-aware health alerts.

Design the following pages/screens and sections in one consistent design system:

1. Landing Page / Homepage
Create a visually impressive homepage with:
- Top navigation bar with logo, menu items, sign in, sign up, and emergency help CTA
- Hero section with bold healthcare headline such as:
  “Smarter Preventive Healthcare for Everyday Life”
  or similar
- Short supporting line explaining AI-based health assistance, symptom guidance, medicine tracking, and local health alerts
- Primary CTA buttons:
  “Start Health Check”
  “Upload Report”
  “Explore Features”
- Secondary trust indicators:
  privacy-first, non-diagnostic guidance, multilingual-ready, location-aware
- Right side of hero can have a healthcare illustration/dashboard preview inspired by the attached design
- Below hero, create modular quick-access feature cards inspired by the image layout

2. Feature Cards Section
Create clickable dashboard cards for the main modules:
- AI Symptom Guidance
- Medical Report Simplifier
- Outbreak Alerts
- Medication Tracker
- Chronic Care Coach
- Recovery Monitoring
- Early Warning Monitor
- Doctor / Hospital Navigator
- Health Awareness Library
- Emergency Guidance
Each card should have:
- title
- 1-line description
- icon/illustration
- CTA arrow/button
Use colorful pastel blocks similar to the inspiration image

3. AI Symptom Guidance Page
Design a chat-based symptom assistance interface with:
- left panel for past conversations / health history categories
- main chat panel
- symptom input box
- quick symptom chips like fever, cough, headache, fatigue, chest pain, stomach pain
- a simple symptom intake form section with fields:
  name
  age
  gender
  location
  symptoms
  duration
  severity
  existing conditions
  current medications
  allergies
- output cards for:
  possible precautionary guidance
  urgency indicator
  suggested next steps
  when to consult doctor
  location-aware risk context
Important: keep layout structured so backend AI responses can populate cards dynamically later

4. Medical Report Understanding Page
Design a report upload and summary page with:
- upload area for PDF/image reports
- report type selector: blood test, scan, prescription, discharge summary, other
- simple patient details form
- extracted findings section
- simplified explanation cards
- abnormal values highlight section
- “questions you may ask your doctor” section
- safety notice that this is informational and not a confirmed diagnosis
Keep the UI modular so parsed backend data can fill each component

5. Medication Adherence & Smart Medicine Management
Design a medicine tracking dashboard with:
- add medicine form
- fields:
  medicine name
  dosage
  frequency
  timings
  before/after food
  duration
  prescribed for
  prescribing doctor
  notes
- medication schedule timeline/calendar
- reminder cards
- missed dose tracker
- conflict warning section
- refill reminder section
- adherence percentage widget
- caregiver access option
Structure must support future backend logic for reminders, conflict checks, and adherence analytics

6. Chronic Disease Lifestyle Management
Design a dedicated page for ongoing conditions like diabetes, hypertension, thyroid, PCOS
Include:
- disease selection tabs/cards
- daily logging forms for condition-specific data:
  blood sugar
  BP
  weight
  sleep
  water intake
  meals
  activity
  stress
  symptoms
- dashboard widgets:
  trends
  today’s recommendations
  healthy habits tracker
  alerts
  weekly progress
- AI micro-recommendation card
- routine planner
This page should be dashboard-like, highly modular, and data-widget friendly

7. Post-Treatment Recovery Monitoring
Design a recovery support page for patients after discharge or treatment
Include:
- treatment/surgery summary form
- discharge date
- doctor instructions
- medication continuation
- wound care / exercise / diet restrictions
- follow-up appointment tracker
- symptom check-in cards
- “how are you feeling today?” daily form
- warning signs section
- recovery progress timeline
- caregiver companion panel
Make it visually reassuring and easy for non-technical users

8. Early Health Deterioration Monitoring
Design a monitoring page that tracks subtle health changes at home
Include:
- daily health log form
- wearable/manual entry fields:
  temperature
  pulse
  oxygen
  BP
  sleep
  fatigue level
  pain level
  breathing difficulty
- trend charts placeholders
- anomaly or warning cards
- “changes from your baseline” section
- emergency escalation CTA
- AI insights panel
Keep charts and data blocks ready for future backend integration

9. Healthcare Navigation Assistant
Design a page that helps users decide where to go for care
Include:
- symptom summary
- urgency selector
- question flow or guided assistant
- outputs:
  general physician or specialist
  clinic or hospital
  emergency or non-emergency
  suggested medical department
  nearby options placeholder
  wait-time placeholder
  booking CTA
- include a clean decision-support UI
This should look like a guided healthcare assistant, not just a list

10. Location-Based Symptom Context Awareness
Design a location intelligence page/module
Include:
- location input or auto-detect
- seasonal health risk card
- local outbreak alert widgets
- “your symptoms + location context” section
- environment-related risk insights
- district/city alert map placeholder
- local preventive tips
Design should clearly support future map API and public health data integration

11. Health Awareness & Education Hub
Create a content section with:
- searchable articles
- disease awareness cards
- prevention guides
- FAQs
- nutrition and wellness section
- mental health awareness cards
- category filters
Use the same colorful card-based style as the inspiration image

12. User Dashboard
Create a logged-in dashboard that gives a full overview:
- greeting header
- current health status card
- medication reminders
- daily logs pending
- recent reports
- active recovery plans
- local outbreak alerts
- AI recommendations
- quick action shortcuts
- upcoming follow-ups
This should feel like a personalized healthcare command center

13. Authentication / Onboarding
Design simple, elegant flows for:
- Sign up
- Sign in
- Forgot password
- Initial health profile setup
Collect basic onboarding fields:
  full name
  age
  gender
  city
  chronic conditions
  medication use
  allergies
  emergency contact
  caregiver contact optional
  consent/preferences
Make forms simple, minimal, and user-friendly

14. Reusable Components / Design System
Create a scalable design system with:
- buttons
- inputs
- dropdowns
- chips/tags
- cards
- status badges
- alert banners
- file upload blocks
- charts placeholders
- chat bubbles
- form steps
- sidebar/navigation
- bottom nav for mobile
Design should be consistent and developer-friendly for implementation

UX requirements:
- Keep forms simple and divided into logical steps
- Use sectioned components to make backend integration easier
- Each major feature should have clearly named cards/containers for dynamic AI/API output
- Avoid overly artistic or hard-to-code layouts
- Prefer practical, reusable UI blocks
- Make space for loading states, empty states, success states, and error states
- Add tooltips or info icons for medical terms
- Include disclaimer areas where needed
- Keep accessibility in mind: readable contrast, large touch targets, intuitive navigation

Frontend implementation friendliness:
- Use clear layout hierarchy and reusable card/grid patterns
- Avoid unnecessarily complex shapes that are difficult to code
- Components should map easily to React or other frontend frameworks
- Use predictable spacing, standard modal/drawer patterns, tabs, accordions, and tables/cards where appropriate
- Forms should be designed with validation-ready fields and clean labels
- Ensure all data-heavy sections can later connect to APIs without redesign

Overall feel:
>>>>>>> db8c60f5a9e29b5834a92db9f1c317ff4a7b243b
A modern AI healthcare platform inspired by the attached reference image, but tailored for a multi-feature preventive healthcare product. The final result should feel premium, clean, trustworthy, colorful, calming, and highly usable.