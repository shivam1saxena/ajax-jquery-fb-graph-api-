// main document ready function to check if dom is loaded fully or not

$( document ).ready(function() {

    var myFacebookToken = 'EAACEdEose0cBABEdHDMQpSVkhJHJoIpymxddbND825i2ZCOOkMayIBOrMd8rE2QtzRvOPRVky2xJjB6832MjRSTqAp6n8SscnZAhNZCZAvwtToItwzlJa0Iifsm7MG9rVMKmuMRDj04zIOHESZCiZB8N10MivHFBc9QeZApelDG0s3VTqVpm4xZAocMlxqPtHS8ZD';

    function getFacebookInfo(){

        $.ajax('https://graph.facebook.com/me?fields=email,hometown,id,name,posts&access_token='+myFacebookToken,{

                success : function(response){
                    $("#info").show();
                    console.log(response);
                    console.log(typeof(response));
                    $("#myEmail").text(response.email);
                    $("#myProfileId").html('<a target="blank" href="https://facebook.com/'+response.id+'">https://facebook.com/'+response.id+'</a>');
                    $("#myHomeTown").text(response.hometown.name);

                }
            }//end argument list



        );// end ajax call


    }// end get facebook info



    function getPosts(){

        $.ajax('https://graph.facebook.com/me?fields=email,hometown,id,name,posts&access_token='+myFacebookToken,{

                success : function(response){
                    $("#posts").show();
                    console.log(response);
                    console.log(typeof(response));
                    var array = response.posts.data;
                    for(var i=0;i<array.length;i++){
                        $("#posts").append('<p>Post:'+array[i].story+'</p>');
                    }

                }
            }//end argument list



        );// end ajax call


    }
    $("#posts").hide();
    $("#info").hide();
    $("#facebookBtn").on('click',getFacebookInfo);
    $("#postBtn").on('click',getPosts)




});