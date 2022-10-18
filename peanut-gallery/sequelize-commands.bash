npm i sequelize pg
npm i --save-dev sequelize-cli

npx sequelize-cli init

npx sequelize-cli model:generate --name User --attributes username:string,password:string

npx sequelize-cli model:generate --name Comment --attributes username:string,commentBody:string

npx sequelize-cli db:migrate

npx sequelize-cli db:seed --seed 
