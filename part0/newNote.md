```mermaid
sequenceDiagram
    participant browser
    participant server

	browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note
	server-->>browser: input from user

	browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/notes
	server-->>browser: notes file

	browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
	server-->>browser: css file

	browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.js
	server-->>browser: Javascript file

	browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
	server-->>browser: [{ "content": "new note in spa", "date": "2023-1-1" }, ... ]