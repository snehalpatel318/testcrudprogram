# HelpHub Backend API


## Overview

HelpHub is a customer support ticket management system built using:

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication



## Features


### Authentication

- Register
- Login
- JWT token
- Password hashing
- Role based access


### Roles

- Client
- Agent
- Supervisor
- Admin



### Client Management

- Client account creation
- Admin verification
- Deactivation



### Ticket System

- Create ticket
- Assign ticket
- Update status
- Ticket history



### Comments

- Add comments
- Ticket discussion



### Attachments

- Upload files
- Store metadata



### Knowledge Base

- Articles
- Draft
- Published
- Search



### Reports

- Dashboard
- Agent workload
- Client tickets



### Security

- bcrypt password hashing
- JWT authentication
- Role authorization
- Rate limiting
- Input sanitization



## Installation


Clone project:


git clone repo-url


Install:

npm install



## Environment


Create .env


PORT=5000

MONGO_URI=mongodb://127.0.0.1:27017/helphub

JWT_SECRET=secret



## Run


Development:


npm run dev



Production:


npm start



## Testing


npm test



## API Structure


/auth

/client

/tickets

/comments

/attachments

/articles

/reports



## Database Collections


Users

ClientAccounts

Tickets

Comments

Attachments

Articles

Notifications

AuditLogs

