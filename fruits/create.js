const doc = require('aws-sdk'),
    dynamo = new doc.DynamoDB(),
    uuid = require('uuid');

exports.handler = async (event, context) => {
    let new_id = uuid.v1();
    
    let params = {
        Item: {
            "id" : {
                S: new_id
            },
            "name" : {
                S: event.body.name
            },
            "description" : {
                S: event.body.description
            },
            "price" : {
                N: event.body.price
            },
            "image" : {
                S: event.body.image
            }
        },
        TableName: 'products'
    };

    dynamo.putItem(params, (err, data) => {
        if (err) console.log(err, err.stack);
        else context.succeed(data);
    });    
};