'use stricts'

import { DataTypes, Model } from "sequelize"
import sequelize from "sequelize/types/sequelize"
import db from "../database"
import { timeStamp } from "console"
import { ContactModel } from "../contact/Contact.Model"


export interface userDTO {
    id : string
    mail: string
    password: string
    createdAt: string
    updatedAt: string
}


export class UserModel extends Model<userDTO>{
    declare id : string
    declare mail: string
    declare password: string | undefined
}

UserModel.init({
    
    id: {

        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true
    },
    mail: {
        type:DataTypes.STRING,
        unique: true,
        allowNull : false
        

    },

    password: {
        type: DataTypes.STRING,
        allowNull: false
        

    },
    createdAt: {
        type: DataTypes.DATE,
        allowNull:false
        
    },
    updatedAt: {
        
        type: DataTypes.DATE,
        allowNull:false
        
    }
},
{
    sequelize: db,
    tableName : 'Users',
    timestamps: true
})

UserModel.hasOne(ContactModel,{
     sourceKey : 'id',
     as : 'Contact'
})

ContactModel.belongsTo(UserModel,{
    targetKey : 'id'
})
