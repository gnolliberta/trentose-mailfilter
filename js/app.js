/* your code should go here */


// You can modify this object, add functions that you need
var MailModel = {
  /**
   * Initialises the model with the "database" of filter rules
   * and messages. This function is already implemented.
   */
   init : function(){
     this.rules = rules;
     this.messages = msgs;
   }, 
  
   /**
    * Filters out messages in the "database" that match the spam rules.
    * @return an array of messages, excluding those that match the filter rules.
    */
    filter : function(){
      var msg = this.messages;

      for(var i=0; i<msg.length; i++){
        for(var j=0; j< this.rules.length; j++){
            var index = msg[i].indexOf(this.rules[j]);
            if(index != -1){
                msg.splice(i,1);
            }
        }
      }
      return msg;
    }
};

var MailController = {
    init: function(){
        MailModel.init();
        MailView.init();
        MailView.filter();
    },
    get_data: function(i){
        return MailModel.messages[i];
    },
    get_messages_length: function(){
        return MailModel.messages.length;
    },
    filter: function(){
        return MailModel.filter();
    }
};
    
var MailView = {
    init: function(){
        for(var i=0; i<MailController.get_messages_length(); i++){
            var temp = '<li>' + MailController.get_data(i) + '</li>';
            $(".All").append(temp);
        }
    },
    filter: function(){
        $(".btn-filter").click(function(){
          $(".All").html("");
          var filtered = MailController.filter();
          for(var i=0; i< filtered.length; i++){
            $(".result").append('<li>'+filtered[i]+'</li>');
          }
        });
    }  
};

// Example of usage:
// MailModel.init()
// MailModel.filter() 
//  -> ["carlo@gmail.com", "trentose2@googlegroups.com"]


// We suggest to use js patters. 
// you can add here your views and controllers if you decide to do so.



$(document).ready(function(){
    
    MailController.init();
});