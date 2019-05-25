var express = require('express');
var router = express.Router();
var AWS = require('aws-sdk');

var embedUrl = '';
var quicksight = new AWS.Service({
    apiConfig: require(__dirname + '/../node_modules/aws-sdk/apis/quicksight-2018-04-01.min.json'),
    region: 'us-east-1',
});



/* GET quicksigh url */
router.get('/', function (req, res, next) {
    quicksight.getDashboardEmbedUrl({
        'AwsAccountId': '151376444436',
        'DashboardId': '40f7cbf8-5ef4-4bd7-9c72-136c1f173bf8',
        'IdentityType': 'IAM',
        'ResetDisabled': true,
        'SessionLifetimeInMinutes': 100,
        'UndoRedoDisabled': false

    }, function (err, data) {
        if (data) {
            res.send(data);
        }
        console.log(data);
        console.log(err);
    });
});

module.exports = router;