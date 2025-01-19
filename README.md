# rat-race
Submission for Hack n Roll 2025

Installation instructions:
0. Install NodeJs and npm
1. Install dependencies for client using `npm i`
2. Install dependencies for server using `npm i`
3. Install sqlite3 on your local machine, verify it is installed correctly by doing `sqlite3 --version`
4. Create `database.db` file in database folder
5. Run database migrations by running `sqlite3 database.db` then `.read init.sql`
6. Create a .env file in the server by copying the template
7. Generate a Gemini AI api key and add into .env