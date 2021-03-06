const doc = require('aws-sdk'),
    dynamo = new doc.DynamoDB();

exports.handler = async (event, context) => {

    var params = {
        TableName:'products',
        Key: {
            'id' : {
                S: event.id
            }
        }
   };

   try {
        const data = await dynamo.getItem(params).promise();
        context.succeed(data);
   } catch(err) {
       console.log(err.stack);
   }   
};
