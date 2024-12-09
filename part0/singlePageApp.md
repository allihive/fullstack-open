Single Page Diagram
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

New Note on SPA page
	browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa

	contains the new note as JSON data contains content and date

    server-->>browser: application/json
    deactivate server

