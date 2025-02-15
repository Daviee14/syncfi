(function() {
  // Function to get all data in form and return as object
  function getFormData(form) {
    var elements = form.elements;
    var honeypot;
    
    // Filter out the honeypot field and get the names of the fields
    var fields = Object.keys(elements)
      .filter(function(key) {
        if (elements[key].name === "honeypot") {
          honeypot = elements[key].value;
          return false;
        }
        return true;
      })
      .map(function(key) {
        return elements[key].name || elements[key].item(0).name; // handle Edge's html collection
      })
      .filter(function(item, pos, self) {
        return self.indexOf(item) == pos && item;
      });

    var formData = {};

    // Populate formData object with field values
    fields.forEach(function(name) {
      var element = elements[name];
      
      // Handle singular form elements
      if (!element.length) {
        formData[name] = element.value;
      } else { // Handle multiple items like checkboxes and select elements
        var data = [];
        for (var i = 0; i < element.length; i++) {
          var item = element.item(i);
          if (item.checked || item.selected) {
            data.push(item.value);
          }
        }
        formData[name] = data.join(', ');
      }
    });

    // Add form-specific values to formData
    formData.formDataNameOrder = JSON.stringify(fields);
    formData.formGoogleSheetName = form.dataset.sheet || "responses"; // default sheet name
    formData.formGoogleSendEmail = form.dataset.email || ""; // no email by default

    return { data: formData, honeypot: honeypot };
  }

  // Function to handle form submission
  function handleFormSubmit(event) {
    event.preventDefault(); // Prevent default form submission
    
    var form = event.target;
    var formData = getFormData(form);
    var data = formData.data;

    // If honeypot field is filled, assume spam bot and do nothing
    if (formData.honeypot) {
      return false;
    }

    disableAllButtons(form); // Disable all form buttons during submission

    var url = form.action;
    var xhr = new XMLHttpRequest();
    xhr.open('POST', url);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
        form.reset(); // Reset form on successful submission

        var formElements = form.querySelector(".form-elements");
        if (formElements) {
          formElements.style.display = "none"; // Hide form elements
        }

        var thankYouMessage = form.querySelector(".thankyou_message");
        if (thankYouMessage) {
          thankYouMessage.style.display = "block"; // Show thank you message
        }
      }
    };

    // Encode form data for POST request
    var encoded = Object.keys(data).map(function(key) {
      return encodeURIComponent(key) + "=" + encodeURIComponent(data[key]);
    }).join('&');

    xhr.send(encoded); // Send encoded form data
  }

  // Function to bind form submit event
  function loaded() {
    var forms = document.querySelectorAll("form.gform");
    for (var i = 0; i < forms.length; i++) {
      forms[i].addEventListener("submit", handleFormSubmit, false);
    }
  }

  // DOMContentLoaded event listener to call loaded() function
  document.addEventListener("DOMContentLoaded", loaded, false);

  // Function to disable all form buttons during submission
  function disableAllButtons(form) {
    var buttons = form.querySelectorAll("button");
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].disabled = true;
    }
  }
})();
