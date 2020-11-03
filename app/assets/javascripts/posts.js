document.addEventListener('DOMContentLoaded', function(){
    

    document.querySelector('#post_form').addEventListener('ajax:success', function(){
        let title = document.querySelector('#post_title');
        let content = document.querySelector('#post_content');

        title.value = '';
        content.value = '';
    })
  
})