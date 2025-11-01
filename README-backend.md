LogicLift demo backend

This is a minimal demo backend for your `iq_test` frontend. It serves the frontend files and provides simple in-memory API endpoints for login/register/profile/progress/problems.

How to run

1. Open a terminal in `/Users/vsg/Documents/iq_test`.
2. Install dependencies:

   npm install

3. Start the server:

   npm start

4. Open the frontend in your browser:

   http://localhost:5000/index2.html

Notes

- This backend uses an in-memory store and demo tokens. It's intended for local development only.
- demo token format: `demo-token-<userId>-<timestamp>`; any token starting with `demo-token-` will be accepted if the user id exists in memory.
- To persist users across restarts, replace the in-memory store with a simple file DB or a proper database.
