# gantry
A repository for my n8n Journey
🏗️ GANTRY // Unified Service Dispatch & AI Triage
Gantry is an automated, high-precision dispatch engine designed to bridge the gap between emergency service intake and field response. Built to solve the complexities of real-time fleet management, Gantry utilizes AI-driven triage, geospatial routing, and unified data synchronization to ensure that critical support reaches those who need it most, without delay.

🚀 The Core Mission
In high-stakes service environments—such as stairlift repair and accessibility support—seconds matter. Gantry replaces manual data entry and "gut-feeling" scheduling with a robust, automated pipeline that categorizes, prioritizes, and dispatches leads with zero human friction.

🛠️ Key Engineering Features
🧠 1. AI-Powered Emergency Triage
Unlike traditional forms that rely on static dropdowns, Gantry utilizes a Large Language Model (LLM) to analyze the intent and context of service descriptions.

Dynamic Escalation: If the system detects a vulnerable person is "stuck" or "at risk," it overrides manual "Routine" settings to force a High Priority status.

Intelligent Summarization: The AI condenses long customer descriptions into actionable briefs for the field engineers.

📍 2. Geospatial Driver Routing
Gantry features a sophisticated postcode-matching engine.

Real-time Lookup: Incoming leads are instantly compared against a master driver database.

Dynamic Assignment: Using postcode prefixes (e.g., BD1, HX1), the system identifies the assigned engineer and retrieves their specific Slack ID and contact credentials for immediate dispatch.

🔄 3. Unified "Intermodal" Intake
To prevent data fragmentation, Gantry employs a "Data Normalization" layer.

Standardized Schema: Whether a lead arrives via the Custom Web Portal or Email Parser, the data is re-mapped into a unified schema before entering the logic core.

Cross-Channel Sync: Synchronization occurs across Google Sheets (Master Ledger), Slack (Field Dispatch), and the Admin Command Center simultaneously.

🖥️ 4. Unified Admin Command Center
A secure, custom-built frontend provides a "Single Pane of Glass" for management:
<img width="1404" height="865" alt="image" src="https://github.com/user-attachments/assets/30433bcf-c00c-4385-90ee-d0fb212bb5c3" />


Fleet Management: Create and update driver profiles with deep-link Slack integration.
<img width="1404" height="863" alt="image" src="https://github.com/user-attachments/assets/44447ae4-8cc0-4f33-ac29-667480424a0a" />


Status Broadcast: Real-time vehicle status updates using an "Append or Update" logic that maintains data integrity across the entire fleet ledger.
<img width="1405" height="862" alt="image" src="https://github.com/user-attachments/assets/24336ed4-4dcf-4409-bdbf-af99a8d48a46" />


🧰 Tech Stack
Automation Engine: n8n (Advanced Workflow Orchestration) 
<img width="3396" height="1273" alt="image" src="https://github.com/user-attachments/assets/d31becf9-078a-42fd-80cb-3c1f0b8f40df" />


Intelligence: OpenAI GPT-4o (Contextual Triage)

Frontend: HTML5 / CSS3 (Inter variable font) / JavaScript (Fetch API)

Database/CRM: Google Sheets (Relational Table Mode)

Communication: Slack API (Real-time Mentions)

Tunneling: Ngrok (Secure Webhook Routing)

📊 Workflow Architecture
Intake: Webhook captures raw JSON from the Gantry Portal.

Normalize: "Edit Fields" nodes standardize keys across all sources.

Analyze: AI Agent evaluates priority and creates a summary.

Route: Code Node performs a geospatial lookup against the Drivers Database.

Output: * Google Sheets: Updates the Master Ledger.

Slack: Triggers an @mention to the assigned engineer with the crisis brief.

📽️ Demo
Included in this repository is a full walkthrough showing the Gantry responding to a real-world emergency scenario in HX1, demonstrating the full path from Web Portal to Slack Dispatch.
