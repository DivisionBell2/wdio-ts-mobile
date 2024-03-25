import { db } from "../../utils/dbConnect.js";
import { DataTypes } from "sequelize";

const tableName = "user_notifications";

export const userNotificationsDB = db.define(
    tableName,
    {
        id: { type: DataTypes.BIGINT, primaryKey: true },
        user_id: { type: DataTypes.BIGINT },
        sending_type: { type: DataTypes.STRING },
        send_at: { type: DataTypes.TIME },
        notification_type: { type: DataTypes.STRING },
        description: { type: DataTypes.STRING },
        send_to: { type: DataTypes.STRING },
        created_at: { type: DataTypes.TIME },
        updated_at: { type: DataTypes.TIME },
        notify_tepmplate_id: { type: DataTypes.BIGINT },
        body: { type: DataTypes.STRING },
    },
    {
        timestamps: false
    }
);

export interface UserNotificationsDB {
    id: number;
    user_id: number;
    sending_type: string;
    send_at: string;
    notification_type: string;
    description: string;
    send_to: string;
    created_at: string;
    updated_at: string;
    notify_tepmplate_id: number;
    body: string;
}

export async function getVerifyCodeBySendTo(sendAddress: string): Promise<string> {
    const result = await db.query(
        `SELECT body -> 'variables' ->> 'code' as code FROM ${tableName} WHERE send_to = '${sendAddress}' ORDER BY id DESC LIMIT 1`,
    );

    return JSON.parse(JSON.stringify(result[0][0])).code;
}

export async function getPaymentLinkBySentTo(sendAddress: string): Promise<string> {
    const result = await db.query(
        `SELECT body -> 'variables' ->> 'payment_link' as payment_link FROM ${tableName} WHERE send_to = '${sendAddress}' ORDER BY id DESC LIMIT 1`,
    );

    return JSON.parse(JSON.stringify(result[0][0])).payment_link;
}