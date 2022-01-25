

  $(document).ready(function() {
      $(".showComparison").click(function() {
        $(this).next(".modal").css("display", "block");
      });
      $(".closeModal").click(function() {
        console.log("click")
        $(".modal").css("display", "none");
      });

      // $(".modal").click(function() {
      //   $(".modal").css("display", "none");
      // });
    


  });
  // $(document).mouseup(function (e) { 
  //   var container = $(".container");
  //   if(!container.is(e.target) && container.has(e.target).length === 0) { 
  //     console.log('test test test')
  //     // rest code here 
  // } 
  //   //   if(!$(".modal").is(e.target) && $(".modal").has(e.target).length === 0) { 
  //   // }
  // });

//   $(document).mouseup(function(e) 
// {
//     var container = $(".container");

//     // if the target of the click isn't the container nor a descendant of the container
//     if (!container.is(e.target) && container.has(e.target).length === 0) 
//     {
//         container.hide();
//     }
// });

// $("body").click(function(e){
//   if($(".modal").css("display", "block")){
//       console.log('dasfds')
//           if(e.target.className !== "diff-window"){
//             $(".modal").css("display", "none")
//             console.log('asdfdasfdsadsa')
//           }
//       // $(".modal").css("display", "none")
//     }
//   }
// );

// $("body").click(function(e){
//     if(e.target.className !== "diff-window"){
//       $(".modal").css("display", "none")
//       console.log('asdfdasfdsadsa')
//     }
//   }
// );