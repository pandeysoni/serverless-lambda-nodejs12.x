const AWS = require("aws-sdk");
const db = new AWS.DynamoDB.DocumentClient();
const {createErrorResponse, createSuccessResponse} = require('./common');

exports.main = async (event) => {
    try {
        const { id } = event.queryStringParameters;
        if(id){
            const params = {
                TableName: process.env.TABLE_USER,
                Key: {
                    id: id
                }
            };
            const result = await db.get(params).promise();
            return createSuccessResponse(result.Item);
        }
        else{
            const error = {
                statusCode: 400,
                message: 'id is required'
            }
            return createErrorResponse(error);
        }
    } catch (ex) {
        return createErrorResponse(ex);
    }
};
