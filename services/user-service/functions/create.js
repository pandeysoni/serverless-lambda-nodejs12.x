const AWS = require("aws-sdk");
const db = new AWS.DynamoDB.DocumentClient();
const {createErrorResponse, createSuccessResponse} = require('./common');

exports.main = async (event) => {
    try {
        const {data} = JSON.parse(event.body);
        const params = {
            TableName: process.env.TABLE_USER,
            Item: data
        };
        const result = await db.put(params).promise();
        return createSuccessResponse(result);
    } catch (ex) {
        return createErrorResponse(ex);
    }
};
