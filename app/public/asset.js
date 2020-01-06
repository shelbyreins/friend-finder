// $("#submit").on("click", function (event) {
//     event.preventDefault();

//     var valid = true;

//     if ($("#name").val() === "" || $("#photo").val() === "") {
//         valid = false;
//     } else if ($("#question1").val() === "" || $("#question2").val() === "" || $("#question3").val() === "" || $("#question4").val() === "" || $("#question5").val() === "" || $("#question6").val() === "" || $("#question7").val() === "" || $("#question8").val() === "" || $("#question9").val() === "" || $("#question10").val() === "") {
//         valid = false;
//     }

//     if (valid === true) {

//         var user = {
//             name: $("#name").val().trim(),
//             photo: $("#photo").val().trim(),
//             scores: [
//                 $("#question1").val(),
//                 $("#question2").val(),
//                 $("#question3").val(),
//                 $("#question4").val(),
//                 $("#question5").val(),
//                 $("#question6").val(),
//                 $("#question7").val(),
//                 $("#question8").val(),
//                 $("#question9").val(),
//                 $("#question10").val()
//             ]
//         };

//         $.post("/api/friends", user,
//             function (data) {
//                 $("#match-name").text(data.name)
//                 $("#match-image").attr("src", data.photo)
//             });

//     } else {
//         alert("Please complete all questions")
//     }
// });