const AWS = require("aws-sdk");
const db = new AWS.DynamoDB.DocumentClient();
const {createErrorResponse, createSuccessResponse} = require('./common');

exports.main = async (event) => {
    try {
        const queryParams = {
            limit: 20,
            lastEvaluatedKey: null
        }
        const {limit, lastEvaluatedKey} = event.queryStringParameters ? event.queryStringParameters : queryParams;
        const params = {
            TableName: process.env.TABLE_USER,
            Limit: limit,
            ExclusiveStartKey: lastEvaluatedKey
        };
        const result = await db.scan(params).promise();
        return createSuccessResponse(result.Items);
    } catch (ex) {
        return createErrorResponse(ex);
    }
};
