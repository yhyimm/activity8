

$(document).ready(function() {
  var availableLangs = ['JavaScript', 'Java', 'Python', 'C++', 'Ruby', 'PHP', 'Swift', 'Kotlin',
  'Go', 'Perl', 'R', 'Scala', 'TypeScript', 'C#', 'Objective-C', 'HTML', 'CSS',
  'SQL', 'MATLAB', 'Shell', 'Rust', 'Haskell', 'Lua', 'Groovy', 'Dart',
  'VB.NET', 'Assembly', 'F#', 'Elixir', 'Julia', 'COBOL', 'Ada', 'Fortran',
  'Scheme', 'Prolog', 'Clojure', 'VBScript', 'PowerShell', 'Delphi', 'Racket',
  'Erlang', 'PL/SQL', 'Crystal', 'OCaml', 'Bash', 'Pascal', 'Lisp', 'Tcl'];

  $('#languages').autocomplete({
    source: availableLangs
  });

  $("#data").datepicker();
});
