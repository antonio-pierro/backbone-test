define(["app", "tpl!apps/contacts/common/templates/form.tpl", "backbone.syphon"],
       function(ContactManager, formTpl){
  ContactManager.module("ContactsApp.Common.Views", function(Views, ContactManager, Backbone, Marionette, $, _){
    Views.Form = Marionette.ItemView.extend({
      template: formTpl,

      onFormDataInvalid: function(errors){
        var $view = this.$el;

        var clearFormErrors = function(){
          var $form = $view.find("form");
          $form.find(".help-inline.error").each(function(){
            $(this).remove();
          });
          $form.find(".control-group.error").each(function(){
            $(this).removeClass("error");
          });
        }

        var markErrors = function(value, key){
          var $controlGroup = $view.find("#contact-" + key).parent();
          var $errorEl = $("<span>", { class: "help-inline error", text: value });
          $controlGroup.append($errorEl).addClass("error");
        }

        clearFormErrors();
        _.each(errors, markErrors);
      }
    });
  });

  return ContactManager.ContactsApp.Common.Views;
});
