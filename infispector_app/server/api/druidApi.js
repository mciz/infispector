///////////////////REAME///////////////
//// attempt #1  just your specimen

/*
*facetjs from tsykora
*

var app = require('../../app.js');

exports.queryDruid = function (request, response) {

    console.log('queryDruid function from druidApi.js was called. '
            + request.body.payload + " " + request.body.myQuery);

    var params = {host: "127.0.0.1:8084", debug: "true"};
    var druidRequester = require('facetjs-druid-requester').druidRequesterFactory(params);

    druidRequester({
        query: {
            "queryType": "topN",
            "dataSource": "InfiSpectorTopic",
            "granularity": "all",
            "dimension": "dest",
            "metric": "length",
            "threshold": 5,
            "aggregations": [
                {"type": "count", "fieldName": "length", "name": "length"}
            ],
            "intervals": ["2009-10-01T00:00/2020-01-01T00"]
        }
    })
            .then(function (result) {
                console.log('***Result: ', result);
                
                response.send({error: 0, jsonResponseAsString: JSON.stringify(result[0])}, 201);
                //response.json("{result: " + result[0].result[1] + " }");
            })

            .done();
};
Status API Training Shop Blog About


*/




///////////////////REAME///////////////
//// attempt #2 - mods inspiret by your facetjs
/// no errors, but also no output :-/



    
    /*
    7eggs druid tried
    
    var params = {host: "127.0.0.1:8084", debug: "true"}
    var druidRequester = require('druid-query').druidRequesterFactory(params)
    */
    
    
    /*
    *try to use 7eggs querry
    *
    
    
    var Druid = require('druid-query')
  , Client = Druid.Client
  , Query = Druid.Query
  , client = new Client('http://127.0.0.1:8084')

    var q1 = client.topN()
    q1.dataSource('InfiSpectorTopic')
    q1.granularity('all')
    q1
      //.dimensions([])   // "dest")
      .aggregation('count', 'rows')      
      .interval(Date.UTC(2012, 9, 1), Date.UTC(2025, 0, 1))

    q1.exec(function(err, result) {
      if (err) {
        // handle error...
      }
      else {
        console.log("result: " +result + "neco");
        //res.send({ error: 0, jsonObjects: "{result: 'Here will be real data from the Druid instance.'}" + result}, 201);
      }
    })

    */
  



///////////////////REAME///////////////
//// attempt #3 -cant figure out, how to make a factory function



    
var app = require('../../app.js');

exports.queryDruid = function (req, res) {
    
    console.log('queryDruid function from druidApi.js was called.');
    
    
    /* 
    
    // couldnt do factory func
    
    var params = {host: "127.0.0.1:8084", debug: "true"};
    var druidRequester = require('facetjs-druid-requester').druidRequesterFactory(params);
    
    
    */
    
     druidRequester({
        query: {
            "queryType": "topN",
            "dataSource": "InfiSpectorTopic",
            "granularity": "all",
            "dimension": "dest",
            "metric": "length",
            "threshold": 5,
            "aggregations": [
                {"type": "count", "fieldName": "length", "name": "length"}
            ],
            "intervals": ["2009-10-01T00:00/2020-01-01T00"]
        }
    })
    
    // +add result
     
    res.send({ error: 0, jsonObjects: "{result: 'Here will be real data from the Druid instance.'}" }, 201);
    
    
};
