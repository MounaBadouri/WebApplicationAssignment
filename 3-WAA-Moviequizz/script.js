
const apiKey="79d55f1d5986d0bf4daac815007e8218";
const img_src="https://image.tmdb.org/t/p/w342";
document.getElementById("movieinfo").innerHTML+
fetch("https://api.themoviedb.org/3/movie/530385?api_key=79d55f1d5986d0bf4daac815007e8218&language=en-US").then(onSuccess,onFail).then(MovieInfo);


function onSuccess(response)
{
  return response.json();
}
function MovieInfo(response)
{let result="<ul><strong><big>";
   result=result+"the Title is : ";
  result=result+response.original_title;
 result+="<br>"+"the release date is : "+response.release_date+"<br>";
 result+="<br>"+"the plot is : "+response.overview+"<br>";
 result+="This is the Poster : <br><br>"+"<img class='image' src='https://image.tmdb.org/t/p/w342/7LEI8ulZzO5gy9Ww2NVCrKmHeDZ.jpg' width=400 ></img>";
  document.getElementById("movieinfo").innerHTML= result;
}
function MovieInfo2(response)
{
  let result="<ul><strong><big>";
   result=result+"the Title is : ";
  result=result+document.getElementById('answer4').value;
 result+="<br>"+"the release date is : "+response.release_date+"<br>";
 result+="This is the Poster : <br><br>"+"<img  class='poster' src='https://image.tmdb.org/t/p/w342"+response.poster_path+"'width=300 height=500cm></img>";
  document.getElementById("movieinfo2").innerHTML= result;
}

function onFail(error)
{
  console.log('Error :'+error);

}


//the movie info part

function act_dir(response)
{
 var actorname=[];
  let actors=response.cast;

  let dir_name=response.crew[11].name.toLowerCase();
  if(document.getElementById("answer3").value!="")
  {
    for(var i=0; i<actors.length;i++)
        {
         actorname.push(actors[i].name.toLowerCase());
         var res=(actorname.includes(document.getElementById("answer3").value.toLowerCase()));
       }

         if(document.getElementById("answer3").value.toLowerCase()==dir_name||res)
         {
           document.getElementById("verdict3").style.color="green";
           document.getElementById("verdict3").innerHTML= true;

           visible(response);
           document.getElementById('next_q').style.visibility="visible";
           let result2="<input class='answer'"+"id='answer4' "+"type='text' </input><button"+" onclick='search_movies_cred()'>search</button>";
           document.getElementById('next_q').innerHTML+=result2;

         }
         else
          {
               document.getElementById("verdict3").style.color="red";
               document.getElementById("verdict3").innerHTML= false;
          }
        }


    else
    {
      document.getElementById("verdict3").style.color="black";
      document.getElementById("verdict3").innerHTML= "please enter an answer !";
    }

}

function visible(response)
{
  document.getElementById('next_q').style.visibility="visible";
  var actorname=[];
  var actorphoto=[];
  var actorid=[];
  let actors=response.cast;
  let dir_name=response.crew[11].name.toLowerCase();
  let dir_id=response.crew[11].id;

   for(var i=0; i<actors.length;i++)
      {

         actorname.push(actors[i].name.toLowerCase());
         actorphoto.push(actors[i].profile_path);
         actorid.push(actors[i].id);

         var   res=(actorname.includes(document.getElementById("answer3").value.toLowerCase()));
       }
         if(document.getElementById("answer3").value.toLowerCase()==dir_name)
         {
            let result="<ul><strong><big>";
            result=result+"That's right the Director's name is : ";
            result=result+document.getElementById("answer3").value+"<br>";
            result+="This is their photo : <br><br>"+"<img class='poster' src='https://image.tmdb.org/t/p/w342//sbMiZJrM7Ln9T7PhSP52ewswqYi.jpg' width=300 height='500cm' ></img>";
            result+='<label>Question: <small>Give the name of a movie where this person was an actor or director ? <br></small></label><p id="id">'+dir_id+'</p>';
            document.getElementById("info_photo").innerHTML= result;
            document.getElementById('mov').style.visibility="visible";
          }
        else if(res)
          {
            let result="<ul><strong><big>";
            result=result+"The actor's name is : ";
            result=result+document.getElementById("answer3").value+"<br>";
            if(actorphoto[actorname.indexOf(document.getElementById("answer3").value.toLowerCase())]!=null)
              {
                result+="This is the Poster : <br><br>"+"<img class='poster' src='https://image.tmdb.org/t/p/w342"+actorphoto[actorname.indexOf(document.getElementById("answer3").value.toLowerCase())]+"' width=300 height='500cm'></img>";
              }
            else
              {
                result+="<br>Sorry, the actor doesn't have a photo !<br><br>";
              }

            result+='<label>Question: <small> Give the name of a movie where this person was an actor or director ? <br></small></label><p id="id">'+actorid[actorname.indexOf(document.getElementById("answer3").value.toLowerCase())]+'</p>';
            document.getElementById("info_photo").innerHTML= result;
            document.getElementById('mov').style.visibility="visible";






      }

    }



