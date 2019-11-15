var heart = document.getElementsByClassName("fas fa-heart");
var reTweet = document.getElementsByClassName("fas fa-retweet");
var trash = document.getElementsByClassName("fas fa-minus-circle");

Array.from(heart).forEach(function(element) {
      element.addEventListener('click', function(){
        const subject = this.parentNode.parentNode.childNodes[1].innerText
        const responseColor = this.parentNode.parentNode.childNodes[3].innerText
        const msg = this.parentNode.parentNode.childNodes[5].innerText
        const num = parseFloat(this.parentNode.parentNode.childNodes[7].innerText)
        fetch('messages', {
          method: 'put',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            'subject': subject,
            'responseColor': responseColor,
            'message': msg,
            'heart': num
          })
        })
        .then(response => {
          if (response.ok) return response.json()
        })
        .then(data => {
          console.log(data)
          window.location.reload(true)
        })
      });
});

Array.from(reTweet).forEach(function(element) {
      element.addEventListener('click', function(){
        const subject = this.parentNode.parentNode.childNodes[1].innerText
        const responseColor = this.parentNode.parentNode.childNodes[3].innerText
        const msg = this.parentNode.parentNode.childNodes[5].innerText
        const num = parseFloat(this.parentNode.parentNode.childNodes[7].innerText)
        fetch('chat', {
          method: 'post',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            'subject': subject,
            'responseColor': responseColor,
            'message': msg,
            'heart': num

          })
        })
        .then(response => {
          if (response.ok) return response.json()
        })
        .then(data => {
          console.log(data)
          window.location.reload(true)
        })
      });
});
Array.from(reTweet).forEach(function(element) {
      element.addEventListener('click', function(){
        const subject = this.parentNode.parentNode.childNodes[1].innerText
        const responseColor = this.parentNode.parentNode.childNodes[3].innerText
        const msg = this.parentNode.parentNode.childNodes[5].innerText
        const num = parseFloat(this.parentNode.parentNode.childNodes[7].innerText)
        fetch('chat2', {
          method: 'put',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            'subject': subject,
            'responseColor': responseColor,
            'message': msg,
            'heart': num

          })
        })
        .then(response => {
          if (response.ok) return response.json()
        })
        .then(data => {
          console.log(data)
          window.location.reload(true)
        })
      });
});


Array.from(trash).forEach(function(element) {
      element.addEventListener('click', function(){
        const subject = this.parentNode.parentNode.childNodes[1].innerText
        const responseColor = this.parentNode.parentNode.childNodes[3].innerText
        const message = this.parentNode.parentNode.childNodes[5].innerText
        fetch('messages', {
          method: 'delete',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            'subject': subject,
            'responseColor': responseColor,
            'message': message
          })
        }).then(function (response) {
          window.location.reload()
        })
      });
});
