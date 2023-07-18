import db from "../database"
import { DataTypes, Model } from "sequelize";
import { UserModel, userDTO } from "./../user/User.Model";

export interface contactDTO {
    id_contact: string
    userId: string
    fullName: string
    number: string
    adress: string
    createdAt: string
    updatedAt: string
}

export class ContactModel extends Model<contactDTO> {
    declare id_contact: string
    declare mail: string
    declare userId: string

}




ContactModel.init({

    id_contact: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false,
    },

    userId: {

        type: DataTypes.UUID,
        allowNull: false,
        validate: {
            isUUID: 4
        }


    },

    fullName: {
        type: DataTypes.STRING,
        allowNull: false
    },

    number: {
        type: DataTypes.STRING,
        allowNull: false,

    },

    adress: {
        type: DataTypes.STRING,
        allowNull: false
    }
    ,
    createdAt: {
        allowNull: false,
        type: DataTypes.DATE
    },

    updatedAt: {

        allowNull: false,
        type: DataTypes.DATE
    }

},

    {
        sequelize: db,
        tableName: "Contacts",
        underscored: false,
        timestamps: true
    }


)


