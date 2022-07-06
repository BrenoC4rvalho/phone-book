import { sequelize } from "../instances/pg";
import { Model, DataTypes } from "sequelize";

export interface ContactInstance extends Model {
    id: number;
    name: string;
    lastname: string;
    tel: string;
    email: string;
}

export const Contact = sequelize.define<ContactInstance>("Contact", {
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING
    },
    lastname: {
        type: DataTypes.STRING
    },
    fullname: {
        type: DataTypes.VIRTUAL,
        get() {
            let name = this.getDataValue('name');
            let lastname = this.getDataValue('lastname');
            if(lastname == null) {
                return name;
            } else {
                return `${name} ${lastname}`; 
            }
        }
    },
    tel: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    }
}, {
    tableName: 'contact',
    timestamps: false
});