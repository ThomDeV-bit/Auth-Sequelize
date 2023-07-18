import { Sequelize } from "sequelize";

const db = new Sequelize('mysql://root:root@localhost:3310/smart',{
    storage : './database.ts',
    dialect : 'mysql',
    define : {
        timestamps : true
        
    }
})


export default db;