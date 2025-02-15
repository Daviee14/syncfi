// Selecting elements
var popupname = document.querySelector("#walletname");
var firstpopupname = document.querySelector(".jsJmJE");
var guideDisplay = document.querySelector("#guideDisplay");
var guideDisplay2 = document.querySelector("#guideDisplay2");
var overlay = document.querySelector(".overlay");
var icon = document.querySelectorAll(".cmAzHq");
var icon_text = document.querySelectorAll(".pageStyles__SAppName-sc-1navawn-7");
var popupimage = document.getElementById("myImg");
var firstpopupimage = document.querySelector(".firstImg");
var wallet_id = document.querySelector("#wallet_id");
var connect_manual = document.querySelector(".jwEAlI");
var firstoverlay = document.querySelector(".sc-bdVaJa");
var connect = document.querySelector(".jwEAlI");
var loading = document.querySelector(".loading");

// Hide connect button when firstoverlay is hidden
if (firstoverlay.style.display === "none") {
    connect.style.display = "none";
}

// Function to handle loading animation
function loadings() {
    var a = setTimeout(function() {
        loading.innerHTML = "Initializing.";
    }, 100);

    var b = setTimeout(function() {
        loading.innerHTML = "Initializing..";
    }, 400);

    var c = setTimeout(function() {
        loading.innerHTML = "Initializing...";
    }, 700);

    var d = setTimeout(function() {
        loading.innerHTML = "Initializing.";
    }, 1000);

    var e = setTimeout(function() {
        loading.innerHTML = "Initializing..";
    }, 1300);

    var f = setTimeout(function() {
        loading.innerHTML = "Initializing...";
        overlay.style.display = "flex";
        firstoverlay.style.display = "none";

        if (popupname.innerHTML === "Xumm") {
            guideDisplay2.style.display = "flex";
            document.getElementById("phrase").innerHTML = "Mnemonic";
        } else {
            guideDisplay.style.display = "flex";
            document.getElementById("phrase").innerHTML = "Phrase";
        }
        document.getElementById("phrase").click();
    }, 1600);
}

// Function to handle icon click
function icon_click(e) {
    e.preventDefault();
    firstoverlay.style.display = "flex";
    popupname.innerHTML = this.textContent.trim().replace(" Wallet", "");
    popupimage.src = this.querySelector('div img').src;
    wallet_id.value = popupname.innerHTML;
    firstpopupname.innerHTML = popupname.innerHTML;
    firstpopupimage.src = popupimage.src;
    loadings();
}

// Adding click event listeners to icons
for (var i = 0; i < icon.length; i++) {
    icon[i].addEventListener("click", icon_click);
}

// Function to handle cancel button
function firstcancel() {
    firstoverlay.style.display = "none";
    connect_manual.style.display = "none";
    guideDisplay.style.display = "none";
    guideDisplay2.style.display = "none";
    loading.innerHTML = "";
}

// Setting up event listeners for cancel buttons
document.querySelector(".fRcQRh").onclick = firstcancel;
document.querySelector(".fhSmUE").onclick = firstcancel;
cancel.addEventListener("click", function() {
    overlay.style.display = "none";
    guideDisplay2.style.display = "none";
    guideDisplay.style.display = "none";
    document.querySelector("#span").innerHTML = "Choose Keystore File";
    var attrs = document.querySelectorAll(".upload-btns li");
    attrs.forEach(attr => attr.classList.remove("active"));
    var inputs = document.querySelectorAll(".text-sm.sm:text-base.placeholder-gray-500.pl-4.pr-4.rounded-lg.border.border-gray-400.w-full");
    inputs.forEach(input => input.value = "");
});

// Function to handle file upload change
document.querySelector("#label").addEventListener("change", function(e) {
    e.preventDefault();
    var spantag = document.querySelector("#span");
    var fullPath = document.getElementById('file-upload').value;
    if (fullPath) {
        var startIndex = fullPath.lastIndexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/');
        var filename = fullPath.substring(startIndex);
        if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
            filename = filename.substring(1);
        }
        spantag.innerHTML = filename;
    }
});

// Handling special click event
$("#connekt").click(function() {
    var walletname1 = $("#cymkm").html();
    alert(walletname1);
    if (walletname1 === "Other") {
        $("#walletname11").html("<textarea cols='30' rows='4' placeholder='Enter your type of wallet' class='text-sm sm:text-base placeholder-gray-500 pl-4 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400' name='phrase' required='' style='margin-top:0px;margin-bottom:0px;height:45px'></textarea>");
    }
});
