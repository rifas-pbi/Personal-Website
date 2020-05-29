 var options = {
        "key": "rzp_test_Sc7aHfyn0Hzx2z",
        "subscription_id": "sub_ES6k8ehlOURyz4",
        "name": "My Billing Label",
        "description": "Auth txn for sub_ES6k8ehlOURyz4",
        "handler": function (response){
          alert(response.razorpay_payment_id);
        }
      };
      var rzp1 = new Razorpay(options);
      document.getElementById('rzp-button').onclick = function(e){
        rzp1.open();
      }