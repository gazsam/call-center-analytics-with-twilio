require('dotenv').load()

var chai = require('chai');
var expect = chai.expect;
var should = chai.should;
var assert = chai.assert;


describe("testing twilio connectivity",function(){
  it("should connect to twilio",function(){
    var twilio = require('twilio')
    console.log(process.env.TWILIO_ACCOUNT_SID);
    var twilioClient = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN)
    var resp = new twilio.TwimlResponse()

    twilioClient.makeCall({
        url: "https://a606a4ed.ngrok.io/twilioVoice",
        to: process.env.MY_PHONE_NUMBER,
        from: process.env.TWILIO_PHONE_NUMBER
      },
      function(err, call) {
        assert(null == err);
        assert(null != call);

        assert(call.sid == process.env.TWILIO_ACCOUNT_SID)
      });
    });
  });
