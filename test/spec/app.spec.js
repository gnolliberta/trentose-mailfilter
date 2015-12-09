describe("MailModel", function() {
  
    it("init should work properly", function(){
        MailModel.init();
        
        expect(MailModel.rules).toEqual(rules);
        expect(MailModel.messages).toEqual(msgs);
    });
    it("init should work properly", function(){
        var filter = MailModel.filter();
        
        expect(filter).toEqual(["carlo@gmail.com", "trentose2@googlegroups.com"]);
    });
  });
