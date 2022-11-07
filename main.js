var images = ["https://i.postimg.cc/MGn9GJXw/family.jpg","IMG_2693.jpg", "IMG-3938.jpg" , "IMG-3195.jpg", "IMG-5365.jpg", "IMG-3130.jpg", "IMG-3182.jpg", "IMG-4491.jpg"];
var names = ["Family Book","Dad", "Mom", "Sanjith", "Arshith", "Grandpa & Grandma", "Sanjith & Arshith + Grandpa & Grandma", "Sanjith & Arshith + Mom & Dad"];
var i = 0;
function update()
{
    i++;
    var numbers_of_family_member_in_array = 7
    if(i > numbers_of_family_member_in_array)
      {
          i = 0;
      }
  
    var updatedImage = images[i];
    var updatedName = names[i] ;
 
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}
