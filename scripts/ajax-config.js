$.ajaxPrefilter(function(options, originalOptions, jqXHR){
  if(options.url.match(/api.parse.com/)){
    options.headers = options.headers || {};
    options.headers['X-Parse-Application-Id'] = 'y1UnzsxJfkcaOnFAYsIloGUVnEl74iWE0ZZyos0d';
    options.headers['X-Parse-REST-API-Key'] = 'wbVNgG4Qfiahcj2CFY6Kq4mA2ZgByyvrx3fRKBMk';
  }
});
