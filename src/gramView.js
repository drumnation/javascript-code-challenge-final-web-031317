class GramView {
  render(new_gram) {
    return `<div class="row">
                <div class="card z-depth-5">
                  <div class="card-image">
                    <img class="responsive-img" src="${new_gram.image_url}">
                    <span class="card-title">Card Title</span>
                  </div>
                  <div class="card-content">
                    <p>${new_gram.caption}</p>
                  </div>
                </div>
            </div>`
  }
}
