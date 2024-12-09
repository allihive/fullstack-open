```mermaid
sequenceDiagram
    participant browser
    participant server

	browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/spa
	server-->>browser: spa

	browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
	server-->>browser: css file

	browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/spa.js
	server-->>browser: the spa js file

	browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
	server-->>browser: [{ "content": "new note in spa", "date": "2023-1-1" }, ... ]

	browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
	server-->>browser: application/json