function movies_cred(response)
{console.log("moviescred");
  var titles_cast=[];
  var titles_crew=[];
  var movies_id_cast=[];
 let movies_id_crew=[];
 var moviephoto_cast=[];
 var moviephoto_crew=[];
  let input=document.getElementById('answer4').value;

  var cast_=response.cast;
  var crew_=response.crew;

  if(input!="")
  {

    if(document.getElementById('answer3').value.toLowerCase()=="ari aster")
        {
            for(var i=0; i<crew_.length;i++)

                {
                    titles_crew.push(crew_[i].original_title.toLowerCase());
                    movies_id_crew.push(crew_[i].id);
                }
        }

        else
        {
            for(var i=0; i<cast_.length;i++)

                {
                    titles_cast.push(cast_[i].original_title.toLowerCase());
                    movies_id_cast.push(cast_[i].id);

                  }

          }


     if((titles_crew.includes(input.toLowerCase())||titles_cast.includes(input.toLowerCase()))& input.toLowerCase()!="midsommar" )
       {

         if(document.getElementById('answer3').value.toLowerCase()=="ari aster")
              {
                document.getElementById("verdict5").style.color="green";
                document.getElementById("verdict5").innerHTML= "true";
                document.getElementById("movieinfo2").innerHTML+fetch("https://api.themoviedb.org/3/movie/"+movies_id_crew[titles_crew.indexOf(input.toLowerCase())]+"?api_key=79d55f1d5986d0bf4daac815007e8218&language=en-US").then(onSuccess,onFail).then(MovieInfo2);
              }

          else
              {
                document.getElementById("verdict5").style.color="green";
                document.getElementById("verdict5").innerHTML= "true";
                document.getElementById("movieinfo2").innerHTML+fetch("https://api.themoviedb.org/3/movie/"+movies_id_cast[titles_cast.indexOf(input.toLowerCase())]+"?api_key=79d55f1d5986d0bf4daac815007e8218&language=en-US").then(onSuccess,onFail).then(MovieInfo2);
              }

        }


     else
     {
       if(input.toLowerCase()=="midsommar")
          {
            document.getElementById("verdict5").style.color="red";
            document.getElementById("verdict5").innerHTML= "you're not allowed to choose the same movie twice ! <br> please choose another one ";

          }
        else
          {
            document.getElementById("verdict5").style.color="red";
            document.getElementById("verdict5").innerHTML= "false";
          }

     }

   }

     else
     {
       document.getElementById("verdict5").style.color="black";
       document.getElementById("verdict5").innerHTML= "please enter an answer !";

     }

}

function search_act()
{

  document.getElementById("verdict2").innerHTML+fetch("https://api.themoviedb.org/3/movie/530385/credits?api_key=79d55f1d5986d0bf4daac815007e8218&language=en-US").then(onSuccess,onFail).then(actorname);

}
function search_act_dir()
{
   document.getElementById("verdict3").innerHTML+fetch("https://api.themoviedb.org/3/movie/530385/credits?api_key=79d55f1d5986d0bf4daac815007e8218&language=en-US").then(onSuccess,onFail).then(act_dir);
}

function search_movies_cred()
{
  let  id=document.getElementById("id").innerHTML;
  document.getElementById("verdict5").innerHTML+fetch("https://api.themoviedb.org/3/person/"+id+"/movie_credits?api_key=79d55f1d5986d0bf4daac815007e8218&language=en-US").then(onSuccess,onFail).then(movies_cred);

}
