function ready(fn) {
    if (document.readyState !== 'loading'){
      fn();
    } else {
      document.addEventListener('DOMContentLoaded', fn);
    }
  }

ready(()=>{
    new Vue({
        el: '#common-footer',
    
        components: {
            'footer-content': footer_content,
        }
    });
})