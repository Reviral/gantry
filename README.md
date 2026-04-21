🏗️ GANTRY // Unified Fleet Command & AI Triage
Gantry is a high-precision, automated ecosystem designed to bridge the gap between emergency service intake and field response. Originally built for high-stakes service environments (like stairlift repair), it has evolved into a unified command center for fleet logistics, real-time inventory synchronization, and AI-driven inbox maintenance.

🚀 The Core Mission
In accessibility support and emergency repair, seconds matter. Gantry replaces fragmented manual data entry with a robust n8n-orchestrated pipeline that categorizes, prioritizes, and dispatches engineers while ensuring they have the exact parts needed for the job.

🛠️ Key Engineering Features
🧠 1. Local AI Triage (Privacy-First)
Unlike standard cloud-based systems, Gantry utilizes local LLMs (Llama 3 via Ollama) to analyze service intent.

Dynamic Escalation: Automatically overrides "Routine" status to "High Priority" if it detects vulnerable persons at risk.

Intelligent Summarization: Condenses complex customer descriptions into actionable briefs for engineers.

The Janitor: An integrated AI email scrubber that processes hundreds of communications daily, filtering noise while protecting high-value "Interview" and "Application" threads.

📦 2. Real-Time Van Inventory & Sync
A dedicated mobile-responsive interface for field engineers to manage their "mobile warehouse."

Stock Synchronization: Engineers can update part quantities directly from their vans, which syncs instantly to the Gantry Ledger.

Low Stock Alerts: The Gantry dashboard automatically flags vans with critically low inventory, ensuring planners never book a job the engineer can't complete.

📍 3. Geospatial Driver Routing
A sophisticated postcode-matching engine that identifies the correct engineer based on location.

Direct Dispatch: Incoming leads are instantly routed to the assigned engineer via Slack @mentions, providing them with the crisis brief and location data.

🖥️ 4. Unified Command Center
A "Single Pane of Glass" built with Vanilla JS and Flexbox for desktop and mobile oversight:

Fleet Registry: Full control over driver profiles, area assignments, and access keys.

Triage Log: A searchable history of every service intake and its current assignment status.

Status Broadcast: Real-time vehicle status updates (e.g., On-Site, In-Transit, Stocking) that maintain data integrity across the fleet.

🧰 Tech Stack
Orchestration: n8n (Advanced Workflow Automation)

Intelligence: Local Llama 3 (via Ollama) on NVIDIA RTX 3070 (8GB VRAM)

Frontend: HTML5 / CSS3 (Flexbox/Media Queries) / JavaScript (Fetch API)

Connectivity: Ngrok (Secure Webhook Tunneling)

Communication: Slack API & Gmail API integration

📊 Workflow Architecture
Intake: Data arrives via the Gantry Portal or Email Parser.

Analyze: Local AI evaluates priority and generates a brief.

Inventory Check: System verifies the assigned engineer has the required parts.

Output: * Google Sheets: Updates the Master Ledger.

Slack: Triggers the @mention to the field engineer.
