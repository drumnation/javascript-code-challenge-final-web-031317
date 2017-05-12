$(document).ready(function(){


  $('input#submit').on('click', function(event) {
    let image_url = $('input#image_url').val()
    let caption = $('input#caption').val()
    new_gram = new Gram(image_url, caption)
    view = new GramView(new_gram)
    event.preventDefault()
    $('#photo-list').append(view.render(new_gram))
    $("#photo-list").draggable({ handle: '#drag' })
    image_url = $('input#image_url').val('')
    caption = $('input#caption').val('')
  })

})
