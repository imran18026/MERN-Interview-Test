# M E R N Stack Drawing Application Backend (Server)

This is a simple backend for a M E R N stack project designed to store and manage drawing-related information in a MongoDB database. The server provides basic CRUD (Create, Read, Update, Delete) operations to interact with the stored drawing data.

## Setup Instructions

1. Dependencies: Ensure the node_modules folder is properly included in the project after installing dependencies using npm install or yarn.
2. Environment Variables: The project uses environment variables for database connection and other sensitive information. Ensure the .env file is placed in the root directory.

A sample .env.example file is provided in the root. It contains the exact same configuration as the .env file. Simply rename or copy .env.example to .env to configure the environment variables properly.

### Run the following command

```
yarn

yarn start:dev

```

## Server

Local: http://localhost:5000/

live: https://mern-drawing-server.vercel.app/

## API Endpoints

1. Create (POST) : /api/v1/drawings/create
2. Get All (GET) : /api/v1/drawings/
3. Get by ID (GET) : /api/v1/drawings/:id
4. Update by ID (PATCH) : /api/v1/drawings/:id
5. Delete by ID (DELETE) : /api/v1/drawings/:id

## 2 Sample Input.

#### Input: 1

```ts
{
  shapes: '{"lines":[{"points":[{"x":78.96105854714652,"y":74.48947376492727},{"x":78.96105854714652,"y":74.48947376492727},{"x":78.96105854714652,"y":74.48947376492727},{"x":78.96105854714652,"y":74.48947376492727},{"x":78.96105854714652,"y":74.48947376492727},{"x":78.96105854714652,"y":74.48947376492727},{"x":78.96105854714652,"y":74.48947376492727},{"x":78.96105854714652,"y":74.48947376492727},{"x":78.96105854714652,"y":74.48947376492727},{"x":78.96105854714652,"y":74.48947376492727},{"x":78.96105854714652,"y":74.48947376492727},{"x":78.96105854714652,"y":74.48947376492727},{"x":78.96105854714652,"y":74.48947376492727},{"x":78.96105854714652,"y":74.48947376492727},{"x":81.59169014174714,"y":74.03888446166327},{"x":88.46756919541023,"y":73.19435610772065},{"x":94.40892028887009,"y":72.64807352909258},{"x":101.37253458076475,"y":72.1876190450179},{"x":106.3573429594796,"y":71.92978574070847},{"x":110.34940200783134,"y":71.76088491064912},{"x":120.3399630076042,"y":71.4892407105601},{"x":127.33676056515466,"y":71.3522795504376},{"x":131.33562092877358,"y":71.28823693575598},{"x":135.33485799943418,"y":71.23583471849197},{"x":136.33469965226035,"y":71.22342332109838},{"x":138.33443619345925,"y":71.20108238316186},{"x":140.33422278930104,"y":71.18097516120972},{"x":140.33422278930104,"y":71.18097516120972},{"x":141.33412954299783,"y":71.1714505848195},{"x":142.33404585340583,"y":71.16242723722755},{"x":143.333970741104,"y":71.15387874765734},{"x":143.333970741104,"y":71.15387874765734}],"brushColor":"#000","brushRadius":1}],"width":400,"height":400}';
}
```

#### Input: 2

```ts
{
  shapes: '{"lines":[{"points":[{"x":162.40375157514703,"y":67.59085748344997},{"x":162.40375157514703,"y":67.59085748344997},{"x":163.33751597964968,"y":67.61103981678485},{"x":165.01666294043602,"y":68.08740077754541},{"x":166.3287245847052,"y":68.76269764837299},{"x":168.03422511590463,"y":70.06674403400103},{"x":168.9838047436178,"y":70.9256209424392},{"x":169.4735630942506,"y":71.40528552673867},{"x":172.09480794416615,"y":75.1955069501982},{"x":174.5747427119805,"y":81.3170228130497},{"x":176.24371269909292,"y":88.47073391511582},{"x":177.1184203162419,"y":93.28942504865334},{"x":177.43571335543842,"y":95.2347553811452},{"x":177.58643174343058,"y":96.21082791621016},{"x":177.7294833314596,"y":97.18932704476734},{"x":177.98764475297264,"y":99.15349220351881},{"x":177.98764475297264,"y":99.15349220351881},{"x":178.2205895209301,"y":101.12441890313762},{"x":178.43067788040864,"y":103.10083857700896},{"x":178.5303128656798,"y":104.09052790956977},{"x":178.6247791064846,"y":105.0812692420821},{"x":178.7950072829184,"y":107.06585336413109},{"x":179.01417415785798,"y":110.0484019445045},{"x":179.08343492570637,"y":111.0434467441913},{"x":179.2081782882128,"y":113.03519908524723},{"x":179.26729195720628,"y":114.03159441794276},{"x":179.32330992877172,"y":115.02835862199055},{"x":179.32330992877172,"y":115.02835862199055}],"brushColor":"#000","brushRadius":1}],"width":400,"height":400}';
}
```

This backend is built using Node.js and Express.js for API management, and MongoDB for database storage. It forms the core of a drawing application by handling all server-side logic and database operations.
